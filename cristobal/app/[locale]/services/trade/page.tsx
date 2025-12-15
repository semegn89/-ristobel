import { Metadata } from 'next';
import ServicePageWrapper from '@/components/ServicePageWrapper';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Търговия - CRISTOBAL Ltd',
    description: 'Услуги по търговия - покупка и продажа сток, работа B2B, индивидуални договори',
  };
}

export default function TradePage() {
  const sections = [
    {
      title: 'Покупка и продажа сток',
      content: 'Предлагаме услуги по покупка и продажа на различни видове стоки за B2B клиенти. Работим с индивидуални договори, адаптирани към специфичните нужди на всеки клиент.',
    },
    {
      title: 'Работа B2B',
      content: 'Специализираме се в бизнес-към-бизнес търговия, като осигуряваме надеждни партньорства и прозрачни условия за сътрудничество.',
    },
    {
      title: 'Индивидуални договори',
      content: 'Всяка сделка се сключва с индивидуален договор, който отчита специфичните изисквания и условия на клиента.',
    },
  ];

  return <ServicePageWrapper title="Търговия" sections={sections} />;
}

