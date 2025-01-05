'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const features = [
  {
    title: 'AI-Powered Question Generation',
    description: 'Our advanced AI technology automatically generates high-quality, relevant questions across multiple domains. Save time while maintaining assessment quality.',
    image: 'https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7000.jpg',
    benefits: [
      'Smart question generation',
      'Domain-specific content',
      'Automatic difficulty scaling',
      'Continuous learning system'
    ]
  },
  {
    title: 'Real-time Proctoring & Anti-cheating',
    description: 'Ensure test integrity with our advanced proctoring system. Monitor candidates in real-time and prevent cheating with AI-powered behavior analysis.',
    image: 'https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg',
    benefits: [
      'Live monitoring',
      'Browser lockdown',
      'AI behavior analysis',
      'Detailed audit logs'
    ]
  },
  {
    title: 'Comprehensive Analytics Dashboard',
    description: 'Get detailed insights into candidate performance with our advanced analytics. Track progress, identify patterns, and make data-driven hiring decisions.',
    image: 'https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg',
    benefits: [
      'Performance metrics',
      'Skill gap analysis',
      'Comparative reports',
      'Custom insights'
    ]
  },
  {
    title: 'Automated Evaluation & Scoring',
    description: 'Save time with our intelligent scoring system. Automatically grade assessments, provide instant feedback, and generate detailed performance reports.',
    image: 'https://img.freepik.com/free-vector/automation-concept-illustration_114360-1395.jpg',
    benefits: [
      'Instant results',
      'Detailed feedback',
      'Custom scoring rules',
      'Batch processing'
    ]
  }
]

export default function SkillTestFeatures() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent sm:text-4xl mb-3">
            Comprehensive Skill Assessment Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test and evaluate candidates across a wide range of skills and domains
          </p>
        </motion.div>
      </div>

      <div className="space-y-24">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={index % 2 === 1 ? 'lg:pl-12' : 'lg:pr-12'}>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent mb-6">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {feature.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-500"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
            <div className={`relative ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white p-4 max-w-md mx-auto">
                <div className="relative h-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="object-contain h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-16 text-center"
      >
        <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
          Explore All Features
        </button>
      </motion.div>
    </div>
  )
}
