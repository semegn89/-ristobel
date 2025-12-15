'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const t = useTranslations('home.hero');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Убеждаемся, что видео воспроизводится
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Игнорируем ошибки автоплея (браузер может блокировать)
      });
    }
  }, []);

  return (
    <section className="relative bg-gradient-hero text-white py-24 md:py-32 overflow-hidden min-h-[600px] flex items-center">
      {/* Видео фон */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback изображение если видео не загрузилось */}
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80" 
            alt="Transport background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        {/* Overlay для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/80 via-primary-darkest/70 to-primary-darkest/80" />
        {/* Дополнительный градиент для глубины */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-primary-lighter to-white bg-clip-text text-transparent drop-shadow-2xl">
            {t('title')}
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-3xl mx-auto font-light tracking-wide drop-shadow-lg"
        >
          {t('subtitle')}
        </motion.p>
      </div>
    </section>
  );
}

