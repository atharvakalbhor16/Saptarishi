'use client'

import { motion } from 'framer-motion'
import { Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function CallToActionSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-orange to-orange-600 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Platform Today
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg">
                If you have an account, click &quot;login&quot; to see the advantages.
              </p>
              <p className="text-lg">
                If you haven&apos;t registered yet, we urge you to do so promptly.
              </p>
              <p className="text-lg font-semibold">
                We provide a user-friendly mobile application for our registered users.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/login" 
                className="inline-block bg-white text-primary-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 text-center"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-orange transition-all text-center"
              >
                Register Now
              </Link>
            </div>
          </motion.div>

          {/* App Download Section */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <Smartphone size={32} className="text-primary-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Download Our App</h3>
                <p className="text-white/90">Available on Android</p>
              </div>
            </div>

            <p className="mb-6 text-white/90">
              Get access to all features and services on the go with our mobile application.
            </p>

            {/* Google Play Button */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.saptrishi.sf_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all transform hover:scale-105"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
