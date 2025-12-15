import { Metadata } from 'next';
import ServicePageWrapper from '@/components/ServicePageWrapper';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Международен автомобилен превоз - CRISTOBAL Ltd',
    description: 'Услуги по международен автомобилен превоз на товари и пътници в Европа и Балканите',
  };
}

export default function TransportPage() {
  const sections = [
    {
      title: 'Превоз на товари',
      content: 'Осигуряваме надежден и бърз превоз на товари в Европа и Балканите. Работим с модерен автопарк и опитни шофьори, които гарантират безопасна доставка.',
    },
    {
      title: 'Превоз на пътници',
      content: 'Предлагаме услуги по превоз на пътници в рамките на Европа и Балканите. Всички превози се извършват с пълно съответствие с изискванията за безопасност.',
    },
    {
      title: 'География',
      content: 'Обслужваме маршрути в Европа и Балканите, с възможност за разширяване на географията според нуждите на клиентите.',
    },
  ];

  return <ServicePageWrapper title="Международен автомобилен превоз" sections={sections} />;
}

