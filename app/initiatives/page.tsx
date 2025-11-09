'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import { Target, Lightbulb, Users, Zap } from 'lucide-react'

export default function InitiativesPage() {
  const initiatives = [
    {
      icon: Target,
      title: 'One-Stop Digital Platform',
      description: 'A comprehensive mobile and web application connecting beneficiaries with services, schemes, and support systems.',
      status: 'Active',
      impact: '50,000+ users'
    },
    {
      icon: Users,
      title: 'Divyang Camp Program',
      description: 'Regular camps providing health checkups, legal aid, scheme enrollment, and community networking.',
      status: 'Active',
      impact: '100+ camps conducted'
    },
    {
      icon: Lightbulb,
      title: 'Skill Development Initiative',
      description: 'Training programs to enhance employability and provide vocational skills to the differently abled.',
      status: 'Active',
      impact: '5,000+ trained'
    },
    {
      icon: Zap,
      title: 'Assistive Technology Access',
      description: 'Providing affordable access to assistive devices and technology solutions.',
      status: 'Ongoing',
      impact: '2,000+ devices distributed'
    }
  ]

  return (
    <>
      <PageHeader 
        title="Our Initiatives" 
        subtitle="Programs and projects driving change for the differently abled community"
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
              Transformative Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each initiative is designed to address specific needs and create lasting impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-primary-orange"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-2xl flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {initiative.title}
                      </h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                        {initiative.status}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {initiative.description}
                </p>
                <div className="flex items-center gap-2 text-primary-orange font-semibold">
                  <span>📊</span>
                  <span>{initiative.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
