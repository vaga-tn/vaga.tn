import { useTranslations } from 'next-intl';
import { Users, FileText, Shield, HelpCircle, Building2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function InvoicePage({
  params,
}: {
  params: { locale: string };
}) {
  const t = useTranslations('products.invoice');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container flex flex-col items-center justify-center gap-8 py-24 text-center md:py-32">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-block rounded-full border bg-secondary/50 px-4 py-1.5 text-sm">
              {t('badge')}
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t('title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href={`/${params.locale}/contact`}>
                <Button size="lg" className="w-full sm:w-auto">
                  {t('cta.primary')}
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {t('cta.secondary')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All You Need Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            {t('allYouNeed.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('allYouNeed.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle>{t('allYouNeed.client.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {t('allYouNeed.client.description')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FileText className="h-6 w-6" />
              </div>
              <CardTitle>{t('allYouNeed.intelligent.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {t('allYouNeed.intelligent.description')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle>{t('allYouNeed.compliant.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {t('allYouNeed.compliant.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* E-Invoice Law Section */}
      <section className="border-t bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              {t('law.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('law.subtitle')}
            </p>
          </div>

          {/* Q&A Cards */}
          <div className="grid gap-8 md:grid-cols-2 mb-16 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{t('law.what.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('law.what.description')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{t('law.who.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
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
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            {t('process.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                {step}
              </div>
              <h3 className="font-bold mb-2">{t(`process.step${step}.title`)}</h3>
              <p className="text-sm text-muted-foreground">
                {t(`process.step${step}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why VAGA Section */}
      <section className="border-t bg-gradient-to-b from-secondary/20 to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-black text-white px-6 py-3 text-lg font-bold transform -rotate-1">
                {t('why.title')}
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="font-medium">✓ {t('why.free')}</p>
              <p className="font-medium">✓ {t('why.encrypted')}</p>
              <p className="font-medium">✓ {t('why.hosted')}</p>
            </div>

            <div className="pt-8">
              <p className="text-2xl font-bold mb-6">{t('why.ready')}</p>
              <Link href={`/${params.locale}/contact`}>
                <Button size="lg" className="text-lg px-8">
                  {t('cta.primary')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
