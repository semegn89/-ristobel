'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <footer className="relative bg-gradient-to-b from-secondary-darkest to-secondary-darkest text-white mt-auto border-t border-white/10">
      {/* Градиентная верхняя граница */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/logo-white.png"
                  alt="CRISTOBAL Ltd Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  CRISTOBAL
                </h3>
                <p className="text-xs text-gray-400">
                  LTD
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              {t('companyNameFull')}
            </p>
            <p className="text-sm text-gray-500">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-white">{t('footer.navigation')}</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: `/${locale}`, label: t('menu.home') },
                { href: `/${locale}/about`, label: t('menu.about') },
                { href: `/${locale}/services`, label: t('menu.services') },
                { href: `/${locale}/partners`, label: t('menu.partners') },
                { href: `/${locale}/contacts`, label: t('menu.contacts') },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-primary-light transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-white">{t('footer.legal')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href={`/${locale}/legal`} 
                  className="text-gray-400 hover:text-primary-light transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CRISTOBAL Ltd. {t('footer.rights')}.
          </p>
          <p className="text-xs text-gray-600">
            EIK: 208546896
          </p>
        </div>
      </div>
    </footer>
  );
}

