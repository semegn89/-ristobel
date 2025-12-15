'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';
import TradeIcon from './icons/TradeIcon';
import TransportIcon from './icons/TransportIcon';
import LogisticsIcon from './icons/LogisticsIcon';

export default function ServicesPageContent() {
  const t = useTranslations('services');
  const locale = useLocale();

  const services = [
    {
      key: 'trade',
      href: `/${locale}/services/trade`,
      icon: TradeIcon,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'transport',
      href: `/${locale}/services/transport`,
      icon: TransportIcon,
      gradient: 'from-primary to-primary-light',
    },
    {
      key: 'logistics',
      href: `/${locale}/services/logistics`,
      icon: LogisticsIcon,
      gradient: 'from-accent to-accent-light',
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-20 md:py-28">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-16 text-primary-darkest text-center">
            {t('title')}
          </h1>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedCard key={service.href} index={index}>
                <Link
                  href={service.href}
                  className="group relative bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20 block h-full overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                  
                  <motion.div
                    className={`mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-8 h-8" />
                  </motion.div>

                  <h2 className="text-2xl font-display font-semibold mb-4 text-primary-darkest group-hover:text-primary transition-colors">
                    {t(`${service.key}.title`)}
                  </h2>
                  <p className="text-secondary-dark leading-relaxed">{t(`${service.key}.description`)}</p>

                  <motion.div
                    className="mt-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </Link>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}

