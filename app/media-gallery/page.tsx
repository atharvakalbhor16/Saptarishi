'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import { Newspaper } from 'lucide-react'

export default function MediaGalleryPage() {
  return (
    <>
      <PageHeader 
        title="Media Gallery" 
        subtitle="Our journey in the media spotlight"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Newspaper className="text-white" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Media Recognition
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Contribution of Saptrishi Foundation has been recognized by local media. Here are a few news cuttings about Saptrishi Foundation.
            </p>
          </motion.div>

          {/* Placeholder for Images */}
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 text-center border-2 border-dashed border-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-6xl mb-6">📰</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Media Coverage Coming Soon
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              We are currently updating our media gallery with news articles and press coverage. Check back soon!
            </p>
            <div className="inline-block px-8 py-4 bg-gray-200 text-gray-500 rounded-full font-semibold">
              Images will be added soon
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-yellow to-primary-orange text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-xl mb-8">
              Follow us on social media for the latest updates and news about our work
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/news-events"
                className="px-8 py-4 bg-white text-primary-orange rounded-full font-semibold hover:bg-gray-100 transition-all"
              >
                View News & Events
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white/10 text-white border-2 border-white rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
