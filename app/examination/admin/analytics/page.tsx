'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Users, 
  Clock, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react'

// Mock data
const examStats = {
  totalParticipants: 150,
  averageScore: 72.5,
  averageTime: '45 minutes',
  passRate: '85%',
  suspiciousActivities: 12
}

const scoreDistribution = [
  { range: '90-100', count: 15 },
  { range: '80-89', count: 45 },
  { range: '70-79', count: 35 },
  { range: '60-69', count: 30 },
  { range: '0-59', count: 25 }
]

const recentAttempts = [
  { 
    id: 1,
    student: 'John Doe',
    score: 85,
    time: '50 minutes',
    status: 'passed',
    flags: 0
  },
  // Add more attempts...
]

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('7d')

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Exam Analytics</h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="24h">Last 24 Hours</option>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="all">All Time</option>
        </select>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          {
            title: 'Total Participants',
            value: examStats.totalParticipants,
            icon: Users,
            color: 'blue'
          },
          {
            title: 'Average Score',
            value: examStats.averageScore + '%',
            icon: TrendingUp,
            color: 'green'
          },
          {
            title: 'Average Time',
            value: examStats.averageTime,
            icon: Clock,
            color: 'purple'
          },
          {
            title: 'Pass Rate',
            value: examStats.passRate,
            icon: CheckCircle,
            color: 'indigo'
          },
          {
            title: 'Suspicious Activities',
            value: examStats.suspiciousActivities,
            icon: AlertTriangle,
            color: 'yellow'
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Score Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Score Distribution</h2>
        <div className="space-y-4">
          {scoreDistribution.map((range) => (
            <div key={range.range} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{range.range}%</span>
                <span className="text-gray-900 font-medium">{range.count} students</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(range.count / examStats.totalParticipants) * 100}%` }}
                  className="h-full bg-indigo-600 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent Attempts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Attempts</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4">Student</th>
                <th className="pb-4">Score</th>
                <th className="pb-4">Time Taken</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Flags</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {recentAttempts.map((attempt) => (
                <tr key={attempt.id} className="text-sm">
                  <td className="py-4">{attempt.student}</td>
                  <td className="py-4">{attempt.score}%</td>
                  <td className="py-4">{attempt.time}</td>
                  <td className="py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        attempt.status === 'passed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {attempt.status}
                    </span>
                  </td>
                  <td className="py-4">
                    {attempt.flags > 0 ? (
                      <span className="text-yellow-600 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        {attempt.flags}
                      </span>
                    ) : (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
