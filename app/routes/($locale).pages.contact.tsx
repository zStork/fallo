import { defer, type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { HeroFullscreen } from '~/components/HeroFullscreen';
import { motion } from 'framer-motion';

export async function loader({ context }: LoaderFunctionArgs) {
  return defer({});
}

export default function ContactPage() {
  return (
    <div className="bg-fallo-black">
      {/* Hero */}
      <HeroFullscreen
        backgroundType="image"
        backgroundSrc="https://cdn.shopify.com/s/files/1/0732/7311/4843/files/double-breasted-jacket-3-500x625_c17614a8-7941-4688-8572-e29819dc292d.webp?v=1733887124"
        eyebrow="CONTACT"
        title="SAY HELLO"
        subtitle=""
        overlayOpacity={0.7}
      />

      {/* Contact Information & Form */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display font-light text-4xl md:text-5xl text-fallo-black mb-8">
                Get in touch.
              </h2>
              <div className="w-20 h-px bg-fallo-gold mb-12" />
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-label text-xs tracking-[0.3em] uppercase text-fallo-gold mb-2">
                    FALLO CORPORATION
                  </h3>
                  <p className="font-sans font-light text-lg text-gray-600">
                    3341 Towerwood Drive, Unit 205<br />
                    Farmers Branch, TX 75234<br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="font-label text-xs tracking-[0.3em] uppercase text-fallo-gold mb-2">
                    PHONE
                  </h3>
                  <a 
                    href="tel:+12147580119"
                    className="font-sans font-light text-lg text-gray-600 hover:text-fallo-gold transition-colors duration-300"
                  >
                    (214) 758-0119
                  </a>
                </div>

                <div>
                  <h3 className="font-label text-xs tracking-[0.3em] uppercase text-fallo-gold mb-2">
                    EMAIL
                  </h3>
                  <a 
                    href="mailto:info@fallocorp.com"
                    className="font-sans font-light text-lg text-gray-600 hover:text-fallo-gold transition-colors duration-300"
                  >
                    info@fallocorp.com
                  </a>
                </div>

                <div className="pt-8">
                  <h3 className="font-label text-xs tracking-[0.3em] uppercase text-fallo-gold mb-4">
                    OFFICE HOURS
                  </h3>
                  <p className="font-sans font-light text-gray-600">
                    Monday – Friday: 9:00 AM – 5:00 PM CST<br />
                    Saturday – Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <div>
                  <label 
                    htmlFor="name"
                    className="font-label text-xs tracking-widest uppercase text-fallo-black mb-2 block"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-fallo-gold focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    className="font-label text-xs tracking-widest uppercase text-fallo-black mb-2 block"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-fallo-gold focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="company"
                    className="font-label text-xs tracking-widest uppercase text-fallo-black mb-2 block"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-fallo-gold focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone"
                    className="font-label text-xs tracking-widest uppercase text-fallo-black mb-2 block"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-fallo-gold focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="subject"
                    className="font-label text-xs tracking-widest uppercase text-fallo-black mb-2 block"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-fallo-gold focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    className="font-label text-xs tracking-widest uppercase text-fallo-black mb-2 block"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-fallo-gold focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-label text-sm tracking-widest uppercase px-12 py-4 bg-fallo-gold text-fallo-black hover:bg-fallo-champagne transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-fallo-graphite py-24">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-video bg-fallo-black/30 flex items-center justify-center"
          >
            <p className="font-label text-xs tracking-widest uppercase text-fallo-muted">
              Map Location: Farmers Branch, TX
            </p>
          </motion.div>
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
            Ready to start your project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light text-lg text-fallo-muted leading-relaxed"
          >
            We're here to help bring your vision to life. Reach out today and let's discuss 
            how we can collaborate to create something exceptional.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
