import { useTranslations } from 'next-intl';
import { Building2, Headphones, Car, Home, ArrowRight, Laptop, FileCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import ProductMockup from '@/components/ProductMockup';
import { Button } from '@/components/ui/button';

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const t = useTranslations('home');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container flex flex-col items-center justify-center gap-8 py-24 text-center md:py-32">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              {t('hero.subtitle')}
            </p>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              {t('hero.description')}
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-5xl px-4">
            <div className="relative aspect-video w-full overflow-hidden ">
              <Image
                src="/hero.png"
                alt="VAGA Business Solutions Platform"
                fill
                className='object-contain'
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('products.title')}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
          <ProductCard
            icon={Building2}
            name={t('products.erp.name')}
            tagline={t('products.erp.tagline')}
            description={t('products.erp.description')}
            href="products/erp"
            locale={params.locale}
            learnMore={t('products.learnMore')}
            className="lg:col-span-2"
          />
          <ProductCard
            icon={Headphones}
            name={t('products.sm.name')}
            tagline={t('products.sm.tagline')}
            description={t('products.sm.description')}
            href="products/sm"
            locale={params.locale}
            learnMore={t('products.learnMore')}
          />
          <ProductCard
            icon={Car}
            name={t('products.auto.name')}
            tagline={t('products.auto.tagline')}
            description={t('products.auto.description')}
            href="products/auto"
            locale={params.locale}
            learnMore={t('products.learnMore')}
          />
          <ProductCard
            icon={Home}
            name={t('products.immo.name')}
            tagline={t('products.immo.tagline')}
            description={t('products.immo.description')}
            href="products/immo"
            locale={params.locale}
            learnMore={t('products.learnMore')}
          />
          <ProductCard
            icon={FileCheck}
            name={t('products.invoice.name')}
            tagline={t('products.invoice.tagline')}
            description={t('products.invoice.description')}
            href="products/invoice"
            locale={params.locale}
            learnMore={t('products.learnMore')}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-secondary/50">
        <div className="container flex flex-col items-center justify-center gap-4 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="max-w-[600px] text-muted-foreground">
            {t('cta.description')}
          </p>
          <Link href={`/${params.locale}/contact`}>
            <Button size="lg" className="mt-4">
              {t('cta.button')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
