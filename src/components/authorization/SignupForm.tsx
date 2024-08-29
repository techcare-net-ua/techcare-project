'use client';

import { useFormState } from 'react-dom';
import Link from 'next/link';
import { registerUserAction } from 'src/data/actions/auth-actions';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { StrapiErrors } from '../StrapiErrors';
import { ZodErrors } from '../ZodErrors';

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};

export const SignupForm = () => {
  const [formState, formAction] = useFormState(
    registerUserAction,
    INITIAL_STATE,
  );

  console.log(formState);

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">
              Зареєструватися
            </CardTitle>
            <CardDescription>
              Введіть свої дані, щоб створити новий обліковий запис
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Ім&apos;я користувача</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Steve Jobs"
              />
              <ZodErrors error={formState?.zodErrors?.username} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Електронна пошта</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="steve@example.com"
              />
              <ZodErrors error={formState?.zodErrors?.email} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="пароль"
              />
              <ZodErrors error={formState?.zodErrors?.password} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-[4px]">
            <button type="submit" className="w-full">
              Зареєструватися
            </button>
            <StrapiErrors error={formState?.strapiErrors} />
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Є обліковий запис?
          <Link className="ml-2 underline" href="signin">
            Увійти
          </Link>
        </div>
      </form>
    </div>
  );
};
