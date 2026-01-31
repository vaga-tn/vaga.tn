import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Users, FileText, Shield, HelpCircle, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default async function InvoicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('products.invoice');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container flex flex-col items-center justify-center text-center pt-12 overflow-y-hidden">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-block rounded-full border bg-secondary/50 px-4 py-1.5 text-sm">
              {t('badge')}
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t('title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-xl">
              {t('description')}
            </p>
            <Image src={'/vaga-invoice/hero.png'} width={2010} height={976} alt='logo' style={{ height: 'auto' }} className='relative lg:-bottom-12 -bottom-4' />
          </div>
        </div>
      </section>

      {/* E-Invoice Law Section */}
      <section className="border-t bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <Image src={'/vaga-invoice/what_is_e_invoice.png'} width={478} height={95} className='mx-auto' alt='section title' />
            <p className="text-muted-foreground text-lg">
              {t('law.subtitle')}
            </p>
          </div>

          {/* Q&A Cards */}
          <div className="grid gap-8 md:grid-cols-2 mb-16 max-w-5xl mx-auto text-right">
            <Card>
              <CardHeader className='flex items-end'>
                <div className="flex items-center gap-3 mb-2">
                  <CardTitle className="text-xl">{t('law.what.title')}</CardTitle>
                  <HelpCircle className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-muted-foreground">
                  {t('law.what.description')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='flex items-end'>
                <div className="flex items-center gap-3 mb-2">
                  <CardTitle className="text-xl">{t('law.who.title')}</CardTitle>
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-muted-foreground">
                  {t('law.who.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Penalties Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold tracking-tighter mb-2">
                {t('law.penalties.title')}
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">{t('law.penalties.fine1.amount')}</CardTitle>
                  <CardDescription className="text-base">
                    {t('law.penalties.fine1.description')}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">{t('law.penalties.fine2.amount')}</CardTitle>
                  <CardDescription className="text-base">
                    {t('law.penalties.fine2.description')}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">{t('law.penalties.fine3.amount')}</CardTitle>
                  <CardDescription className="text-base">
                    {t('law.penalties.fine3.description')}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <Image src={'/vaga-invoice/how.png'} width={290} height={95} className='mx-auto' alt='section title' />
          <p className="text-muted-foreground text-lg">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="flex gap-8 flex-wrap max-w-6xl mx-auto flex-row-reverse justify-center">
          {[1, 2, 3, 4, 5].map((step) => (
            <Card className="text-center" key={step}>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-right flex items-center flex-row-reverse gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {step}
                  </div>
                  {t(`process.step${step}.title`)}
                </CardTitle>
                <CardDescription className="text-base">
                  {t(`process.step${step}.description`)}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* All You Need Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <Image src={'/vaga-invoice/what_is_vaga.png'} width={478} height={95} className='mx-auto' alt='section title' />
          <p className="text-muted-foreground text-lg">
            {t('allYouNeed.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 text-right">
          <Card>
            <CardHeader className='flex items-end'>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle>{t('allYouNeed.client.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-muted-foreground">
                {t('allYouNeed.client.description')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex items-end'>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FileText className="h-6 w-6" />
              </div>
              <CardTitle>{t('allYouNeed.intelligent.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-muted-foreground">
                {t('allYouNeed.intelligent.description')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex items-end'>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle>{t('allYouNeed.compliant.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-muted-foreground">
                {t('allYouNeed.compliant.description')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex items-end'>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle>مجاني %100</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-muted-foreground">
                ما فماش مصاريف مخفية
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex items-end'>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle>البيانات مشفّرة</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-muted-foreground">
                حتى احنا ما نجموش نوصلولها
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex items-end'>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle>مستضاف في تونس</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-muted-foreground">
                بياناتك تبقى محلية
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
