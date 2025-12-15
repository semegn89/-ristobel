'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import AnimatedSection from './AnimatedSection';
import TradeIcon from './icons/TradeIcon';
import TransportIcon from './icons/TransportIcon';
import LogisticsIcon from './icons/LogisticsIcon';

export default function ServicesOverview() {
  const t = useTranslations('home.services');
  const locale = useLocale();

  const services = [
    {
      key: 'trade',
      href: `/${locale}/services/trade`,
      icon: TradeIcon,
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
    {
      key: 'transport',
      href: `/${locale}/services/transport`,
      icon: TransportIcon,
      gradient: 'from-primary to-primary-light',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    },
    {
      key: 'logistics',
      href: `/${locale}/services/logistics`,
      icon: LogisticsIcon,
      gradient: 'from-accent to-accent-light',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    },
  ];

  return (
    <AnimatedSection className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-primary-darkest"
        >
          {t('title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedCard key={service.key} index={index}>
                <Link
                  href={service.href}
                  className="group relative bg-gradient-card rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20 block h-full overflow-hidden"
                >
                  {/* Фоновое изображение */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src={service.image}
                      alt={t(`${service.key}.title`)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  </div>

                  <div className="p-8">
                    {/* Градиентная рамка при hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
                    
                    {/* Иконка */}
                    <motion.div
                      className={`mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg relative z-10`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8" />
                    </motion.div>

                    <h3 className="text-2xl font-display font-semibold mb-4 text-primary-darkest group-hover:text-primary transition-colors relative z-10">
                      {t(`${service.key}.title`)}
                    </h3>
                    <p className="text-secondary-dark leading-relaxed relative z-10">
                      {t(`${service.key}.description`)}
                    </p>

                    {/* Стрелка */}
                    <motion.div
                      className="mt-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity relative z-10"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

