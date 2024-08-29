'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { registerUserService } from '../services/auth-services';

const config = {
  maxAge: 60 * 60 * 24 * 7,
  path: '/',
  domain: process.env.HOST ?? 'localhost',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
};

const schemaRegister = z.object({
  username: z
    .string()
    .trim()
    .min(3, {
      message: 'Ім`я користувача має містити від 3 до 20 символів',
    })
    .max(20, {
      message: 'Ім`я користувача має містити від 3 до 20 символів',
    }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'Введіть дійсну адресу електронної пошти' }),
  password: z
    .string()
    .trim()
    .min(6, { message: 'Пароль має містити від 6 до 50 символів' })
    .max(50, { message: 'Пароль має містити від 6 до 50 символів' }),
});

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
    console.log(responseData);
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
