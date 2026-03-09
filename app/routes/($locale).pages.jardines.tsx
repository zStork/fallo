import { defer, type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export async function loader({ context }: LoaderFunctionArgs) {
  return defer({});
}

// Sample NCAA products from Jardines partnership
const ncaaProducts = [
  {
    id: 1,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/HC3PCK-SL-64-A-AlabamaUof.jpg',
    title: 'Alabama 3-Pack Headcover Set',
    category: 'Headcovers',
    school: 'University of Alabama'
  },
  {
    id: 2,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/HC3PCK-SL-89-A-MichiganUof.jpg',
    title: 'Michigan 3-Pack Headcover Set',
    category: 'Headcovers',
    school: 'University of Michigan'
  },
  {
    id: 3,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/HC3PCK-ST-15-A-OhioStateU.jpg',
    title: 'Ohio State 3-Pack Headcover Set',
    category: 'Headcovers',
    school: 'Ohio State University'
  },
  {
    id: 4,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/BT1620-2-A-GeorgiaUof.jpg',
    title: 'Georgia Bar Towel',
    category: 'Towels',
    school: 'University of Georgia'
  },
  {
    id: 5,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/HCB-PNNT-117-A-Harvard.jpg',
    title: 'Harvard Blade Headcover',
    category: 'Headcovers',
    school: 'Harvard University'
  },
  {
    id: 6,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/HC3PCK-SL-110-A-StanfordU.jpg',
    title: 'Stanford 3-Pack Headcover Set',
    category: 'Headcovers',
    school: 'Stanford University'
  },
  {
    id: 7,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/BT1620-87-A-TexasAMU.jpg',
    title: 'Texas A&M Bar Towel',
    category: 'Towels',
    school: 'Texas A&M University'
  },
  {
    id: 8,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/HC3PCK-SL-71-A-FloridaState.jpg',
    title: 'Florida State 3-Pack Headcover Set',
    category: 'Headcovers',
    school: 'Florida State University'
  },
  {
    id: 9,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/HCD-SL-86-A-PennState.jpg',
    title: 'Penn State Driver Headcover',
    category: 'Headcovers',
    school: 'Pennsylvania State University'
  },
  {
    id: 10,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/HC3PCK-SL-3-A-KentuckyUof.jpg',
    title: 'Kentucky 3-Pack Headcover Set',
    category: 'Headcovers',
    school: 'University of Kentucky'
  },
  {
    id: 11,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/BT1620-96-A-TennesseeUof.jpg',
    title: 'Tennessee Bar Towel',
    category: 'Towels',
    school: 'University of Tennessee'
  },
  {
    id: 12,
    image: 'https://cdn.shopify.com/s/files/1/0718/0350/2662/files/HC3PCK-SL-194-A-USNavalAcademy.jpg',
    title: 'Naval Academy 3-Pack Headcover Set',
    category: 'Headcovers',
    school: 'US Naval Academy'
  }
];

const categories = ['All', 'Headcovers', 'Towels'];

export default function JardinesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = ncaaProducts.filter(product => {
    if (activeFilter === 'All') return true;
    return product.category === activeFilter;
  });

  return (
    <div className="bg-fallo-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fallo-black/80 to-fallo-black/60 z-10" />
        <div className="absolute inset-0">
          <img
            src="https://cdn.shopify.com/s/files/1/0718/0350/2662/files/HC3PCK-SL-64-A-AlabamaUof.jpg"
            alt="Jardines NCAA Partnership"
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
            NCAA Licensed Golf Accessories
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
              Officially Licensed NCAA Golf Accessories
            </h2>
            <div className="w-20 h-px bg-fallo-gold mx-auto mb-8" />
            <p className="font-sans font-light text-lg text-gray-600 leading-relaxed">
              Fallo Corporation proudly partners with Jardines to manufacture premium NCAA licensed 
              golf accessories. This collection features officially licensed headcovers and towels 
              for top collegiate programs across the nation, combining superior craftsmanship with 
              authentic team branding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-fallo-graphite py-12">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`font-label text-sm tracking-widest uppercase px-6 py-3 transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-fallo-gold text-fallo-black'
                    : 'bg-transparent text-fallo-cream border border-fallo-gold/40 hover:border-fallo-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
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
            NCAA Licensed Collection
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="aspect-square overflow-hidden bg-fallo-black mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-display text-xl text-fallo-cream mb-1">
                  {product.title}
                </h3>
                <p className="font-sans text-sm text-fallo-muted mb-2">
                  {product.school}
                </p>
                <p className="font-label text-xs tracking-widest uppercase text-fallo-gold">
                  {product.category}
                </p>
              </motion.div>
            ))}
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
