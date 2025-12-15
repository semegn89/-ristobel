'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function CTASection() {
  const t = useTranslations('common.cta');
  const locale = useLocale();

  return (
    <AnimatedSection className="relative py-20 md:py-28 bg-gradient-hero text-white overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
        >
          {t('sendInquiry')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto"
        >
          {t('subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href={`/${locale}/contacts`}
            className="group relative inline-block bg-gradient-button text-white px-10 py-4 rounded-xl font-display font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">{t('contactUs')}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-button rounded-xl blur opacity-75 group-hover:opacity-100 group-hover:animate-pulse"
              initial={false}
            />
          </Link>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

