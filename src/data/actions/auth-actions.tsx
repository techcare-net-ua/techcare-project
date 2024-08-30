'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import {
  loginUserService,
  registerUserService,
} from '../services/auth-services';

import { schemaLogin, schemaRegister } from './schemaZod';

const config = {
  maxAge: 60 * 60 * 24 * 7,
  path: '/',
  domain: process.env.HOST ?? 'localhost',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
};

export const registerUserAction = async (
  prevState: any,
  formData: FormData,
) => {
  const validateFields = schemaRegister.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validateFields.success) {
    return {
      ...prevState,
      zodErrors: validateFields.error.flatten().fieldErrors,
      message: 'Відсутні поля. Не вдалося зареєструватися',
    };
  }

  const responseData = await registerUserService(validateFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      message: 'Упс! Щось пішло не так. Будь ласка, повторіть спробу.',
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: 'Електронна пошта або ім`я користувача вже зайняті',
      zodErrors: null,
      message: 'Не вдалось зареєструватись.',
    };
  }

  cookies().set('jwt', responseData.jwt, config);
  redirect('/my-services');
};

export const loginUserAction = async (prevState: any, formData: FormData) => {
  const validateFields = schemaLogin.safeParse({
    identifier: formData.get('identifier'),
    password: formData.get('password'),
  });

  if (!validateFields.success) {
    return {
      ...prevState,
      zodErrors: validateFields.error.flatten().fieldErrors,
      message: 'Відсутні поля. Не вдалося увійти.',
    };
  }

  const responseData = await loginUserService(validateFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: responseData.message,
      zodErrors: null,
      message: 'Упс! Щось пішло не так. Будь ласка, повторіть спробу.',
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: 'Недійсний ідентифікатор або пароль',
      zodErrors: null,
      message: 'Не вдалось увійти',
    };
  }

  cookies().set('jwt', responseData.jwt, config);
  redirect('/my-services');
};

export const logoutAction = async () => {
  cookies().set('jwt', '', { ...config, maxAge: 0 });
  redirect('/signin');
};
