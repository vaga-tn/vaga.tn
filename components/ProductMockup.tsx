import { LucideIcon } from 'lucide-react';

interface ProductMockupProps {
  icon: LucideIcon;
  title: string;
  variant?: 'default' | 'large';
}

export default function ProductMockup({ icon: Icon, title, variant = 'default' }: ProductMockupProps) {
  const isLarge = variant === 'large';

  return (
    <div className={`relative overflow-hidden rounded-lg border-2 border-border bg-gradient-to-br from-secondary/50 to-secondary/20 ${isLarge ? 'aspect-[16/10]' : 'aspect-video'}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <div className={`flex items-center justify-center rounded-2xl bg-primary/10 backdrop-blur-sm ${isLarge ? 'h-32 w-32' : 'h-20 w-20'}`}>
          <Icon className={`text-muted-foreground ${isLarge ? 'h-16 w-16' : 'h-10 w-10'}`} />
        </div>
        <p className={`mt-4 text-center font-medium text-muted-foreground ${isLarge ? 'text-xl' : 'text-sm'}`}>
          Coming Soon
        </p>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                         linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Corner decorations */}
      <div className="absolute right-4 top-4 h-3 w-3 rounded-full border-2 border-muted-foreground/20" />
      <div className="absolute bottom-4 left-4 h-3 w-3 rounded-full border-2 border-muted-foreground/20" />
    </div>
  );
}
