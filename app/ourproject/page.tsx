'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OurProjectPage() {
  const projectSections = [
    {
      title: 'Call Center & Helpline Support',
      description:
        'Our inclusive call center connects Persons with Disabilities (PwDs) to case managers who resolve documentation, entitlement, and emergency support in minutes.',
      stats: [
        { label: 'Calls resolved', value: '25K+' },
        { label: 'Languages served', value: '6' },
        { label: 'Avg. response time', value: '<30 sec' },
        { label: 'Counsellors on duty', value: '28' }
      ],
      images: ['/images/Our-Project-01.png', '/images/Our-Project-02.png', '/images/Our-Project-03.png']
    },
    {
      title: 'Research & Advocacy Lab',
      description:
        'Data-backed advocacy enables us to highlight policy gaps, draft recommendations, and collaborate with authorities for inclusive reforms.',
      stats: [
        { label: 'Policy briefs', value: '18' },
        { label: 'Expert fellows', value: '12' },
        { label: 'States engaged', value: '09' },
        { label: 'Impact districts', value: '22' }
      ],
      images: ['/images/Our-Project-02.png', '/images/Our-Project-03.png', '/images/Our-Project-04.png']
    },
    {
      title: 'Handholding Support Network',
      description:
        'Ground coordinators accompany families through every milestone—from disability certification to long-term rehabilitation plans.',
      stats: [
        { label: 'Field coordinators', value: '65+' },
        { label: 'District helpdesks', value: '18' },
        { label: 'Household visits', value: '4.2K' },
        { label: 'Success stories', value: '3.1K' }
      ],
      images: ['/images/Our-Project-03.png', '/images/Our-Project-04.png', '/images/Our-Project-05.png']
    },
    {
      title: 'Counselling & Wellness Center',
      description:
        'Therapists, psychologists, and peer mentors deliver emotional wellness, grief care, and caregiver resilience programs under one roof.',
      stats: [
        { label: 'Therapy sessions / yr', value: '2.8K' },
        { label: 'Peer mentors', value: '32' },
        { label: 'Caregiver cohorts', value: '40+' },
        { label: 'Satisfaction score', value: '4.9/5' }
      ],
      images: ['/images/Our-Project-04.png', '/images/Our-Project-05.png', '/images/Our-Project-06.png']
    },
    {
      title: 'Enrollment & Outreach Camps',
      description:
        'Mobile enrollment camps simplify UDID, Aadhaar, and pension services by bringing officials, technology, and translators directly to villages.',
      stats: [
        { label: 'Camps conducted', value: '140+' },
        { label: 'Documents processed', value: '11K' },
        { label: 'Partner departments', value: '15' },
        { label: 'Villages covered', value: '320+' }
      ],
      images: ['/images/Our-Project-05.png', '/images/Our-Project-06.png', '/images/Our-Project-07.png']
    },
    {
      title: 'Divyang Community Programs',
      description:
        'Self-help groups, skilling cohorts, and leadership circles cultivate independence, entrepreneurship, and community pride.',
      stats: [
        { label: 'Community hubs', value: '24' },
        { label: 'Entrepreneurs incubated', value: '210' },
        { label: 'Skill courses', value: '16' },
        { label: 'Women leaders', value: '58%' }
      ],
      images: ['/images/Our-Project-06.png', '/images/Our-Project-07.png', '/images/Our-Project-08.png']
    },
    {
      title: 'One Stop Solution Hub',
      description:
        'Our integrated service desks combine insurance, legal, mobility, and assistive technology advisory services for PwDs and caregivers.',
      stats: [
        { label: 'Services offered', value: '25+' },
        { label: 'Assistive devices', value: '1.2K' },
        { label: 'Insurance claims', value: '3.8K' },
        { label: 'Legal consults', value: '560' }
      ],
      images: ['/images/Our-Project-07.png', '/images/Our-Project-08.png', '/images/Our-Project-01.png']
    },
    {
      title: 'Strong Support System for Divyang',
      description:
        'From rapid relief to long-term mentorship, our ecosystem ensures every individual has access to the safety nets they deserve.',
      stats: [
        { label: 'Emergency kits delivered', value: '3.5K' },
        { label: 'Long-term cases', value: '1.1K' },
        { label: 'Volunteer hours', value: '48K' },
        { label: 'Satisfaction rate', value: '97%' }
      ],
      images: ['/images/Our-Project-08.png', '/images/Our-Project-01.png', '/images/Our-Project-02.png']
    }
  ]

  return (
    <>
      <PageHeader 
        title="Our Project" 
        subtitle="Empowering the differently abled community through integrated solutions"
      />

      {/* Project Sections */}
      {projectSections.map((section, index) => (
        <section
          key={section.title}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom space-y-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.4em] text-primary-orange font-semibold mb-3">
                Section {index + 1}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {section.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {section.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
                  {section.images.map((image, imgIndex) => (
                    <motion.div
                      key={`${section.title}-${image}-${imgIndex}`}
                      className={`relative rounded-2xl overflow-hidden shadow-lg ${
                        imgIndex === 0 ? 'row-span-2' : ''
                      }`}
                      whileHover={{ scale: 1.03 }}
                    >
                      <Image
                        src={image}
                        alt={`${section.title} visual ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community of dedicated volunteers making a real difference in the lives of people with disabilities. 
              Your time, skills, and compassion can help create lasting positive change.
            </p>
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
