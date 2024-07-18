import { Container } from '@/components';
import { StrapiImage } from '@/components';
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

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}

interface FormProps {
  id: number;
  heading: string;
  text: string;
}

interface HeroSectionProps {
  data: {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: ImageProps;
    form: FormProps;
  };
}

export const Hero = ({ data }: Readonly<HeroSectionProps>) => {
  const { heading, subHeading, image, form } = data;

  return (
    <section className="relative min-h-[700px]">
      <div className="absolute left-0 top-0 h-full ">
        <StrapiImage
          src={image.url}
          width={700}
          height={2000}
          alt="image background"
          quality={100}
          priority={true}
          className="h-full w-screen  object-cover"
        />
        <div className="absolute left-0 top-0 hidden h-20 w-full  bg-gradient-to-b from-background to-transparent dark:block"></div>
        <div className="absolute bottom-0 left-0 hidden h-20 w-full bg-gradient-to-t from-background to-transparent dark:block"></div>
      </div>
      <Container
        className="flex animate-show-up flex-col items-center pb-5 pt-36 md:flex-row md:pt-44 xl:justify-between xl:px-16 xl:pt-48
      "
      >
        <div className="space-y-10 pb-10 md:space-y-16 md:pr-4 xl:w-[800px]">
          <h1
            className="text-center text-primary-foreground opacity-90 drop-shadow-3xl md:text-left 
          md:text-5xl xl:text-left xl:text-7xl xl:font-bold dark:text-foreground"
          >
            {heading}
          </h1>
          <p
            className="mx-auto max-w-[400px] text-primary-foreground md:mx-0 lg:w-full xl:w-full xl:text-xl 
          dark:text-foreground"
          >
            {subHeading}
          </p>
        </div>
        <Card className="mt-0 max-w-[400px] rounded-lg opacity-80 md:max-w-[400px]  xl:w-[500px]">
          <CardHeader className="xl:space-y-3">
            <CardTitle className="xl:text-3xl">{form.heading}</CardTitle>
            <CardDescription className="xl:text-lg">
              {form.text}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4 xl:gap-5">
                <div className="flex flex-col space-y-3.5 xl:space-y-4">
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
