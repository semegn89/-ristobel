'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function MenuButton() {
  const t = useTranslations('common');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const switchLocale = (newLocale: string) => {
    const path = window.location.pathname;
    const newPath = path.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  const menuItems = [
    { href: `/${locale}`, label: t('menu.home') },
    { href: `/${locale}/about`, label: t('menu.about') },
    { href: `/${locale}/services`, label: t('menu.services') },
    { href: `/${locale}/partners`, label: t('menu.partners') },
    { href: `/${locale}/contacts`, label: t('menu.contacts') },
  ];

  return (
    <>
      {/* Фиксированная кнопка меню в правом верхнем углу */}
      <motion.button
        className="fixed top-6 right-6 z-50 p-3 rounded-xl bg-white/95 shadow-xl border border-gray-200/50 text-primary-darkest hover:bg-white transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </motion.button>

      {/* Боковое меню справа */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Боковое меню */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white shadow-2xl border-l border-gray-200"
            >
              <div className="flex flex-col h-full">
                {/* Заголовок меню */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                  <h2 className="text-xl font-display font-bold text-primary-darkest">
                    {t('menu.title')}
                  </h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg text-secondary-dark hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Навигация */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <ul className="space-y-2">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="group relative flex items-center px-4 py-3 rounded-xl text-lg font-medium text-secondary-dark hover:text-primary-darkest hover:bg-gray-50 transition-colors"
                        >
                          <span className="ml-2">{item.label}</span>
                          <svg
                            className="w-5 h-5 ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Переключатель языков */}
                <div className="p-6 border-t border-gray-200/50">
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      onClick={() => {
                        switchLocale('bg');
                        setIsMenuOpen(false);
                      }}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        locale === 'bg'
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-gray-100 text-secondary-dark hover:bg-gray-200'
                      }`}
                    >
                      БГ
                    </button>
                    <button
                      onClick={() => {
                        switchLocale('en');
                        setIsMenuOpen(false);
                      }}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        locale === 'en'
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-gray-100 text-secondary-dark hover:bg-gray-200'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>

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

