'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function AdvantagesSection() {
  const t = useTranslations('home.advantages');

  const advantages = [
    { key: 'transparency', icon: '✓' },
    { key: 'deadlines', icon: '✓' },
    { key: 'responsibility', icon: '✓' },
  ];

  const advantageIcons = [
    { key: 'transparency', icon: '✓', gradient: 'from-green-500 to-emerald-500' },
    { key: 'deadlines', icon: '⏱', gradient: 'from-blue-500 to-cyan-500' },
    { key: 'responsibility', icon: '🛡', gradient: 'from-primary to-primary-light' },
  ];

  return (
    <AnimatedSection className="py-20 md:py-28 bg-white">
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
        <div className="max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
              alt="Преимущества CRISTOBAL"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-darkest/40 to-transparent" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const iconData = advantageIcons[index];
            return (
              <motion.div
                key={advantage.key}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group text-center bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${iconData.gradient} text-white text-2xl shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {iconData.icon}
                </motion.div>
                <h3 className="text-2xl font-display font-semibold text-primary-darkest mb-2 group-hover:text-primary transition-colors">
                  {t(advantage.key)}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

