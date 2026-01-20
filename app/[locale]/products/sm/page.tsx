import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Ticket, Radio, BookText, TrendingUp, Workflow, Plug, Headphones } from 'lucide-react';
import ProductDetailPage from '@/components/ProductDetailPage';

export default async function SMPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('products.sm');

  const features = [
    {
      title: t('features.ticketing.title'),
      description: t('features.ticketing.description'),
      icon: Ticket,
    },
    {
      title: t('features.multichannel.title'),
      description: t('features.multichannel.description'),
      icon: Radio,
    },
    {
      title: t('features.knowledge.title'),
      description: t('features.knowledge.description'),
      icon: BookText,
    },
    {
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      icon: TrendingUp,
    },
    {
      title: t('features.automation.title'),
      description: t('features.automation.description'),
      icon: Workflow,
    },
    {
      title: t('features.integration.title'),
      description: t('features.integration.description'),
      icon: Plug,
    },
  ];

  return (
    <ProductDetailPage
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      features={features}
      ctaText={t('cta')}
      productIcon={Headphones}
    />
  );
}
