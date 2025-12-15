'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    const path = window.location.pathname;
    const newPath = path.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: `/${locale}`, label: t('menu.home') },
    { href: `/${locale}/about`, label: t('menu.about') },
    { href: `/${locale}/services`, label: t('menu.services') },
    { href: `/${locale}/partners`, label: t('menu.partners') },
    { href: `/${locale}/contacts`, label: t('menu.contacts') },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass shadow-xl bg-white/95 backdrop-blur-xl border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo scrolled={scrolled} />

            <div className="flex items-center space-x-4">
              {/* Переключатель языков - всегда видимый */}
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={() => switchLocale('bg')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all text-sm ${
                    scrolled
                      ? locale === 'bg'
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-secondary-dark hover:bg-gray-200'
                      : locale === 'bg'
                        ? 'bg-white/20 text-white backdrop-blur-sm'
                        : 'text-white/70 hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  БГ
                </motion.button>
                <motion.button
                  onClick={() => switchLocale('en')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all text-sm ${
                    scrolled
                      ? locale === 'en'
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-secondary-dark hover:bg-gray-200'
                      : locale === 'en'
                        ? 'bg-white/20 text-white backdrop-blur-sm'
                        : 'text-white/70 hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  EN
                </motion.button>
              </div>

              {/* Кнопка меню */}
              <motion.button
                className={`transition-colors p-2 rounded-lg ${
                  scrolled 
                    ? 'text-primary-darkest hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Боковое меню справа */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Боковое меню */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200 
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 glass bg-white/98 backdrop-blur-2xl shadow-2xl border-l border-gray-200/50"
            >
              <div className="flex flex-col h-full">
                {/* Заголовок меню */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                  <h2 className="text-xl font-display font-bold text-primary-darkest">
                    Меню
                  </h2>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg text-secondary-dark hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Навигация */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="group relative flex items-center px-4 py-3 rounded-xl text-lg font-medium text-secondary-dark hover:text-primary-darkest hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300"
                        >
                          <span className="absolute left-0 w-1 h-0 bg-primary rounded-r-full group-hover:h-full transition-all duration-300" />
                          <span className="ml-2">{item.label}</span>
                          <motion.svg
                            className="w-5 h-5 ml-auto text-primary opacity-0 group-hover:opacity-100"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Футер меню */}
                <div className="p-6 border-t border-gray-200/50">
                  <p className="text-sm text-secondary-dark text-center">
                    CRISTOBAL Ltd
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

