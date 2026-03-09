import { motion } from 'framer-motion';
import { useState } from 'react';

interface FalloProductCardProps {
  title: string;
  vendor: string;
  price: string;
  image: string;
  secondaryImage?: string;
  badge?: 'New' | 'Sold Out';
  href: string;
}

export function FalloProductCard({
  title,
  vendor,
  price,
  image,
  secondaryImage,
  badge,
  href,
}: FalloProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-fallo-graphite mb-4">
        {/* Primary Image */}
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            isHovered && secondaryImage ? 'opacity-0 scale-105' : 'scale-100 group-hover:scale-105'
          }`}
        />
        
        {/* Secondary Image (on hover) */}
        {secondaryImage && (
          <img
            src={secondaryImage}
            alt={`${title} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-fallo-black/80 backdrop-blur-sm">
            <span className="font-label text-xs tracking-widest text-fallo-gold uppercase">
              {badge}
            </span>
          </div>
        )}

        {/* Quick Add Button */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-4"
        >
          <button className="w-full py-3 bg-fallo-gold text-fallo-black font-label font-semibold tracking-widest uppercase text-sm hover:bg-fallo-champagne transition-colors">
            Quick Add
          </button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <p className="font-label text-xs tracking-widest text-fallo-muted uppercase">
          {vendor}
        </p>
        <h3 className="font-display font-light text-lg text-fallo-cream">
          {title}
        </h3>
        <p className="font-label text-sm text-fallo-gold">
          {price}
        </p>
      </div>
    </motion.a>
  );
}
