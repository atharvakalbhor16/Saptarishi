'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  image?: string
  delay?: number
}

export default function TestimonialCard({ name, role, content, image, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Quote className="text-primary-orange mb-4" size={40} />
      <p className="text-gray-600 mb-6 italic leading-relaxed">
        &quot;{content}&quot;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-yellow to-primary-orange flex items-center justify-center text-white font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
