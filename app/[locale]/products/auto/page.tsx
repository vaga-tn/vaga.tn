import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Car, ShoppingCart, Wrench, Box, CreditCard, FileText } from 'lucide-react';
import ProductDetailPage from '@/components/ProductDetailPage';

export default async function AutoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('products.auto');

  const features = [
    {
      title: t('features.inventory.title'),
      description: t('features.inventory.description'),
      icon: Car,
    },
    {
      title: t('features.sales.title'),
      description: t('features.sales.description'),
      icon: ShoppingCart,
    },
    {
      title: t('features.service.title'),
      description: t('features.service.description'),
      icon: Wrench,
    },
    {
      title: t('features.parts.title'),
      description: t('features.parts.description'),
      icon: Box,
    },
    {
      title: t('features.finance.title'),
      description: t('features.finance.description'),
      icon: CreditCard,
    },
    {
      title: t('features.reporting.title'),
      description: t('features.reporting.description'),
      icon: FileText,
    },
  ];

  return (
    <ProductDetailPage
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      features={features}
      ctaText={t('cta')}
      productIcon={Car}
    />
  );
}
