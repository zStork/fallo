import { defer, type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { HeroFullscreen } from '~/components/HeroFullscreen';
import { motion } from 'framer-motion';

export async function loader({ context }: LoaderFunctionArgs) {
  return defer({});
}

export default function CompanyPage() {
  return (
    <div className="bg-fallo-black">
      {/* Hero */}
      <HeroFullscreen
        backgroundType="image"
        backgroundSrc="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/two-button-jacket-featured_fab611e4-3c39-4039-8c88-30652fcd151c.webp?v=1733891904"
        eyebrow="COMPANY"
        title="INNOVATION"
        subtitle=""
        overlayOpacity={0.7}
      />

      {/* Founder Story Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] bg-fallo-graphite overflow-hidden"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/fallocorp-golf-62.jpg?v=1733857525"
                alt="Brien Patermo, Founder"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display font-light text-4xl md:text-5xl text-fallo-black mb-8">
                Humble beginnings.
              </h2>
              <div className="w-20 h-px bg-fallo-gold mb-8" />
              <div className="space-y-6 font-sans font-light text-lg text-gray-600 leading-relaxed">
                <p>
                  Brien Patermo founded Fallo Corporation with a vision shaped by 27 years 
                  of experience in the golf, sporting goods, and luxury bag industries.
                </p>
                <p>
                  His journey began in the golf industry, working with iconic brands like 
                  Datrek, Miller, and Ergonomix Sport. Through these experiences, Brien 
                  developed a deep understanding of product development, manufacturing 
                  excellence, and the importance of building lasting relationships.
                </p>
                <p>
                  After years of working with established brands including GSW and Belding, 
                  Brien recognized an opportunity to create something different—a company 
                  that could bridge the gap between innovative design and exceptional 
                  manufacturing execution.
                </p>
                <p>
                  Today, Fallo Corporation partners with world-class brands to bring their 
                  visions to life, combining decades of industry expertise with a relentless 
                  commitment to quality and innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="bg-fallo-black py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-8xl text-fallo-gold/20 mb-8">"</div>
            <blockquote className="font-display italic text-3xl md:text-4xl text-fallo-cream leading-relaxed mb-8">
              Here at Fallo we take everything personally... we live only once, we get one shot. 
              Embrace life, embrace personality, embrace energy. Make a difference.
            </blockquote>
            <footer className="font-label text-sm tracking-widest uppercase text-fallo-gold">
              Brien Patermo, Founder
            </footer>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-4xl md:text-5xl text-fallo-black text-center mb-16"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="font-display text-3xl text-fallo-black mb-4">
                Focused
              </h3>
              <div className="w-12 h-px bg-fallo-gold mx-auto mb-4" />
              <p className="font-sans font-light text-gray-600 leading-relaxed">
                We maintain unwavering focus on delivering exceptional results for our partners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="font-display text-3xl text-fallo-black mb-4">
                Innovative
              </h3>
              <div className="w-12 h-px bg-fallo-gold mx-auto mb-4" />
              <p className="font-sans font-light text-gray-600 leading-relaxed">
                We push boundaries and explore new possibilities in product design and development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="font-display text-3xl text-fallo-black mb-4">
                Results Driven
              </h3>
              <div className="w-12 h-px bg-fallo-gold mx-auto mb-4" />
              <p className="font-sans font-light text-gray-600 leading-relaxed">
                We get it done. Every project is a commitment to excellence and execution.
              </p>
            </motion.div>
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
            Let's work together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light text-lg text-fallo-muted mb-12 leading-relaxed"
          >
            Partner with a team that understands your vision and has the expertise to bring it to life.
          </motion.p>
          <motion.a
            href="/pages/contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block font-label text-sm tracking-widest uppercase px-12 py-4 border-2 border-fallo-gold text-fallo-gold hover:bg-fallo-gold hover:text-fallo-black transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
}
