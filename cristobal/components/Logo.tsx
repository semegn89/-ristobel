'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  scrolled?: boolean;
  className?: string;
}

export default function Logo({ scrolled = false, className = '' }: LogoProps) {
  const locale = useLocale();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Link href={`/${locale}`} className="flex items-center group">
        <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
          {scrolled ? (
            <Image
              src="/logo.png"
              alt="CRISTOBAL Ltd Logo"
              fill
              className="object-contain"
              priority
            />
          ) : (
            <Image
              src="/logo-white.png"
              alt="CRISTOBAL Ltd Logo"
              fill
              className="object-contain"
              priority
            />
          )}
        </div>
      </Link>
    </motion.div>
  );
}

