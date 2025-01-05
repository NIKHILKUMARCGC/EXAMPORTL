'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Flag } from 'lucide-react'

const mockQuestion = {
  id: 1,
  question: 'What is the primary purpose of React\'s virtual DOM?',
  options: [
    'To directly manipulate the browser\'s DOM',
    'To create a copy of the DOM for faster manipulation',
    'To bypass the browser\'s rendering engine',
    'To store component state'
  ],
  explanation: 'The virtual DOM creates a lightweight copy of the actual DOM, allowing React to perform efficient updates by comparing changes before updating the real DOM.'
}

export default function ExamPage() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isMarked, setIsMarked] = useState(false)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Question Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm p-4"
      >
        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
            <ChevronLeft className="h-5 w-5" />
            <span>Previous</span>
          </button>
          <div className="text-gray-700 font-medium">Question 1 of 30</div>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
            <span>Next</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </motion.div>

      {/* Question Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-sm p-6 space-y-6"
      >
        {/* Question Text */}
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-medium text-gray-900">
              {mockQuestion.question}
            </h2>
            <button
              onClick={() => setIsMarked(!isMarked)}
              className={`p-2 rounded-lg transition-colors ${
                isMarked ? 'text-yellow-600 bg-yellow-50' : 'text-gray-400 hover:text-yellow-600'
              }`}
            >
              <Flag className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {mockQuestion.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedOption(index)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full p-4 text-left rounded-lg border transition-all ${
                selectedOption === index
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                  : 'border-gray-200 hover:border-indigo-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full border ${
                    selectedOption === index
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-gray-300'
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <span>{option}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-between items-center"
      >
        <button className="px-6 py-3 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
          Clear Selection
        </button>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Submit Answer
        </button>
      </motion.div>
    </div>
  )
}
