import { defer, type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { Await, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';
import { HeroFullscreen } from '~/components/HeroFullscreen';
import { CategoryPanel } from '~/components/CategoryPanel';
import { LogoMarquee } from '~/components/LogoMarquee';
import { FalloProductCard } from '~/components/FalloProductCard';
import { motion } from 'framer-motion';

export async function loader({ context }: LoaderFunctionArgs) {
  const { storefront } = context;

  // Fetch featured products collection
  const { collection } = await storefront.query(FEATURED_PRODUCTS_QUERY);

  return defer({ collection });
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="bg-fallo-black">
      {/* Section 1: Hero */}
      <HeroFullscreen
        backgroundType="video"
        backgroundSrc="https://cdn.shopify.com/videos/c/o/v/666ead3699994eba875616044c2c5fde.mp4"
        eyebrow="fàl·lo — verb | Italian"
        title="The Quality of Being Focused, Innovative & Results Driven."
        subtitle={'"GET IT DONE"'}
        overlayOpacity={0.6}
      />

      {/* Section 2: Brand Statement */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="font-display font-light text-3xl md:text-5xl text-fallo-black mb-8"
            >
              Industry knowledge, trend insight, design expertise.
            </motion.h2>

            {/* Gold Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-px bg-fallo-gold mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans font-light text-lg text-gray-600 leading-relaxed"
            >
              We admire the risk takers, the entrepreneur that changes our perspective, 
              the artists who alter our lens. Let's make our mark. Be determined to make a difference.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 3: Product Category Panels */}
      
      {/* Panel A - Lifestyle Gear Bags */}
      <CategoryPanel
        title="Lifestyle Gear Bags"
        panelColor="bg-fallo-khaki"
        clientLogos={['Linksoul', 'Warroad', 'Manduka', 'Brands & People']}
        productImages={[
          'https://cdn.shopify.com/s/files/1/0732/7311/4843/files/TYLER-GLITTERHEART-TOTE-625.webp?v=1773020174',
          'https://cdn.shopify.com/s/files/1/0732/7311/4843/files/IMG_92711-864x1080-1.webp?v=1733888739'
        ]}
        reverse={false}
      />

      {/* Panel B - Lifestyle Garments */}
      <CategoryPanel
        title="Lifestyle Garments"
        panelColor="bg-fallo-graphite"
        clientLogos={['Brands & People']}
        productImages={[
          'https://cdn.shopify.com/s/files/1/0732/7311/4843/files/two-button-jacket-featured_fab611e4-3c39-4039-8c88-30652fcd151c.webp?v=1733891904',
          'https://cdn.shopify.com/s/files/1/0732/7311/4843/files/double-breasted-jacket-3-500x625_c17614a8-7941-4688-8572-e29819dc292d.webp?v=1733887124'
        ]}
        reverse={true}
      />

      {/* Panel C - Golf Bags */}
      <CategoryPanel
        title="Golf Bags"
        panelColor="bg-fallo-charcoal"
        clientLogos={['Adidas', 'Belding', 'Team Golf USA']}
        productImages={['/placeholder-golf-1.jpg', '/placeholder-golf-2.jpg']}
        reverse={false}
      />

      {/* Section 4: Logo Marquee */}
      <section className="bg-fallo-black py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-light text-2xl text-fallo-cream text-center mb-12"
        >
          Trusted by world-class brands.
        </motion.h2>
        <LogoMarquee />
      </section>

      {/* Section 5: Featured Products */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="font-display font-light text-4xl text-fallo-black mb-8">
              Crafted for the Exceptional.
            </h2>
          </motion.div>

          <Suspense fallback={<FeaturedProductsLoading />}>
            <Await resolve={data.collection}>
              {(collection) => (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {collection?.products?.nodes?.slice(0, 4).map((product: any) => (
                    <FalloProductCard
                      key={product.id}
                      title={product.title}
                      vendor={product.vendor || 'Fallo'}
                      price={product.priceRange?.minVariantPrice?.amount 
                        ? `$${product.priceRange.minVariantPrice.amount}` 
                        : '$0.00'}
                      image={product.images?.nodes?.[0]?.url || '/placeholder.jpg'}
                      secondaryImage={product.images?.nodes?.[1]?.url}
                      href={`/products/${product.handle}`}
                    />
                  )) || <PlaceholderProducts />}
                </div>
              )}
            </Await>
          </Suspense>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="/collections/all"
              className="inline-block px-8 py-4 border-2 border-fallo-black text-fallo-black font-label font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-fallo-black hover:text-white"
            >
              View All
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 6: CTA / Collaboration */}
      <section className="bg-fallo-black py-24 md:py-32 lg:py-40">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-5xl md:text-7xl text-fallo-white mb-8"
          >
            Endless possibilities.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light text-lg text-fallo-cream leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Get in touch today to collaborate, and let's see just how far we can take your products together.
          </motion.p>

          <motion.a
            href="/pages/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block px-8 py-4 border-2 border-fallo-gold text-fallo-gold font-label font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-fallo-gold hover:text-fallo-black"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </div>
  );
}

function FeaturedProductsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="space-y-4">
          <div className="aspect-[3/4] bg-gray-200 animate-pulse" />
          <div className="h-4 bg-gray-200 animate-pulse w-3/4" />
          <div className="h-4 bg-gray-200 animate-pulse w-1/2" />
        </div>
      ))}
    </div>
  );
}

function PlaceholderProducts() {
  const placeholders = [
    { title: 'Luxury Duffle Bag', vendor: 'Linksoul', price: '$299.00' },
    { title: 'Premium Golf Bag', vendor: 'Adidas', price: '$449.00' },
    { title: 'Travel Backpack', vendor: 'Warroad', price: '$199.00' },
    { title: 'Lifestyle Tote', vendor: 'Manduka', price: '$149.00' },
  ];

  return (
    <>
      {placeholders.map((product, i) => (
        <FalloProductCard
          key={i}
          title={product.title}
          vendor={product.vendor}
          price={product.price}
          image="/placeholder.jpg"
          href="#"
        />
      ))}
    </>
  );
}

const FEATURED_PRODUCTS_QUERY = `#graphql
  query FeaturedProducts {
    collection(handle: "featured-products") {
      id
      title
      products(first: 8) {
        nodes {
          id
          title
          handle
          vendor
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 2) {
            nodes {
              id
              url
              altText
              width
              height
            }
          }
        }
      }
    }
  }
`;
