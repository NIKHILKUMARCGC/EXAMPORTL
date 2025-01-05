'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SecureBrowser from '../../components/SecureBrowser'
import ProctorService from '../../components/ProctorService'
import { 
  ChevronLeft, 
  ChevronRight, 
  Flag,
  AlertTriangle,
  Clock,
  Save,
  Lightbulb,
  TrendingUp
} from 'lucide-react'

interface Question {
  id: number
  type: 'mcq' | 'written' | 'coding'
  content: string
  options?: string[]
  timeLimit: number
  points: number
}

export default function ExamPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, any>>({})
  const [remainingTime, setRemainingTime] = useState(7200) // 2 hours
  const [tabSwitches, setTabSwitches] = useState(0)
  const [warnings, setWarnings] = useState<string[]>([])
  const [skillLevel, setSkillLevel] = useState<'basic' | 'intermediate' | 'advanced'>('intermediate')
  const [feedback, setFeedback] = useState<string[]>([])

  // Mock questions
  const questions: Question[] = [
    {
      id: 1,
      type: 'mcq',
      content: 'What is the primary purpose of React\'s virtual DOM?',
      options: [
        'To directly manipulate the browser\'s DOM',
        'To create a copy of the DOM for faster manipulation',
        'To bypass the browser\'s rendering engine',
        'To store component state'
      ],
      timeLimit: 120,
      points: 5
    },
    // Add more questions...
  ]

  useEffect(() => {
    // Timer countdown
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          // Auto-submit exam
          handleSubmitExam()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Tab visibility detection
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitches(prev => prev + 1)
        setWarnings(prev => [...prev, 'Tab switch detected'])
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      clearInterval(timer)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleSubmitExam = () => {
    // Implement exam submission logic
    console.log('Submitting exam:', { answers, warnings, tabSwitches })
  }

  const adjustDifficulty = (correct: boolean) => {
    if (correct && skillLevel !== 'advanced') {
      setSkillLevel('advanced')
    } else if (!correct && skillLevel !== 'basic') {
      setSkillLevel('basic')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-16">
      <SecureBrowser />
      <ProctorService />

      <div className="max-w-4xl mx-auto px-4">
        {/* Header with Adaptive Info */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-indigo-600" />
                <span className="font-medium text-gray-900">
                  {formatTime(remainingTime)}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
                <span className="text-sm text-gray-600">
                  Current Level: <span className="font-medium capitalize">{skillLevel}</span>
                </span>
              </div>
            </div>
            <button
              onClick={handleSubmitExam}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-200 shadow-sm"
            >
              Submit Exam
            </button>
          </div>
        </div>

        {/* Question Area */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-6"
        >
          <div className="space-y-6">
            {/* Question Header */}
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {questions[currentQuestion].points} points
                  </span>
                </div>
                <h2 className="text-xl font-medium text-gray-900">
                  {questions[currentQuestion].content}
                </h2>
              </div>
              <button 
                className="p-2 text-gray-400 hover:text-yellow-600 transition-colors"
                onClick={() => {/* Add flag logic */}}
              >
                <Flag className="h-5 w-5" />
              </button>
            </div>

            {/* Adaptive Learning Hint */}
            {feedback.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-indigo-50 border border-indigo-100 rounded-lg p-4"
              >
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-indigo-600 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-indigo-900 mb-1">
                      Learning Insight
                    </h3>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      {feedback.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Question Content */}
            <div className="space-y-4">
              {questions[currentQuestion].type === 'mcq' && (
                <div className="grid gap-3">
                  {questions[currentQuestion].options?.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => {
                        setAnswers({ ...answers, [currentQuestion]: index })
                        // Simulate adaptive feedback
                        setFeedback([
                          'Based on your answer pattern, we\'ll adjust the difficulty',
                          'Try focusing on core concepts before advancing'
                        ])
                      }}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                        answers[currentQuestion] === index
                          ? 'border-indigo-600 bg-indigo-50/50 shadow-sm'
                          : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                          answers[currentQuestion] === index
                            ? 'border-indigo-600 bg-indigo-600 text-white'
                            : 'border-gray-300'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className={answers[currentQuestion] === index ? 'text-indigo-700' : 'text-gray-700'}>
                          {option}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center pb-8">
          <button
            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Previous</span>
          </button>
          <button
            onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
            disabled={currentQuestion === questions.length - 1}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
