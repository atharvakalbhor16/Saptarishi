'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import { Building2, Handshake, Award } from 'lucide-react'

export default function AssociatesPage() {
  const partners = [
    {
      category: 'Government Partners',
      organizations: [
        'Ministry of Social Justice and Empowerment',
        'State Health Departments',
        'District Administration Offices',
        'Local Municipal Bodies'
      ]
    },
    {
      category: 'Healthcare Partners',
      organizations: [
        'Multi-specialty Hospitals',
        'Rehabilitation Centers',
        'Medical Colleges',
        'Diagnostic Centers'
      ]
    },
    {
      category: 'Educational Institutions',
      organizations: [
        'Special Education Schools',
        'Skill Development Centers',
        'Universities',
        'Vocational Training Institutes'
      ]
    },
    {
      category: 'NGO Partners',
      organizations: [
        'Disability Rights Organizations',
        'Community Based Organizations',
        'Parent Support Groups',
        'Advocacy Groups'
      ]
    },
    {
      category: 'Corporate Partners',
      organizations: [
        'CSR Programs',
        'Technology Companies',
        'Healthcare Companies',
        'Financial Institutions'
      ]
    }
  ]

  return (
    <>
      <PageHeader 
        title="Associates & Partners" 
        subtitle="Building a strong network to serve the community better"
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
              Our Collaborative Network
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Working together with organizations across sectors to maximize our impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.category}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-2xl flex items-center justify-center mb-4">
                  <Building2 className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {partner.category}
                </h3>
                <ul className="space-y-2">
                  {partner.organizations.map((org, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-primary-orange">•</span>
                      <span>{org}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-yellow to-primary-orange">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Handshake className="w-20 h-20 mx-auto mb-6 text-gray-900" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Join our network of partners and help us create a more inclusive society
            </p>
            <a href="/contact" className="btn-primary bg-white text-primary-orange hover:bg-gray-100">
              Become a Partner
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
