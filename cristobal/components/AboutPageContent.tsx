'use client';

import { useTranslations } from 'next-intl';
import PageTransition from './PageTransition';
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';

export default function AboutPageContent() {
  const t = useTranslations('about');
  const tLegal = useTranslations('about.legal');
  const tManagement = useTranslations('about.management');
  const tBank = useTranslations('about.bank');
  const tPrinciples = useTranslations('about.principles');

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-20 md:py-28">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-16 text-primary-darkest text-center">
          {t('title')}
        </h1>

        <div className="max-w-5xl mx-auto space-y-16">
          <AnimatedSection>
            <section>
              <h2 className="text-3xl font-display font-semibold mb-8 text-primary-darkest">
                {tLegal('title')}
              </h2>
              <div className="bg-gradient-card p-8 rounded-2xl shadow-soft space-y-4 border border-gray-100">
                <div>
                  <span className="font-semibold">{tLegal('name')}:</span>{' '}
                  <span>{tLegal('nameValue')}</span>
                </div>
                <div>
                  <span className="font-semibold">{tLegal('eik')}:</span>{' '}
                  <span>{tLegal('eikValue')}</span>
                </div>
                <div>
                  <span className="font-semibold">{tLegal('year')}:</span>{' '}
                  <span>{tLegal('yearValue')}</span>
                </div>
                <div>
                  <span className="font-semibold">{tLegal('address')}:</span>{' '}
                  <span>{tLegal('addressValue')}</span>
                </div>
                <div>
                  <span className="font-semibold">{tLegal('legalForm')}:</span>{' '}
                  <span>{tLegal('legalFormValue')}</span>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <section>
              <h2 className="text-3xl font-display font-semibold mb-8 text-primary-darkest">
                {tManagement('title')}
              </h2>
              <div className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-gray-100">
                <div>
                  <span className="font-semibold">{tManagement('manager')}:</span>{' '}
                  <span>{tManagement('managerName')}</span>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <section>
              <h2 className="text-3xl font-display font-semibold mb-8 text-primary-darkest">
                {tBank('title')}
              </h2>
              <div className="bg-gradient-card p-8 rounded-2xl shadow-soft space-y-4 border border-gray-100">
                <div>
                  <span className="font-semibold">{tBank('bankName')}:</span>{' '}
                  <span>{tBank('bankNameValue')}</span>
                </div>
                <div>
                  <span className="font-semibold">{tBank('accountHolder')}:</span>{' '}
                  <span>{tBank('accountHolderValue')}</span>
                </div>
                <div>
                  <span className="font-semibold">{tBank('iban')}:</span>{' '}
                  <span className="font-mono">{tBank('ibanValue')}</span>
                </div>
                <div>
                  <span className="font-semibold">{tBank('currency')}:</span>{' '}
                  <span>{tBank('currencyValue')}</span>
                </div>
                <div>
                  <span className="font-semibold">{tBank('swift')}:</span>{' '}
                  <span className="font-mono">{tBank('swiftValue')}</span>
                </div>
                <div>
                  <span className="font-semibold">{tBank('bankAddress')}:</span>{' '}
                  <span>{tBank('bankAddressValue')}</span>
                </div>
                <div>
                  <span className="font-semibold">{tBank('accountType')}:</span>{' '}
                  <span>{tBank('accountTypeValue')}</span>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <section>
              <h2 className="text-3xl font-display font-semibold mb-10 text-primary-darkest">
                {tPrinciples('title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AnimatedCard index={0}>
                  <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 border-l-4 border-primary h-full group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4 text-white text-xl font-bold shadow-lg">
                      ✓
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-3 text-primary-darkest group-hover:text-primary transition-colors">
                      {tPrinciples('transparency')}
                    </h3>
                    <p className="text-secondary-dark leading-relaxed">
                      {t('principles.transparencyDesc')}
                    </p>
                  </div>
                </AnimatedCard>
                <AnimatedCard index={1}>
                  <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 border-l-4 border-primary h-full group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4 text-white text-xl font-bold shadow-lg">
                      ⏱
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-3 text-primary-darkest group-hover:text-primary transition-colors">
                      {tPrinciples('deadlines')}
                    </h3>
                    <p className="text-secondary-dark leading-relaxed">
                      {t('principles.deadlinesDesc')}
                    </p>
                  </div>
                </AnimatedCard>
                <AnimatedCard index={2}>
                  <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 border-l-4 border-primary h-full group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4 text-white text-xl font-bold shadow-lg">
                      🛡
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-3 text-primary-darkest group-hover:text-primary transition-colors">
                      {tPrinciples('responsibility')}
                    </h3>
                    <p className="text-secondary-dark leading-relaxed">
                      {t('principles.responsibilityDesc')}
                    </p>
                  </div>
                </AnimatedCard>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
}

