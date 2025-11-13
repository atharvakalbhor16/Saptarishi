'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function InitiativesPage() {
  const projects = [
    {
      image: '/images/Our-Project-01.png',
      title: 'Call Center'
    },
    {
      image: '/images/Our-Project-02.png',
      title: 'Research & Advocacy'
    },
    {
      image: '/images/Our-Project-03.png',
      title: 'Handholding Support'
    },
    {
      image: '/images/Our-Project-04.png',
      title: 'Counselling Center'
    },
    {
      image: '/images/Our-Project-05.png',
      title: 'Enrollment Camp'
    },
    {
      image: '/images/Our-Project-06.png',
      title: 'Divyang Community'
    },
    {
      image: '/images/Our-Project-07.png',
      title: 'One Stop Solution For Divyang'
    },
    {
      image: '/images/Our-Project-08.png',
      title: 'Strong Support System For Divyang'
    }
  ]

  return (
    <>
      <PageHeader 
        title="Our Project" 
        subtitle="Comprehensive programs designed to empower the differently abled community"
      />

      {/* Project Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-orange transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">🤝</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Volunteering is a way of giving back, so give your contribution to change someone's life.
            </h2>
            <Link
              href="/volunteer"
              className="inline-block btn-primary"
            >
              Become a Volunteer
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-yellow to-primary-orange text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Giving is not just about making a Donation it's about making difference.
            </h2>
            <p className="text-xl mb-8 text-white/90">
              (Your Donation will be Exempted Under Income Tax Act Provision Section 80G)
            </p>
            <a
              href="https://rzp.io/l/saptrishifoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-primary-orange rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Donate Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
