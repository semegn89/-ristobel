'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import PageTransition from './PageTransition';
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';

export default function PartnersPageContent() {
  const t = useTranslations('partners');
  const locale = useLocale();

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-20 md:py-28">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-12 text-primary-darkest text-center">
            {t('title')}
          </h1>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-12">
          <AnimatedSection delay={0.1}>
            <section>
              <p className="text-xl md:text-2xl text-secondary-dark text-center mb-8 leading-relaxed max-w-3xl mx-auto">
                {t('description')}
              </p>
            </section>
          </AnimatedSection>

        <AnimatedCard index={0}>
          <section className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 border border-gray-100">
            <h2 className="text-3xl font-display font-semibold mb-6 text-primary-darkest">
              {t('cooperation.title')}
            </h2>
              <p className="text-secondary-dark text-lg mb-4">
                {t('cooperation.description')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-dark">
                <li>{t('cooperation.items.logistics')}</li>
                <li>{t('cooperation.items.transport')}</li>
                <li>{t('cooperation.items.trade')}</li>
                <li>{t('cooperation.items.expedition')}</li>
              </ul>
            </section>
          </AnimatedCard>

        <AnimatedCard index={1}>
          <section className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 border border-gray-100">
            <h2 className="text-3xl font-display font-semibold mb-6 text-primary-darkest">
              {t('geography.title')}
            </h2>
              <p className="text-secondary-dark text-lg">
                {t('geography.description')}
              </p>
            </section>
          </AnimatedCard>

        <AnimatedCard index={2}>
          <section className="bg-gradient-hero text-white p-10 rounded-2xl text-center shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-darkest/50 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold mb-4">
                {t('cta.title')}
              </h2>
              <p className="mb-8 text-lg text-white/90">
                {t('cta.description')}
              </p>
              <Link
                href={`/${locale}/contacts`}
                className="inline-block bg-white text-primary-darkest px-10 py-4 rounded-xl font-display font-semibold hover:bg-primary-lighter transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('cta.button')}
              </Link>
            </div>
          </section>
        </AnimatedCard>
        </div>
      </div>
    </PageTransition>
  );
}

