// import { BellIcon, CheckIcon } from '@radix-ui/react-icons';

import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// import { Switch } from '@/components/ui/switch';
import { cn } from '@/helpers';

const notifications = [
  {
    description:
      'Onboard international contractors quickly and compliantly with localized contracts.',
  },
  {
    description:
      'Onboard international contractors quickly and compliantly with localized contracts.',
  },
  {
    description:
      'Onboard international contractors quickly and compliantly with localized contracts.',
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function CardForTariff({ className, ...props }: CardProps) {
  return (
    <Card className={cn('w-[450px]', className)} {...props}>
      <CardHeader>
        <CardTitle>FREE</CardTitle>
        <CardDescription className="text-foreground">
          Manage and pay international contractors
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellIcon />
          <Switch />
        </div> */}
        <div className="border-t-2 pt-6">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[40px_1fr] items-start gap-3 pb-4 last:mb-0 last:pb-0"
            >
              {/* <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" /> */}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f9ff] text-foreground dark:bg-[#222944]">
                <Check />
              </span>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="h-12 w-full py-5 text-2xl font-semibold">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
