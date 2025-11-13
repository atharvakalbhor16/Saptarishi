'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import { ExternalLink } from 'lucide-react'

export default function MembershipPage() {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScmwEpLDexw4AY8s9jtYLkVsbLwXtSGkofxtkenR1ysDvXgvA/viewform?embedded=true'
  const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLScmwEpLDexw4AY8s9jtYLkVsbLwXtSGkofxtkenR1ysDvXgvA/viewform'

  const benefits = [
    'Free access to all Saptrishi Foundation services',
    'Priority support for government scheme enrollment',
    'Invitations to exclusive Divyang camps and events',
    'Access to resource center and educational materials',
    'Insurance coverage consultation',
    'Legal aid and documentation support',
    'Networking with community members',
    'Regular updates on new schemes and opportunities'
  ]

  return (
    <>
      <PageHeader 
        title="Divyang Membership" 
        subtitle="Join our community and access exclusive benefits and support"
      />

      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Membership Benefits
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Become a registered member of Saptrishi Foundation and unlock access to comprehensive 
                support services designed specifically for the differently abled community.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-orange flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary-yellow/20 rounded-2xl border-2 border-primary-yellow">
                <p className="text-gray-800 font-semibold">
                  💡 Membership is completely FREE for all differently abled individuals!
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-primary-yellow to-primary-orange rounded-3xl p-12 text-center shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-white text-8xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Join 50,000+ Members
              </h3>
              <p className="text-white text-lg">
                Be part of India largest integrated platform for the differently abled community
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Enrollment Form
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Please fill in your details to enroll for membership
            </p>
            
            <a
              href={googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-orange text-white rounded-full font-semibold hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl"
            >
              <ExternalLink size={20} />
              Open Form in New Tab
            </a>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-4 md:p-8 shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full relative" style={{ minHeight: '1000px' }}>
              <iframe
                src={googleFormUrl}
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
                title="Divyang Membership Enrollment Form"
              >
                Loading form...
              </iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
