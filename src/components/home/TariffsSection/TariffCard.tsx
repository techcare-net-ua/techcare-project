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

interface Props extends React.ComponentProps<typeof Card> {
  data: Tariff;
}

export function TariffCard({ className, data, ...props }: Props) {
  return (
    <Card className={cn('flex h-full flex-col', className)} {...props}>
      <CardHeader className="items-start space-y-4 sm:px-8">
        <Badge className="bg-[#f5f9ff] px-4 py-2 uppercase text-foreground hover:bg-[#f5f9ff] xl:text-base dark:bg-[#222944] hover:dark:bg-[#222944]">
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
      <CardContent className="grid flex-grow gap-4 sm:px-8">
        <div className="space-y-4 border-t-2 pt-6">
          {data.description.map((notification, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_auto] items-start gap-3 last:mb-0 last:pb-0"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f5f9ff] text-foreground dark:bg-[#222944]">
                <Check size={14} />
              </span>
              <div className="">
                <p className="text-sm text-muted-foreground xl:text-base">
                  {notification.item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-8 sm:px-8">
        <Button className="w-full rounded-xl py-8 text-2xl font-semibold">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
