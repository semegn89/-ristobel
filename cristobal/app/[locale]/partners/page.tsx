import PartnersPageContent from '@/components/PartnersPageContent';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Партнёрам - CRISTOBAL Ltd',
    description: 'Възможности за партньорство с CRISTOBAL Ltd в областта на логистиката и международния транспорт',
  };
}

export default function PartnersPage() {
  return <PartnersPageContent />;
}

