'use client'

import PageHeader from '@/components/PageHeader'
import StatCard from '@/components/StatCard'
import { motion } from 'framer-motion'
import { Users, Award, Heart, Building2, GraduationCap, Briefcase } from 'lucide-react'

export default function ImpactPage() {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Beneficiaries Served' },
    { icon: Award, value: '1,200+', label: 'Government Schemes Accessed' },
    { icon: Heart, value: '500+', label: 'Active Volunteers' },
    { icon: Building2, value: '150+', label: 'Partner Organizations' },
    { icon: GraduationCap, value: '10,000+', label: 'Training Sessions' },
    { icon: Briefcase, value: '800+', label: 'Employment Opportunities' }
  ]

  const achievements = [
    {
      year: '2025',
      title: 'Digital Platform Launch',
      description: 'Successfully launched mobile and web applications reaching 50,000+ users across India.'
    },
    {
      year: '2024',
      title: 'National Recognition',
      description: 'Awarded Best Social Initiative by Government of India for our integrated platform approach.'
    },
    {
      year: '2024',
      title: 'Pan-India Expansion',
      description: 'Extended services to 25 states, establishing resource centers in major cities.'
    },
    {
      year: '2023',
      title: 'Insurance Program',
      description: 'Provided comprehensive insurance coverage to 5,000+ differently abled individuals.'
    },
    {
      year: '2023',
      title: 'Partnership Network',
      description: 'Collaborated with 150+ NGOs, healthcare providers, and government departments.'
    },
    {
      year: '2022',
      title: 'Foundation Established',
      description: 'Registered with Government of India, beginning our mission to empower the differently abled community.'
    }
  ]

  const impactAreas = [
    {
      title: 'Healthcare Access',
      percentage: 85,
      description: 'Improved access to quality healthcare services'
    },
    {
      title: 'Education Support',
      percentage: 78,
      description: 'Enhanced educational opportunities and resources'
    },
    {
      title: 'Employment',
      percentage: 72,
      description: 'Increased employment and skill development'
    },
    {
      title: 'Government Schemes',
      percentage: 90,
      description: 'Successfully enrolled in beneficial schemes'
    }
  ]

  return (
    <>
      <PageHeader 
        title="Our Impact" 
        subtitle="Measuring the difference we make in lives every day"
      />

      {/* Statistics */}
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
              Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real metrics showing the tangible change we're creating
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard 
                key={stat.label}
                {...stat}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Key Impact Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Where we're making the most significant difference
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {area.title}
                  </h3>
                  <span className="text-2xl font-bold text-primary-orange">
                    {area.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <motion.div
                    className="bg-gradient-to-r from-primary-yellow to-primary-orange h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${area.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
                <p className="text-gray-600">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones that mark our progress towards a more inclusive society
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 border-l-4 border-primary-orange last:pb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -ml-[10px] rounded-full bg-primary-orange border-4 border-white shadow-lg"></div>
                <div className="bg-gray-50 rounded-2xl p-6 ml-6">
                  <span className="inline-block px-4 py-1 bg-primary-orange text-white rounded-full text-sm font-semibold mb-3">
                    {achievement.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
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
              Be Part of Our Impact
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Every contribution, whether time or resources, amplifies our impact. Join us in creating positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/volunteer" className="btn-primary bg-white text-primary-orange hover:bg-gray-100">
                Volunteer With Us
              </a>
              <a href="/donate" className="btn-secondary border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                Make a Donation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
