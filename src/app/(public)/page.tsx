// Home Page

import { Metadata } from 'next';
import { getHomePageData, getHomePageMetadata } from 'src/data/getHomePageData';

import {
  AdvantagesSection,
  FAQSection,
  Hero,
  ServicesSection,
  TariffsSection,
} from '@/components/home';

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getHomePageMetadata();

  return {
    title: metadata.title,
    description: metadata.description,
  };
};

export default async function Page() {
  const blockRenderer = (block: any) => {
    switch (block.__component) {
      case 'layout.hero-section':
        return <Hero key={block.id} data={block} />;
      case 'layout.advantages-section':
        return <AdvantagesSection key={block.id} data={block} />;
      default:
        return null;
    }
  };

  const strapiData = await getHomePageData();

  const { blocks } = strapiData;
  if (!blocks) return <div>No blocks found</div>;

  return (
    <>
      {blocks.map((block: any) => blockRenderer(block))}
      <ServicesSection />
      <TariffsSection />
      <FAQSection />
    </>
  );
}
