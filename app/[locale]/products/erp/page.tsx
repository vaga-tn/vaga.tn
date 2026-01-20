import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Package, DollarSign, BookOpen, Users, BarChart3, Building } from 'lucide-react';
import ProductDetailPage from '@/components/ProductDetailPage';

export default async function ERPPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('products.erp');

  const features = [
    {
      title: t('features.inventory.title'),
      description: t('features.inventory.description'),
      icon: Package,
    },
    {
      title: t('features.sales.title'),
      description: t('features.sales.description'),
      icon: DollarSign,
    },
    {
      title: t('features.accounting.title'),
      description: t('features.accounting.description'),
      icon: BookOpen,
    },
    {
      title: t('features.crm.title'),
      description: t('features.crm.description'),
      icon: Users,
    },
    {
      title: t('features.reporting.title'),
      description: t('features.reporting.description'),
      icon: BarChart3,
    },
    {
      title: t('features.multi.title'),
      description: t('features.multi.description'),
      icon: Building,
    },
  ];

  return (
    <ProductDetailPage
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      features={features}
      ctaText={t('cta')}
      productIcon={Building}
    />
  );
}
