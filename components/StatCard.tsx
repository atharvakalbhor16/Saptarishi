'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  value: string
  label: string
  delay?: number
}

export default function StatCard({ icon: Icon, value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-full flex items-center justify-center">
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-4xl font-bold text-gray-800 mb-2">{value}</h3>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  )
}
