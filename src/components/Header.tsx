'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="text-2xl font-bold">VAGA</span>
            <span className="text-xs text-muted-foreground">by MAAK CORP</span>
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href={`/${locale}`}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('home')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('contact')}
          </Link>
          <button
            onClick={toggleLocale}
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            <span>{locale.toUpperCase()}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
