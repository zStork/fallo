import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CategoryPanelProps {
  title: string;
  panelColor: string;
  clientLogos: string[];
  productImages: string[];
  reverse?: boolean;
}

export function CategoryPanel({
  title,
  panelColor,
  clientLogos,
  productImages,
  reverse = false,
}: CategoryPanelProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftVariants = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }
    },
  };

  return (
    <section ref={ref} className="w-full">
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Left Panel - Dark with client logos */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={`${panelColor} p-12 md:p-16 lg:p-24 flex flex-col justify-center ${reverse ? 'lg:order-2' : ''}`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-light text-fallo-cream mb-8">
            {title}
          </h2>
          
          {/* Gold Divider */}
          <div className="w-20 h-px bg-fallo-gold mb-12" />
          
          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 gap-8">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="font-label text-sm tracking-widest text-fallo-cream uppercase">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Panel - Product Images */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={`bg-white p-12 md:p-16 lg:p-24 flex items-center justify-center ${reverse ? 'lg:order-1' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {productImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-100 rounded-sm overflow-hidden"
              >
                {image && (
                  <img
                    src={image}
                    alt={`${title} product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
