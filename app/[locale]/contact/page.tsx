import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  const products = [
    { value: 'erp', label: t('products.erp') },
    { value: 'sm', label: t('products.sm') },
    { value: 'auto', label: t('products.auto') },
    { value: 'immo', label: t('products.immo') },
    { value: 'general', label: t('products.general') },
  ];

  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container py-16 md:py-24">
          <ContactForm
            title={t('title')}
            subtitle={t('subtitle')}
            nameLabel={t('nameLabel')}
            emailLabel={t('emailLabel')}
            phoneLabel={t('phoneLabel')}
            messageLabel={t('messageLabel')}
            namePlaceholder={t('namePlaceholder')}
            emailPlaceholder={t('emailPlaceholder')}
            phonePlaceholder={t('phonePlaceholder')}
            productLabel={t('productLabel')}
            messagePlaceholder={t('messagePlaceholder')}
            submitText={t('submitText')}
            successMessage={t('successMessage')}
            products={products}
          />
        </div>
      </section>
    </div>
  );
}
