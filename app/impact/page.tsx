'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import { Users, Heart, ShieldPlus, GraduationCap, Droplet, Package } from 'lucide-react'

export default function ImpactPage() {
  const programs = [
    {
      icon: Users,
      title: 'Holistic Divyang Support Program',
      stats: [
        'Till today, more than 1000 people have received disability certificates and UDID Card',
        'More than 200 people received Aadhar and PAN card',
        'More than 1000 people benefited from the health check-up camp.',
        'More than 3000+ people Niramaya health claim settled by us.'
      ]
    },
    {
      icon: Heart,
      title: 'Funeral of unclaimed human dead bodies',
      stats: [
        'Till today, more than 500 funerals of unclaimed human dead bodies are conducted in Pimpri Chinchwad'
      ]
    },
    {
      icon: ShieldPlus,
      title: 'Blanket Distributions',
      stats: [
        'More than 2000 blankets are distributed.'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Scholarship Program',
      stats: [
        'More than 100 students got benefits from this program.'
      ]
    },
    {
      icon: Droplet,
      title: 'Watershed Impact',
      stats: [
        'The constructed Continuous Contour Trenches (CCT) of 12000m in a scientific manner helped to increase groundwater level.',
        'Soil and water conversation is increased and now villagers are not dependent on water tankers during the summer season.',
        'Villagers are able to cultivate crops during the summer season too therefore agriculture income has increased.'
      ]
    },
    {
      icon: Package,
      title: 'Covid Relief Program',
      stats: [
        'Distributed ration kits to more than 2500 families'
      ]
    }
  ]

  return (
    <>
      <PageHeader 
        title="Impact" 
        subtitle=""
      />

      {/* Impact Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={program.title}>
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Left side - Icon and Title */}
                  <div className="lg:col-span-3">
                    <div className="mb-6">
                      <program.icon className="w-20 h-20 stroke-1" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {program.title}
                    </h2>
                  </div>

                  {/* Right side - Stats Grid */}
                  <div className="lg:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {program.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-green-50 rounded-lg p-6"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                        >
                          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                            {stat}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Separator Line - not shown after last item */}
                {index < programs.length - 1 && (
                  <motion.div
                    className="mt-16 h-px bg-gradient-to-r from-transparent via-primary-orange to-transparent opacity-30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Impact Stories from Our Community
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Since last 10 years, we have been working in Pimpri Chinchwad area of Pune and our work has supported thousands of PwDs and families. Since activation of our portal and one-stop solution in October 2023, it has benefited more than thousand families and they have easily obtained benefits of the Government schemes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <div className="text-primary-orange text-5xl mb-4">"</div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  It is a nice App prepared by Saptrishi Foundation, We get all updates regarding Niramaya Health Insurance Scheme and other services and information in this app. It saves our time and money. Every year since 2016 till 2024, we have received reimbursement of OPD expenses incurred for my Son – Abhijit. With Saptrishi Foundation's assistance, we are able to get some reimbursement for our medicine costs. It makes a big difference. We are really thankful to Saptrishi Foundation.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-800">Ranjana Sutar</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <div className="text-primary-orange text-5xl mb-4">"</div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  My son is having 90% Intellectual disability. It is very hard to move from one place to another. Due to this, we have faced many difficulties in work related to Documents such as UDID card. It was possible due to Saptrishi Foundation that YCM Hospital team had come for home visit for UDID related work. Saptrishi Foundation had taken continuous follow up with the Hospital from the visit for physical examination till UDID card was generated and given to us. Also I received medical expenses reimbursement and financial aid from the Government with the help and guidance of Saptrishi Foundation. My Sincere thanks to Manoj sir and his team.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-800">Dr. Uday Joshi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-yellow to-primary-orange">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Giving is not just about making a Donation it's about making difference.
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              (Your Donation will be Exempted Under Income Tax Act Provision Section 80G)
            </p>
            <a 
              href="/donate" 
              className="btn-primary bg-white text-primary-orange hover:bg-gray-100 inline-block px-8 py-4 text-lg font-semibold"
            >
              Donate Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
