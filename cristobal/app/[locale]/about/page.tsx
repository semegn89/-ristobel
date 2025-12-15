import AboutPageContent from '@/components/AboutPageContent';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'За компанията - CRISTOBAL Ltd',
    description: 'Информация за компанията CRISTOBAL Ltd - юридическа информация, управление, принципи на работа',
  };
}

export default async function AboutPage() {
  return <AboutPageContent />;
}

