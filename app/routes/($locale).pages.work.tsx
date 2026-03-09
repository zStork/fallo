import { defer, type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { HeroFullscreen } from '~/components/HeroFullscreen';
import { motion } from 'framer-motion';
import { useState } from 'react';

export async function loader({ context }: LoaderFunctionArgs) {
  return defer({});
}

const portfolioItems = [
  {
    id: 1,
    image: 'https://cdn.shopify.com/s/files/1/0732/7311/4843/files/TYLER-GLITTERHEART-TOTE-625.webp?v=1773020174',
    brand: 'Linksoul',
    category: 'Lifestyle Bags',
    tags: ['bags', 'lifestyle']
  },
  {
    id: 2,
    image: 'https://cdn.shopify.com/s/files/1/0732/7311/4843/files/fallocorp-golf-62.jpg?v=1733857525',
    brand: 'Adidas Golf',
    category: 'Golf Bags',
    tags: ['bags', 'golf']
  },
  {
    id: 3,
    image: 'https://cdn.shopify.com/s/files/1/0732/7311/4843/files/two-button-jacket-featured_fab611e4-3c39-4039-8c88-30652fcd151c.webp?v=1733891904',
    brand: 'Brands & People',
    category: 'Garments',
    tags: ['garments']
  },
  {
    id: 4,
    image: 'https://cdn.shopify.com/s/files/1/0732/7311/4843/files/fallocorp-golf-77.jpg?v=1733857525',
    brand: 'Belding',
    category: 'Golf Bags',
    tags: ['bags', 'golf']
  },
  {
    id: 5,
    image: 'https://cdn.shopify.com/s/files/1/0732/7311/4843/files/IMG_92711-864x1080-1.webp?v=1733888739',
    brand: 'Warroad',
    category: 'Lifestyle Bags',
    tags: ['bags', 'lifestyle']
  },
  {
    id: 6,
    image: 'https://cdn.shopify.com/s/files/1/0732/7311/4843/files/double-breasted-jacket-3-500x625_c17614a8-7941-4688-8572-e29819dc292d.webp?v=1733887124',
    brand: 'Brands & People',
    category: 'Garments',
    tags: ['garments']
  },
];

const filters = ['All', 'Bags', 'Garments', 'Golf', 'Lifestyle'];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'All') return true;
    return item.tags.includes(activeFilter.toLowerCase());
  });

  return (
    <div className="bg-fallo-black">
      {/* Hero */}
      <HeroFullscreen
        backgroundType="image"
        backgroundSrc="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/fallocorp-golf-62.jpg?v=1733857525"
        eyebrow="WORK"
        title="PASSION"
        subtitle=""
        overlayOpacity={0.7}
      />

      {/* Quote Section */}
      <section className="bg-fallo-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display italic text-2xl md:text-3xl text-fallo-cream leading-relaxed"
          >
            "Embrace the possibility of what could be and then challenge yourself to ask 'why not?'"
          </motion.blockquote>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-fallo-black py-12">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-label text-sm tracking-widest uppercase px-6 py-3 transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-fallo-gold text-fallo-black'
                    : 'bg-transparent text-fallo-cream border border-fallo-gold/40 hover:border-fallo-gold'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden bg-fallo-graphite"
              >
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-fallo-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                  <h3 className="font-display text-3xl text-white mb-2">
                    {item.brand}
                  </h3>
                  <p className="font-label text-xs tracking-widest uppercase text-fallo-gold">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fallo-black py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-4xl md:text-6xl text-fallo-white mb-8"
          >
            Let's create something exceptional.
          </motion.h2>
          <motion.a
            href="/pages/contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block font-label text-sm tracking-widest uppercase px-12 py-4 border-2 border-fallo-gold text-fallo-gold hover:bg-fallo-gold hover:text-fallo-black transition-all duration-300"
          >
            Start a Project
          </motion.a>
        </div>
      </section>
    </div>
  );
}
