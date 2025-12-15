import { Metadata } from 'next';
import ServicePageWrapper from '@/components/ServicePageWrapper';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Спедиция и логистика - CRISTOBAL Ltd',
    description: 'Услуги по спедиция и логистика - организация на превоза, документация, координация с партньори',
  };
}

export default function LogisticsPage() {
  const sections = [
    {
      title: 'Организация на превоза',
      content: 'Координираме и организираме целия процес на превоз, от планиране до доставка. Осигуряваме оптимални маршрути и ефективно използване на ресурсите.',
    },
    {
      title: 'Документация',
      content: 'Подготвяме и обработваме цялата необходима документация за международни превози, включително митнически документи, сертификати и разрешения.',
    },
    {
      title: 'Координация с партньори',
      content: 'Работим в тясно сътрудничество с партньори и контрагенти, за да осигурим безпроблемна логистична верига и навременна доставка.',
    },
  ];

  return <ServicePageWrapper title="Спедиция и логистика" sections={sections} />;
}

