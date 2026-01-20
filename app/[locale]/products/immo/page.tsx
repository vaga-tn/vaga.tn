import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Home, FileKey, HandshakeIcon, Wrench, Wallet, UserCircle } from 'lucide-react';
import ProductDetailPage from '@/components/ProductDetailPage';

export default async function ImmoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('products.immo');

  const features = [
    {
      title: t('features.listings.title'),
      description: t('features.listings.description'),
      icon: Home,
    },
    {
      title: t('features.rental.title'),
      description: t('features.rental.description'),
      icon: FileKey,
    },
    {
      title: t('features.sales.title'),
      description: t('features.sales.description'),
      icon: HandshakeIcon,
    },
    {
      title: t('features.maintenance.title'),
      description: t('features.maintenance.description'),
      icon: Wrench,
    },
    {
      title: t('features.financial.title'),
      description: t('features.financial.description'),
      icon: Wallet,
    },
    {
      title: t('features.portal.title'),
      description: t('features.portal.description'),
      icon: UserCircle,
    },
  ];

  return (
    <ProductDetailPage
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      features={features}
      ctaText={t('cta')}
      productIcon={Home}
    />
  );
}
