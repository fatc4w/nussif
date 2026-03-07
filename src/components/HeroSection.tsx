import { useEffect, useState } from 'react';

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle: string;
  fullHeight?: boolean;
  children?: React.ReactNode;
}

export default function HeroSection({ image, title, subtitle, fullHeight = false, children }: HeroSectionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative ${fullHeight ? 'min-h-screen' : 'min-h-[60vh]'} flex items-center justify-center overflow-hidden`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[2s] ease-out"
        style={{ transform: visible ? 'scale(1)' : 'scale(1.08)' }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-navy-deep/[0.72]" />
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-transparent to-navy-deep/50" />

      <div
        className={`relative z-10 text-center px-6 max-w-3xl transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h1 className="font-display font-medium text-primary-foreground text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight">
          {title}
        </h1>
        <p className="mt-6 font-body font-light text-primary-foreground/70 text-base md:text-lg">
          {subtitle}
        </p>
        {children}
      </div>

      {fullHeight && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-1 animate-bounce">
            <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-primary-foreground/40 to-primary-foreground/20" />
          </div>
        </div>
      )}
    </section>
  );
}
