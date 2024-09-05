import { z } from 'zod';

export const schemaRegister = z.object({
  username: z
    .string()
    .trim()
    .min(3, {
      message: 'Ім`я користувача має містити від 3 до 30 символів',
    })
    .max(30, {
      message: 'Ім`я користувача має містити від 3 до 30 символів',
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

export const schemaLogin = z.object({
  identifier: z
    .string()
    .trim()
    .min(3, { message: 'Ідентифікатор має містити більше 3 символів' })
    .max(30, {
      message:
        'Будь ласка, введіть дійсне ім`я користувача або адресу електронної пошти',
    }),
  password: z
    .string()
    .trim()
    .min(6, { message: 'Пароль має містити від 6 до 50 символів' })
    .max(50, { message: 'Пароль має містити від 6 до 50 символів' }),
});
