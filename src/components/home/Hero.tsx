import Image from 'next/image';
import heroImage from 'public/hero.jpg';

import { Container } from '@/components';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[700px]">
      <div className=" absolute left-0 top-0 h-full ">
        <Image
          src={heroImage}
          alt="image background"
          quality={100}
          priority={true}
          className="h-full w-screen  object-cover"
        />
        <div className="absolute left-0 top-0 hidden h-20 w-screen bg-gradient-to-b from-background to-transparent dark:block"></div>
        <div className="absolute bottom-0 left-0 hidden h-20 w-screen bg-gradient-to-t from-background to-transparent dark:block"></div>
      </div>
      <Container
        className="flex flex-col items-center pb-5 pt-20 md:flex-row md:pt-28 lg:justify-between lg:px-16 lg:pt-32
      "
      >
        <div className="space-y-10 pb-10 md:space-y-16 md:pr-4 lg:w-[800px]">
          <h1 className="text-primary-foreground opacity-80 drop-shadow-2xl md:text-left md:text-5xl lg:text-center lg:text-7xl lg:font-bold dark:text-foreground">
            Techcare - надійний провідник у світ інформаційних технологій
          </h1>
          <p className="mx-auto w-[400px] text-primary-foreground md:mx-0 lg:w-full  lg:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            consequatur ea veritatis consectetur expedita reiciendis fugiat
            culpa tempora dolores voluptatem.
          </p>
        </div>
        <Card className="mt-0 w-[400px] rounded-lg opacity-80 md:max-w-[400px]  lg:w-[500px]">
          <CardHeader className="lg:space-y-3">
            <CardTitle className="lg:text-3xl">
              Потрібна допомога системного адміністратора?
            </CardTitle>
            <CardDescription className="lg:text-lg">
              Залиште номер - ми зателефонуємо.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4 lg:gap-5">
                <div className="flex flex-col space-y-3.5 lg:space-y-4">
                  <Input id="name" placeholder="Телефон" />
                  <Input id="name" placeholder="Ім'я або питання" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-full">Надіслати</Button>
          </CardFooter>
        </Card>
      </Container>
    </section>
  );
};