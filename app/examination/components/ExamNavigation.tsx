'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Settings, LogOut } from 'lucide-react'

export default function ExamNavigation() {
  const [timeLeft, setTimeLeft] = useState('02:00:00')

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/examination/dashboard" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                ExamPro
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {/* Timer */}
            <motion.div 
              className="flex items-center space-x-2 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Clock className="h-5 w-5" />
              <span className="font-medium">{timeLeft}</span>
            </motion.div>

            {/* Settings */}
            <button className="text-gray-700 hover:text-indigo-600 transition-colors">
              <Settings className="h-5 w-5" />
            </button>

            {/* Logout */}
            <button className="text-gray-700 hover:text-red-600 transition-colors">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
