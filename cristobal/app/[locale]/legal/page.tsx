import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Правова информация - CRISTOBAL Ltd',
    description: 'Правова информация - политика за поверителност, бисквитки, общи условия',
  };
}

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-20 md:py-28">
      <h1 className="text-5xl md:text-6xl font-display font-bold mb-16 text-primary-darkest text-center">
        Правова информация
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        <section className="bg-gradient-card p-10 rounded-2xl shadow-soft border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">
            Политика за поверителност
          </h2>
          <div className="text-secondary-dark space-y-4">
            <p>
              CRISTOBAL Ltd спазва Регламент (ЕС) 2016/679 (GDPR) и защитава личните данни на клиентите си.
            </p>
            <p>
              Събираме и обработваме лични данни само за целите на предоставяне на услуги и комуникация с клиентите.
            </p>
            <p>
              Личните данни не се предоставят на трети страни без съгласието на субекта на данните, освен когато това е изискано от закон.
            </p>
            <p>
              Имате право на достъп, коригиране, изтриване и ограничаване на обработката на вашите лични данни.
            </p>
          </div>
        </section>

        <section className="bg-gradient-card p-10 rounded-2xl shadow-soft border border-gray-100">
          <h2 className="text-3xl font-display font-semibold mb-6 text-primary-darkest">
            Бисквитки
          </h2>
          <div className="text-secondary-dark space-y-4">
            <p>
              Сайтът използва бисквитки за подобряване на потребителското изживяване и за анализиране на трафика.
            </p>
            <p>
              <strong>Какво са бисквитките?</strong> Бисквитките са малки текстови файлове, които се съхраняват на вашето устройство, когато посещавате уебсайт.
            </p>
            <p>
              <strong>Как използваме бисквитките?</strong> Използваме бисквитки за:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Подобряване на функционалността на сайта</li>
              <li>Анализиране на трафика и поведението на посетителите</li>
              <li>Запомняне на вашите предпочитания</li>
            </ul>
            <p>
              <strong>Управление на бисквитките:</strong> Можете да контролирате и управлявате бисквитките чрез настройките на вашия браузър. Можете да изтриете съществуващи бисквитки или да блокирате нови.
            </p>
            <p>
              <strong>Вашето съгласие:</strong> Като продължавате да използвате сайта след показването на баннера за бисквитки, вие се съгласявате с използването на бисквитки в съответствие с тази политика.
            </p>
          </div>
        </section>

        <section className="bg-gradient-card p-10 rounded-2xl shadow-soft border border-gray-100">
          <h2 className="text-3xl font-display font-semibold mb-6 text-primary-darkest">
            Общи условия
          </h2>
          <div className="text-secondary-dark space-y-4">
            <p>
              Общите условия за използване на услугите на CRISTOBAL Ltd се определят в индивидуалните договори,
              сключени с клиентите.
            </p>
            <p>
              Всички услуги се предоставят в съответствие с българското законодателство и международните стандарти.
            </p>
            <p>
              CRISTOBAL Ltd гарантира качество на услугите и отговаря по договор за предоставените услуги.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

