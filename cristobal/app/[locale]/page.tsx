import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import AboutSection from '@/components/AboutSection';
import GeographySection from '@/components/GeographySection';
import AdvantagesSection from '@/components/AdvantagesSection';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await import(`@/messages/${locale}.json`).then((m) => m.default);

  return {
    title: 'CRISTOBAL Ltd - Търговия, логистика и международен автомобилен превоз',
    description: t.home.about.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'bg': '/bg',
        'en': '/en',
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutSection />
      <GeographySection />
      <AdvantagesSection />
      <CTASection />
    </>
  );
}

