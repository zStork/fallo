import { defer, type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { HeroFullscreen } from '~/components/HeroFullscreen';
import { motion } from 'framer-motion';

export async function loader({ context }: LoaderFunctionArgs) {
  return defer({});
}

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin by understanding your vision, brand identity, and specific requirements. Through collaborative discussions, we define project scope, materials, and design direction.'
  },
  {
    number: '02',
    title: 'Design & Development',
    description: 'Our team creates detailed technical drawings, material specifications, and prototypes. We iterate based on your feedback until every detail aligns with your vision.'
  },
  {
    number: '03',
    title: 'Manufacturing',
    description: 'Leveraging our global network of trusted manufacturing partners, we oversee production with rigorous quality control at every stage.'
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'We manage logistics and ensure your products arrive on time, meeting the highest standards of quality and craftsmanship.'
  }
];

const capabilities = [
  { title: 'Bag Development', icon: '🎒' },
  { title: 'Garment Development', icon: '👔' },
  { title: 'Footwear', icon: '👟' },
  { title: 'Electronic Accessories', icon: '📱' },
  { title: 'Home Goods', icon: '🏠' },
  { title: 'Custom Solutions', icon: '✨' }
];

const locations = [
  { country: 'China', city: 'Guangzhou' },
  { country: 'Vietnam', city: 'Ho Chi Minh City' },
  { country: 'Bangladesh', city: 'Dhaka' },
  { country: 'India', city: 'Mumbai' },
  { country: 'USA', city: 'Dallas, TX' }
];

export default function ServicesPage() {
  return (
    <div className="bg-fallo-black">
      {/* Hero */}
      <HeroFullscreen
        backgroundType="image"
        backgroundSrc="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/fallocorp-golf-62.jpg?v=1733857525"
        eyebrow="SERVICES"
        title="EXPERIENCE"
        subtitle=""
        overlayOpacity={0.7}
      />

      {/* Intro Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display font-light text-4xl md:text-5xl text-fallo-black mb-8">
              Industry knowledge, trend insight, design expertise.
            </h2>
            <div className="w-20 h-px bg-fallo-gold mx-auto mb-8" />
            <p className="font-sans font-light text-lg text-gray-600 leading-relaxed">
              With over 27 years of experience in product development and manufacturing, 
              Fallo Corporation brings unparalleled expertise to every project. We partner 
              with world-class brands to transform ideas into exceptional products that 
              resonate with their audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-fallo-graphite py-24 md:py-32">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-4xl md:text-5xl text-fallo-cream text-center mb-20"
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-6xl text-fallo-gold/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-2xl text-fallo-cream mb-4">
                  {step.title}
                </h3>
                <div className="w-12 h-px bg-fallo-gold/40 mx-auto mb-4" />
                <p className="font-sans font-light text-sm text-fallo-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-4xl md:text-5xl text-fallo-black text-center mb-16"
          >
            Our Capabilities
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {capability.icon}
                </div>
                <h3 className="font-label text-xs tracking-widest uppercase text-fallo-black">
                  {capability.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Partners */}
      <section className="bg-fallo-black py-24 md:py-32">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-4xl md:text-5xl text-fallo-cream text-center mb-16"
          >
            Global Manufacturing Network
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-fallo-graphite hover:bg-fallo-smoke transition-colors duration-300"
              >
                <h3 className="font-display text-2xl text-fallo-cream mb-2">
                  {location.country}
                </h3>
                <p className="font-label text-xs tracking-widest uppercase text-fallo-gold">
                  {location.city}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fallo-graphite py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-5xl md:text-7xl text-fallo-white mb-8"
          >
            Ready to bring your vision to life?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light text-lg text-fallo-muted mb-12 leading-relaxed"
          >
            Get in touch today to discuss your project and discover how we can help you 
            create exceptional products that stand out in the market.
          </motion.p>
          <motion.a
            href="/pages/contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block font-label text-sm tracking-widest uppercase px-12 py-4 border-2 border-fallo-gold text-fallo-gold hover:bg-fallo-gold hover:text-fallo-black transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </div>
  );
}
