'use client'

import { motion } from 'framer-motion'
import { Book, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const upcomingExams = [
  {
    id: 1,
    title: 'Mathematics Advanced Calculus',
    date: '2025-01-10',
    time: '10:00 AM',
    duration: '2 hours',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Computer Science Fundamentals',
    date: '2025-01-15',
    time: '2:00 PM',
    duration: '3 hours',
    status: 'upcoming'
  }
]

const completedExams = [
  {
    id: 3,
    title: 'Physics Mechanics',
    date: '2025-01-02',
    score: '85/100',
    status: 'completed'
  }
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm p-6"
      >
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Student!</h1>
        <p className="mt-2 text-gray-600">Your upcoming examinations and results are listed below.</p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Book className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Exams</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Upcoming</p>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Upcoming Exams */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Exams</h2>
        <div className="space-y-4">
          {upcomingExams.map((exam) => (
            <div
              key={exam.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:border-indigo-200 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-900">{exam.title}</h3>
                <p className="text-sm text-gray-600">
                  {exam.date} at {exam.time} • {exam.duration}
                </p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Start Exam
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Completed Exams */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl shadow-sm p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Completed Exams</h2>
        <div className="space-y-4">
          {completedExams.map((exam) => (
            <div
              key={exam.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <h3 className="font-medium text-gray-900">{exam.title}</h3>
                <p className="text-sm text-gray-600">{exam.date}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-green-600 font-medium">{exam.score}</span>
                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  View Results
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
