'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { loginUserAction } from 'src/data/actions/auth-actions';

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
import { useToast } from '@/components/ui/use-toast';

import { StrapiErrors } from '../StrapiErrors';
import { SubmitButton } from '../SubmitButton';
import { ZodErrors } from '../ZodErrors';

const INITIAL_STATE = {
  data: null,
  strapiErrors: null,
  zodErrors: null,
  message: null,
};

export function SigninForm() {
  const { toast } = useToast();
  const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);

  useEffect(() => {
    if (formState?.message) {
      toast({
        variant: 'destructive',
        description: formState.message,
        duration: 10000,
      });
    }
  }, [formState.message, toast]);

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Увійти</CardTitle>
            <CardDescription>
              Введіть свої дані, щоб увійти в обліковий запис
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Електронна пошта</Label>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="електронна пошта або ім'я користувача"
              />
              <ZodErrors error={formState?.zodErrors?.identifier} />
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

          <CardFooter className="flex flex-col gap-[8px]">
            <SubmitButton
              loadingText={'Завантаження...'}
              text={'Увійти'}
              className={'w-full'}
            />
            <StrapiErrors error={formState?.strapiErrors} />
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Не маєте облікового запису?
          <Link className="ml-2 underline" href="signup">
            Зареєструватися
          </Link>
        </div>
      </form>
    </div>
  );
}
