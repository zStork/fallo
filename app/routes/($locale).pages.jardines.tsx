import { defer, type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { motion } from 'framer-motion';

export async function loader({ context }: LoaderFunctionArgs) {
  return defer({});
}

export default function JardinesPage() {
  return (
    <div className="bg-fallo-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fallo-black/80 to-fallo-black/60 z-10" />
        <div className="absolute inset-0">
          <img
            src="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/TYLER-GLITTERHEART-TOTE-625.webp?v=1773020174"
            alt="Jardines Partnership"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-label text-xs tracking-[0.4em] text-fallo-gold uppercase mb-6"
          >
            Partnership Showcase
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-light text-6xl md:text-8xl lg:text-9xl text-fallo-white mb-6"
          >
            Jardines
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display italic text-2xl md:text-3xl text-fallo-gold"
          >
            A Legacy of Excellence
          </motion.p>
        </div>
      </section>

      {/* Partnership Story */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-light text-4xl md:text-5xl text-fallo-black mb-8">
              Crafting Excellence Together
            </h2>
            <div className="w-20 h-px bg-fallo-gold mx-auto mb-8" />
            <p className="font-sans font-light text-lg text-gray-600 leading-relaxed">
              Fallo Corporation is proud to partner with Jardines, bringing together decades of 
              craftsmanship expertise and innovative design. This collaboration represents our 
              commitment to creating products that embody both tradition and forward-thinking design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase Grid */}
      <section className="bg-fallo-graphite py-24 md:py-32">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-4xl md:text-5xl text-fallo-cream text-center mb-16"
          >
            The Collection
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-fallo-black mb-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/TYLER-GLITTERHEART-TOTE-625.webp?v=1773020174"
                  alt="Jardines Collection - Tote"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-2xl text-fallo-cream mb-2">
                Premium Tote
              </h3>
              <p className="font-label text-xs tracking-widest uppercase text-fallo-gold">
                Lifestyle Collection
              </p>
            </motion.div>

            {/* Product 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-fallo-black mb-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/IMG_92711-864x1080-1.webp?v=1733888739"
                  alt="Jardines Collection - Bag"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-2xl text-fallo-cream mb-2">
                Signature Bag
              </h3>
              <p className="font-label text-xs tracking-widest uppercase text-fallo-gold">
                Lifestyle Collection
              </p>
            </motion.div>

            {/* Product 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-fallo-black mb-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/two-button-jacket-featured_fab611e4-3c39-4039-8c88-30652fcd151c.webp?v=1733891904"
                  alt="Jardines Collection - Jacket"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-2xl text-fallo-cream mb-2">
                Two-Button Jacket
              </h3>
              <p className="font-label text-xs tracking-widest uppercase text-fallo-gold">
                Garment Collection
              </p>
            </motion.div>

            {/* Product 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-fallo-black mb-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/double-breasted-jacket-3-500x625_c17614a8-7941-4688-8572-e29819dc292d.webp?v=1733887124"
                  alt="Jardines Collection - Double-Breasted Jacket"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-2xl text-fallo-cream mb-2">
                Double-Breasted Jacket
              </h3>
              <p className="font-label text-xs tracking-widest uppercase text-fallo-gold">
                Garment Collection
              </p>
            </motion.div>

            {/* Product 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-fallo-black mb-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/fallocorp-golf-62.jpg?v=1733857525"
                  alt="Jardines Collection - Golf Bag"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-2xl text-fallo-cream mb-2">
                Premium Golf Bag
              </h3>
              <p className="font-label text-xs tracking-widest uppercase text-fallo-gold">
                Golf Collection
              </p>
            </motion.div>

            {/* Product 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-fallo-black mb-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/fallocorp-golf-77.jpg?v=1733857525"
                  alt="Jardines Collection - Golf Bag"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-2xl text-fallo-cream mb-2">
                Tour Golf Bag
              </h3>
              <p className="font-label text-xs tracking-widest uppercase text-fallo-gold">
                Golf Collection
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="font-display text-3xl text-fallo-black mb-4">
                Craftsmanship
              </h3>
              <div className="w-12 h-px bg-fallo-gold mx-auto mb-4" />
              <p className="font-sans font-light text-gray-600 leading-relaxed">
                Every piece reflects our dedication to superior materials and meticulous attention to detail.
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
                Innovation
              </h3>
              <div className="w-12 h-px bg-fallo-gold mx-auto mb-4" />
              <p className="font-sans font-light text-gray-600 leading-relaxed">
                Blending traditional techniques with modern design sensibilities for timeless appeal.
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
                Excellence
              </h3>
              <div className="w-12 h-px bg-fallo-gold mx-auto mb-4" />
              <p className="font-sans font-light text-gray-600 leading-relaxed">
                A shared commitment to creating products that exceed expectations in every way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-fallo-black py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="font-display italic text-3xl md:text-4xl text-fallo-cream leading-relaxed mb-6">
              "This partnership represents the perfect union of heritage craftsmanship and contemporary vision."
            </p>
            <footer className="font-label text-sm tracking-widest uppercase text-fallo-gold">
              Fallo Corporation
            </footer>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="/pages/contact"
              className="inline-block font-label text-sm tracking-widest uppercase px-12 py-4 border-2 border-fallo-gold text-fallo-gold hover:bg-fallo-gold hover:text-fallo-black transition-all duration-300"
            >
              Learn More About Our Partnerships
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
