import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroFullscreenProps {
  backgroundType: 'video' | 'image' | 'shader';
  backgroundSrc?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: {
    label: string;
    href: string;
  };
  overlayOpacity?: number;
}

export function HeroFullscreen({
  backgroundType,
  backgroundSrc,
  eyebrow,
  title,
  subtitle,
  cta,
  overlayOpacity = 0.6,
}: HeroFullscreenProps) {
  // Split title to find {KEYWORD} pattern
  const titleParts = title.split(/\{([^}]+)\}/);
  
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {backgroundType === 'video' && backgroundSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="none"
        >
          <source src={backgroundSrc} type="video/mp4" />
        </video>
      )}
      
      {backgroundType === 'image' && backgroundSrc && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundSrc})` }}
        />
      )}

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-fallo-black/60 via-transparent to-fallo-black/80"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-label text-xs tracking-[0.4em] text-fallo-gold uppercase mb-6"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-fallo-white mb-6"
        >
          {titleParts.map((part, index) => {
            // Odd indices are the {KEYWORD} parts
            if (index % 2 === 1) {
              return (
                <span key={index} className="text-fallo-gold italic font-light">
                  {part}
                </span>
              );
            }
            return <span key={index}>{part}</span>;
          })}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-display italic text-fallo-gold text-2xl mb-12"
          >
            {subtitle}
          </motion.p>
        )}

        {cta && (
          <motion.a
            href={cta.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-block px-8 py-4 border-2 border-fallo-gold text-fallo-gold font-label font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-fallo-gold hover:text-fallo-black"
          >
            {cta.label}
          </motion.a>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-label text-xs tracking-widest text-fallo-cream uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-fallo-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
