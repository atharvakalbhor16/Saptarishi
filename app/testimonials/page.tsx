'use client'

import PageHeader from '@/components/PageHeader'
import TestimonialCard from '@/components/TestimonialCard'
import { motion } from 'framer-motion'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Beneficiary',
      content: 'Saptrishi Foundation has been a blessing for my family. They helped us access government schemes that we didn\'t even know existed. The support team is incredibly helpful and compassionate.'
    },
    {
      name: 'Priya Sharma',
      role: 'Parent of Differently Abled Child',
      content: 'The resource center provided by Saptrishi has been invaluable for my son\'s education. The mobile app makes it so easy to stay connected and access services. Truly grateful for their work.'
    },
    {
      name: 'Dr. Amit Patel',
      role: 'Partner Organization',
      content: 'Working with Saptrishi Foundation has been an enriching experience. Their systematic approach and genuine care for the community sets them apart. They are making real impact.'
    },
    {
      name: 'Sunita Desai',
      role: 'Volunteer',
      content: 'Being part of Saptrishi\'s mission has been the most rewarding experience. The organization is well-structured, and every effort truly reaches those who need it most.'
    },
    {
      name: 'Mohammed Ansari',
      role: 'Beneficiary',
      content: 'I received insurance coverage through Saptrishi Foundation. The process was smooth, and the team guided me through every step. They truly care about making a difference.'
    },
    {
      name: 'Lakshmi Iyer',
      role: 'Family Member',
      content: 'The Divyang camps organized by Saptrishi are wonderful. They bring the community together and provide essential information. My brother has benefited greatly from their services.'
    },
    {
      name: 'Vikram Singh',
      role: 'Corporate Donor',
      content: 'Saptrishi Foundation\'s transparency and accountability impressed us. We are proud to support an organization that is genuinely committed to social change.'
    },
    {
      name: 'Meera Reddy',
      role: 'Beneficiary',
      content: 'The information center helped me understand all available government schemes. The staff is patient and explains everything in simple terms. Highly recommend their services.'
    },
    {
      name: 'Arjun Nair',
      role: 'Volunteer Coordinator',
      content: 'The dedication of Saptrishi\'s team is inspiring. They work tirelessly to ensure no one is left behind. Proud to be associated with such a noble cause.'
    }
  ]

  return (
    <>
      <PageHeader 
        title="Testimonials" 
        subtitle="Hear from the people whose lives we've touched"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Stories of Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from beneficiaries, volunteers, and partners who are part of our journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-yellow to-primary-orange">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Share Your Story
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Have you benefited from our services? We'd love to hear your experience and share it with our community.
            </p>
            <a href="/contact" className="btn-primary bg-white text-primary-orange hover:bg-gray-100">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
