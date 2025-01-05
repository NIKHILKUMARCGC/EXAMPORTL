'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const institutions = [
  {
    name: 'Harvard University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/2560px-Harvard_University_logo.svg.png',
    stats: 'Ranked #1 in Global Universities',
    description: 'Setting new standards in educational excellence'
  },
  {
    name: 'MIT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png',
    stats: '#1 in Engineering & Technology',
    description: 'Leading innovation in education'
  },
  {
    name: 'Stanford University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/2560px-Stanford_Cardinal_logo.svg.png',
    stats: 'Top 3 in Research Impact',
    description: 'Pioneering future of learning'
  },
  {
    name: 'Yale University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_logo.svg/2560px-Yale_University_logo.svg.png',
    stats: 'Excellence Since 1701',
    description: 'Shaping tomorrow\'s leaders'
  },
  {
    name: 'Princeton University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1200px-Princeton_seal.svg.png',
    stats: '#1 in Academic Excellence',
    description: 'Driving educational innovation'
  }
]

export default function TrustedInstitutions() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Trusted by Leading Institutions
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of institutions that trust our platform
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {institutions.map((institution, index) => (
          <motion.div
            key={institution.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-2xl" />
              
              <div className="relative m-0.5 bg-white rounded-2xl p-6">
                {/* Logo */}
                <div className="h-24 flex items-center justify-center mb-4">
                  <div className="relative w-48 h-20">
                    <Image
                      src={institution.logo}
                      alt={institution.name}
                      fill
                      className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {institution.name}
                  </h4>
                  <div className="text-indigo-600 font-medium mb-2">
                    {institution.stats}
                  </div>
                  <p className="text-gray-600">
                    {institution.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
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
        <p className="text-gray-500 italic max-w-2xl mx-auto">
          * Our platform is currently in development, actively working towards partnerships 
          with leading educational institutions. The institutions mentioned represent our 
          aspirational goals for future collaboration.
        </p>
      </motion.div>
    </div>
  )
}
