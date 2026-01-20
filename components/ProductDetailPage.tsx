import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProductMockup from '@/components/ProductMockup';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ProductDetailPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  ctaText: string;
  productIcon: LucideIcon;
}

export default function ProductDetailPage({
  title,
  subtitle,
  description,
  features,
  ctaText,
  productIcon,
}: ProductDetailPageProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {title}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
                {subtitle}
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                {description}
              </p>
            </div>

            {/* Product Mockup */}
            <div className="mx-auto max-w-3xl">
              <ProductMockup icon={productIcon} title={`${title} Interface`} />
            </div>

            <div className="mt-8">
              <Button size="lg">{ctaText}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Key Features
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-secondary/50">
        <div className="container flex flex-col items-center justify-center gap-4 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="max-w-[600px] text-muted-foreground">
            Schedule a demo to see how {title} can transform your business operations.
          </p>
          <Button size="lg" className="mt-4">
            {ctaText}
          </Button>
        </div>
      </section>
    </div>
  );
}
