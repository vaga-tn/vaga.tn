import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  href: string;
  locale: string;
  learnMore: string;
  className?: string;
}

export default function ProductCard({
  icon: Icon,
  name,
  tagline,
  description,
  href,
  locale,
  learnMore,
  className,
}: ProductCardProps) {
  return (
    <Card className={`flex flex-col transition-all ${className || ''}`}>
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-base font-medium">{tagline}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/${locale}/${href}`} className="w-full">
          <Button variant="outline" className="w-full group">
            {learnMore}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
