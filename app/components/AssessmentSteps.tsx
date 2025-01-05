'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Create an Assessment',
    description: 'Get started in minutes! Choose from our pre-built templates or create your own custom assessment. Our intuitive interface makes it easy to begin crafting your perfect assessment.',
    image: 'https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg',
    features: [
      'Pre-built templates',
      'Custom assessments',
      'Multiple subjects',
      'Easy setup'
    ]
  },
  {
    number: '02',
    title: 'Configure your Assessment',
    description: 'Customize every aspect of your assessment. Set time limits, choose question types, and define scoring criteria that match your requirements.',
    image: 'https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg',
    features: [
      'Flexible timing',
      'Custom scoring',
      'Multiple formats',
      'Anti-cheating measures'
    ]
  },
  {
    number: '03',
    title: 'Add Questions & Launch',
    description: 'Choose from our extensive question bank or create custom questions. Launch your assessment with confidence knowing everything is perfectly set up.',
    image: 'https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-illustration_74855-11070.jpg',
    features: [
      'Rich question bank',
      'Custom questions',
      'Real-time monitoring',
      'Instant results'
    ]
  }
]

const skillCategories = [
  {
    title: 'Technical Skills',
    skills: ['Programming', 'Data Analysis', 'System Design', 'Cloud Computing', 'DevOps', 'Cybersecurity']
  },
  {
    title: 'Professional Skills',
    skills: ['Project Management', 'Communication', 'Leadership', 'Problem Solving', 'Time Management', 'Teamwork']
  },
  {
    title: 'Domain Knowledge',
    skills: ['Finance', 'Healthcare', 'Marketing', 'Education', 'Engineering', 'Legal']
  },
  {
    title: 'Creative Skills',
    skills: ['UI/UX Design', 'Content Writing', 'Graphic Design', 'Video Editing', 'Animation', 'Digital Marketing']
  }
]

export default function AssessmentSteps() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Create Your Assessment in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to create, configure, and launch your assessments
            </p>
          </motion.div>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:pl-12' : 'lg:pr-12'}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold text-indigo-600">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  {step.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {step.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`relative aspect-[4/3] ${
                index % 2 === 1 ? 'lg:order-first' : ''
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-full rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 shadow-sm">
            Start Creating
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}
