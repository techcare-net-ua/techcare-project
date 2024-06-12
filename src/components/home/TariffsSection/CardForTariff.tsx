import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/helpers';

import { Tariff } from './data';

type CardProps = React.ComponentProps<typeof Card> & { data: Tariff };

export function CardForTariff({ className, data, ...props }: CardProps) {
  return (
    <Card
      className={cn('w-full max-w-[450px] xl:max-w-[670px]', className)}
      {...props}
    >
      <CardHeader className="items-start space-y-5 px-8 pb-8 pt-16 xl:space-y-6 xl:px-12 xl:pb-12">
        <Badge className="bg-[#f5f9ff] px-6 py-3 uppercase text-foreground hover:bg-[#f5f9ff] xl:text-base dark:bg-[#222944] hover:dark:bg-[#222944]">
          {data.badge}
        </Badge>
        <CardTitle className="text-4xl xl:text-5xl">
          {data.isFree ? (
            <span>FREE</span>
          ) : (
            <>
              <span>$</span>
              <span>{data.price} </span>
              <span className="text-sm uppercase text-muted-foreground xl:text-base">
                /month
              </span>
            </>
          )}
        </CardTitle>
        <CardDescription className="text-foreground xl:text-base">
          {data.forWhat}
        </CardDescription>
        <p className="text-sm text-[#3981f7] xl:text-base">{data.note}</p>
      </CardHeader>
      <CardContent className="grid gap-4 px-8 pb-8 xl:px-12 xl:pb-12">
        <div className="border-t-2 pt-6 xl:pt-8">
          {data.description.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[40px_1fr] items-start gap-3 pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f9ff] text-foreground dark:bg-[#222944]">
                <Check />
              </span>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground xl:text-base">
                  {notification.item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-8 pb-8 xl:px-12 xl:pb-12">
        <Button className="h-12 w-full py-5 text-2xl font-semibold">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
