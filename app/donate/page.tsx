'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import { Heart, Shield, Users, Award, IndianRupee, CreditCard, Smartphone } from 'lucide-react'

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000]

  const handleDonate = () => {
    const amount = customAmount || donationAmount
    if (!amount || parseInt(amount) <= 0) {
      alert('Please enter a valid donation amount')
      return
    }

    // Razorpay integration link from original website
    window.open('https://rzp.io/l/saptrishifoundation', '_blank')
  }

  const impactExamples = [
    {
      amount: '₹500',
      impact: 'Provides educational materials for one child'
    },
    {
      amount: '₹1,000',
      impact: 'Covers medical consultation for one person'
    },
    {
      amount: '₹2,500',
      impact: 'Supports skill development workshop'
    },
    {
      amount: '₹5,000',
      impact: 'Provides assistive devices for mobility'
    },
    {
      amount: '₹10,000',
      impact: 'Organizes a Divyang camp for 50 people'
    },
    {
      amount: '₹25,000',
      impact: 'Establishes a resource center in rural area'
    }
  ]

  return (
    <>
      <PageHeader 
        title="Make a Donation" 
        subtitle="Your contribution can change someone's life"
      />

      {/* Hero Message */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Giving is not just about making a Donation,<br />it's about making a difference
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Every rupee you contribute goes directly towards empowering the differently abled 
              community and creating an inclusive society.
            </p>
            <div className="inline-block bg-primary-yellow px-6 py-3 rounded-full">
              <p className="text-gray-800 font-semibold">
                💰 Your Donation is Exempted Under Income Tax Act Section 80G
              </p>
            </div>
          </motion.div>

          {/* Why Donate */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: 'Direct Impact',
                description: '100% of your donation reaches beneficiaries'
              },
              {
                icon: Shield,
                title: 'Tax Benefits',
                description: '80G exemption on all donations'
              },
              {
                icon: Users,
                title: 'Transparent',
                description: 'Complete visibility of fund utilization'
              },
              {
                icon: Award,
                title: 'Certified',
                description: 'Government registered and approved'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-full flex items-center justify-center">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Choose Your Donation Amount
            </h2>

            {/* Donation Type */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setDonationType('one-time')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  donationType === 'one-time'
                    ? 'bg-primary-orange text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                One-Time
              </button>
              <button
                onClick={() => setDonationType('monthly')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  donationType === 'monthly'
                    ? 'bg-primary-orange text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Monthly
              </button>
            </div>

            {/* Predefined Amounts */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setDonationAmount(amount.toString())
                    setCustomAmount('')
                  }}
                  className={`p-4 rounded-xl font-bold text-xl transition-all ${
                    donationAmount === amount.toString() && !customAmount
                      ? 'bg-primary-orange text-white shadow-lg scale-105'
                      : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  ₹{amount.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                Or enter custom amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <IndianRupee className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="customAmount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setDonationAmount('')
                  }}
                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-xl"
                  placeholder="Enter amount"
                  min="1"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-4 text-center">
                We Accept
              </h3>
              <div className="flex justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2 text-gray-600">
                  <CreditCard size={24} />
                  <span>Cards</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Smartphone size={24} />
                  <span>UPI</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IndianRupee size={24} />
                  <span>Net Banking</span>
                </div>
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              className="w-full btn-primary text-xl py-5 flex items-center justify-center gap-3"
            >
              <Heart size={24} />
              Donate {(customAmount || donationAmount) && `₹${(customAmount || donationAmount).toLocaleString()}`} Now
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              🔒 Secure payment powered by Razorpay
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Examples */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-gray-600">
              See what your donation can achieve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactExamples.map((example, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary-yellow/10 to-primary-orange/10 rounded-2xl p-6 border-2 border-primary-orange/20 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-primary-orange mb-3">
                  {example.amount}
                </h3>
                <p className="text-gray-700">
                  {example.impact}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Exemption Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-l-8 border-primary-orange"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              📋 Tax Exemption Certificate - Section 80G
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Saptrishi Foundation is registered under Section 80G of the Income Tax Act, 1961. 
                All donations made to our foundation are eligible for tax deduction.
              </p>
              <p>
                <strong>What does this mean?</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>You can claim 50% of your donation amount as a deduction from your taxable income</li>
                <li>Valid 80G certificate will be provided for all donations</li>
                <li>Certificate can be used while filing your Income Tax Returns</li>
              </ul>
              <p>
                <strong>Example:</strong> If you donate ₹10,000, you can claim a deduction of ₹5,000 
                from your taxable income, potentially saving ₹1,500-3,000 in taxes (depending on your tax slab).
              </p>
              <p className="font-semibold text-primary-orange">
                For certificate queries, contact: info@saptrishifoundation.in
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Help */}
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
              Other Ways to Support
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Can't donate right now? There are many other ways you can help our cause
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/volunteer" className="btn-primary bg-white text-primary-orange hover:bg-gray-100">
                Volunteer Your Time
              </a>
              <a href="/contact" className="btn-secondary border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
