'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import { User, Mail, MessageSquare, Send } from 'lucide-react'

export default function SuggestionsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    suggestion: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    alert('Thank you for your valuable feedback! We will review your suggestion.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '',
      subject: '',
      suggestion: ''
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <PageHeader 
        title="Suggestions & Feedback" 
        subtitle="Your voice matters - help us improve our services"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                We Value Your Input
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At Saptrishi Foundation, we believe in continuous improvement. Your suggestions, 
                feedback, and ideas help us serve the community better.
              </p>
              <div className="space-y-4">
                {[
                  'Share your experience with our services',
                  'Suggest new programs or initiatives',
                  'Report issues or concerns',
                  'Recommend improvements to existing services',
                  'Share ideas for community engagement'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-orange flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-primary-yellow/20 to-primary-orange/20 rounded-2xl">
                <p className="text-gray-800 font-semibold mb-2">
                  💡 All suggestions are reviewed carefully
                </p>
                <p className="text-gray-600">
                  We read every submission and implement feasible improvements regularly.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-primary-yellow to-primary-orange rounded-3xl p-12 text-center shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-white text-8xl mb-6">💭</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Your Ideas Shape Our Future
              </h3>
              <p className="text-white text-lg">
                Together, we can build a better platform for everyone
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Share Your Thoughts
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to submit your suggestion or feedback
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    <option value="service-improvement">Service Improvement</option>
                    <option value="new-feature">New Feature Request</option>
                    <option value="website-app">Website/App Feedback</option>
                    <option value="event-program">Event/Program Suggestion</option>
                    <option value="complaint">Complaint/Issue</option>
                    <option value="general">General Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  placeholder="Brief summary of your suggestion"
                />
              </div>

              <div>
                <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Suggestion/Feedback *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="suggestion"
                    name="suggestion"
                    required
                    value={formData.suggestion}
                    onChange={handleChange}
                    rows={6}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent resize-none"
                    placeholder="Please provide detailed information about your suggestion or feedback..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Suggestion
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}
