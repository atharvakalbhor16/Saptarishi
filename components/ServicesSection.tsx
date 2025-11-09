'use client'

import { motion } from 'framer-motion'
import { Shield, BookOpen, Info, FileText, Users, Building2 } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Government Schemes',
    description: 'Support to avail all government schemes - Central, State and Local Government benefits',
  },
  {
    icon: FileText,
    title: 'Document Support',
    description: 'Assistance for obtaining essential documents like disability certificates, ID cards, and more',
  },
  {
    icon: Users,
    title: 'Divyang Camps',
    description: 'Organization of Divyang camps and gatherings for community support and awareness',
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Comprehensive insurance coverage and support for differently abled individuals',
  },
  {
    icon: BookOpen,
    title: 'Resource Centre',
    description: 'Access to educational materials, training programs, and development resources',
  },
  {
    icon: Info,
    title: 'Information Centre',
    description: 'Complete information hub for services, schemes, and support available under one roof',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing comprehensive support and services under one roof
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="icon-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="icon-box-icon">
                <service.icon size={40} className="text-primary-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
