'use client'

import PageHeader from '@/components/PageHeader'
import NewsCard from '@/components/NewsCard'
import { motion } from 'framer-motion'

export default function NewsEventsPage() {
  const news = [
    {
      title: 'Divyang Camp Successfully Organized in Mumbai',
      excerpt: 'Over 500 differently abled individuals benefited from our comprehensive health camp and information session.',
      date: 'October 28, 2025',
      slug: 'divyang-camp-mumbai-2025'
    },
    {
      title: 'New Partnership with Government Health Department',
      excerpt: 'Saptrishi Foundation signs MoU with state health department to provide better healthcare access.',
      date: 'October 15, 2025',
      slug: 'partnership-health-dept'
    },
    {
      title: 'Mobile App Reaches 50,000 Downloads',
      excerpt: 'Our platform continues to grow, connecting more beneficiaries with essential services across India.',
      date: 'October 5, 2025',
      slug: 'app-milestone-50k'
    },
    {
      title: 'Volunteer Training Workshop - Register Now',
      excerpt: 'Join our comprehensive training program to become an effective volunteer and make a real difference.',
      date: 'September 28, 2025',
      slug: 'volunteer-training-workshop'
    },
    {
      title: 'Government Scheme Awareness Drive in Delhi',
      excerpt: 'Free consultation and guidance on accessing central and state government benefits for the differently abled.',
      date: 'September 20, 2025',
      slug: 'awareness-drive-delhi'
    },
    {
      title: 'Annual Report 2024-25 Released',
      excerpt: 'Discover our achievements, impact metrics, and financial transparency in our comprehensive annual report.',
      date: 'September 10, 2025',
      slug: 'annual-report-2024-25'
    },
    {
      title: 'Special Child Education Program Launch',
      excerpt: 'New initiative to provide specialized education resources and support for children with special needs.',
      date: 'August 25, 2025',
      slug: 'education-program-launch'
    },
    {
      title: 'World Disability Day Celebration',
      excerpt: 'Join us for a day of empowerment, awareness, and celebration of abilities with cultural programs and workshops.',
      date: 'December 3, 2025',
      slug: 'world-disability-day-2025'
    },
    {
      title: 'Insurance Coverage Extended to Rural Areas',
      excerpt: 'Bringing comprehensive insurance solutions to differently abled individuals in remote villages.',
      date: 'August 10, 2025',
      slug: 'rural-insurance-expansion'
    }
  ]

  const upcomingEvents = [
    {
      title: 'Divyang Mela 2025',
      date: 'November 15-17, 2025',
      location: 'Pune, Maharashtra',
      description: 'Three-day exhibition and fair showcasing assistive devices, services, and opportunities.'
    },
    {
      title: 'Free Medical Check-up Camp',
      date: 'November 22, 2025',
      location: 'Bangalore, Karnataka',
      description: 'Comprehensive health screening with specialist doctors and free medicines.'
    },
    {
      title: 'Skill Development Workshop',
      date: 'December 5-7, 2025',
      location: 'Chennai, Tamil Nadu',
      description: 'Learn new skills and enhance employability with our certified training programs.'
    }
  ]

  return (
    <>
      <PageHeader 
        title="News & Events" 
        subtitle="Stay updated with our latest activities and upcoming programs"
      />

      {/* Latest News */}
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
              Latest News
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recent updates and announcements from Saptrishi Foundation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <NewsCard 
                key={item.slug}
                {...item}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendar for these exciting events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-primary-orange"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {event.title}
                </h3>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p className="flex items-center gap-2">
                    <span className="text-primary-orange">📆</span>
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary-orange">📍</span>
                    {event.location}
                  </p>
                </div>
                <p className="text-gray-600 mb-6">
                  {event.description}
                </p>
                <a 
                  href="/contact" 
                  className="text-primary-orange font-semibold hover:underline"
                >
                  Register Now →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-primary-orange to-orange-600 text-white">
        <div className="container-custom">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for updates on events, news, and opportunities
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary-orange rounded-full font-semibold hover:bg-gray-100 transition-all"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}
