'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <section 
      className="relative pt-40 pb-20 sm:pt-44 sm:pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-yellow to-primary-orange overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
