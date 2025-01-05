'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = {
  basic: [
    '3 variations',
    '5 revisions',
    'Free palette',
    'Vector file',
    'For 3 days of delivery'
  ],
  professional: [
    '5 variations',
    '10 revisions',
    'Free palette',
    'Vector file',
    'For 7 days of delivery',
    'Premium support'
  ],
  enterprise: [
    'Unlimited variations',
    'Unlimited revisions',
    'Custom palette',
    'All source files',
    'Priority support',
    'For 14 days of delivery'
  ]
}

export default function PricingSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include core features.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Basic Plan */}
          <motion.div
            whileHover={{ y: -8 }}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Basic</h3>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold text-gray-900">$500</span>
              <span className="ml-2 text-gray-500">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {features.basic.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              Get started
            </motion.button>
          </motion.div>

          {/* Professional Plan */}
          <motion.div
            whileHover={{ y: -8 }}
            className="relative bg-indigo-600 rounded-2xl shadow-xl overflow-hidden p-8 transform scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-700" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Professional</h3>
              </div>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-white">$899</span>
                <span className="ml-2 text-indigo-200">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {features.professional.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-indigo-200" />
                    <span className="text-indigo-100">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-lg bg-white text-indigo-600 font-medium hover:bg-indigo-50 transition-colors"
              >
                Get started
              </motion.button>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            whileHover={{ y: -8 }}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold text-gray-900">$1499</span>
              <span className="ml-2 text-gray-500">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {features.enterprise.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              Contact sales
            </motion.button>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom plan? <button className="text-indigo-600 font-medium hover:text-indigo-500">Contact us</button>
          </p>
        </div>
      </div>
    </div>
  )
}
