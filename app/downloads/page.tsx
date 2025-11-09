'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import { Download, FileText, BookOpen, Image as ImageIcon, Video } from 'lucide-react'

export default function DownloadsPage() {
  const resources = [
    {
      category: 'Mobile Apps',
      icon: Download,
      items: [
        { name: 'Saptrishi Foundation App (Android)', size: '15 MB', link: 'https://play.google.com/store/apps/details?id=com.saptrishi.sf_app' },
        { name: 'iOS App (Coming Soon)', size: '-', link: '#' }
      ]
    },
    {
      category: 'Information Brochures',
      icon: FileText,
      items: [
        { name: 'Organization Brochure', size: '2 MB', link: '#' },
        { name: 'Services Guide', size: '1.5 MB', link: '#' },
        { name: 'Government Schemes List', size: '3 MB', link: '#' }
      ]
    },
    {
      category: 'Forms & Applications',
      icon: BookOpen,
      items: [
        { name: 'Volunteer Registration Form', size: '500 KB', link: '#' },
        { name: 'Membership Form', size: '400 KB', link: '#' },
        { name: 'Suggestions Form', size: '300 KB', link: '#' }
      ]
    },
    {
      category: 'Reports & Documents',
      icon: FileText,
      items: [
        { name: 'Annual Report 2024-25', size: '5 MB', link: '#' },
        { name: 'Impact Report', size: '3 MB', link: '#' },
        { name: '80G Certificate Sample', size: '500 KB', link: '#' }
      ]
    }
  ]

  return (
    <>
      <PageHeader 
        title="Downloads" 
        subtitle="Access resources, forms, and documents"
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
              Resource Center
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our mobile app, forms, brochures, and other useful resources
            </p>
          </motion.div>

          <div className="space-y-12">
            {resources.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-xl flex items-center justify-center">
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-primary-orange transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Size: {item.size}
                          </p>
                        </div>
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-orange font-semibold hover:gap-3 transition-all"
                      >
                        <Download size={16} />
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="bg-gradient-to-br from-primary-yellow to-primary-orange rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need a Specific Resource?
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Can't find what you're looking for? Contact us and we'll help you get the information you need.
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
