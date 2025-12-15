import ServicesPageContent from '@/components/ServicesPageContent';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Услуги - CRISTOBAL Ltd',
    description: 'Услуги на CRISTOBAL Ltd - търговия, международен транспорт, спедиция и логистика',
  };
}

export default function ServicesPage() {
  return <ServicesPageContent />;
}

