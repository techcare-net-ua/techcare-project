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

export interface HeroSectionProps {
  data: {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: ImageProps;
    form: FormProps;
  };
}
