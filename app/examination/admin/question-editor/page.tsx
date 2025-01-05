'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Trash2, Image as ImageIcon, Code, FileText, Clock } from 'lucide-react'

interface Question {
  id: string
  type: 'mcq' | 'coding' | 'written'
  content: string
  options?: string[]
  correctAnswer?: string | number
  points: number
  timeLimit?: number
  tags: string[]
}

export default function QuestionEditor() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null)

  const addQuestion = (type: 'mcq' | 'coding' | 'written') => {
    const newQuestion: Question = {
      id: Math.random().toString(36).substring(7),
      type,
      content: '',
      points: 1,
      tags: [],
      ...(type === 'mcq' ? { options: ['', '', '', ''] } : {})
    }
    setQuestions([...questions, newQuestion])
    setActiveQuestion(newQuestion)
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Question List Sidebar */}
        <div className="col-span-4 bg-white rounded-xl shadow-sm p-4">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Questions</h2>
            
            {/* Question Type Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => addQuestion('mcq')}
                className="flex flex-col items-center p-3 border rounded-lg hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
              >
                <FileText className="h-6 w-6 text-indigo-600 mb-2" />
                <span className="text-sm">MCQ</span>
              </button>
              <button
                onClick={() => addQuestion('coding')}
                className="flex flex-col items-center p-3 border rounded-lg hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
              >
                <Code className="h-6 w-6 text-indigo-600 mb-2" />
                <span className="text-sm">Coding</span>
              </button>
              <button
                onClick={() => addQuestion('written')}
                className="flex flex-col items-center p-3 border rounded-lg hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
              >
                <FileText className="h-6 w-6 text-indigo-600 mb-2" />
                <span className="text-sm">Written</span>
              </button>
            </div>

            {/* Question List */}
            <div className="space-y-2">
              {questions.map((question, index) => (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    activeQuestion?.id === question.id
                      ? 'bg-indigo-50 border-indigo-200'
                      : 'hover:bg-gray-50 border-gray-200'
                  } border`}
                  onClick={() => setActiveQuestion(question)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-gray-900">
                        Question {index + 1}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {question.type.toUpperCase()} • {question.points} points
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setQuestions(questions.filter(q => q.id !== question.id))
                      }}
                      className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Question Editor */}
        <div className="col-span-8 bg-white rounded-xl shadow-sm p-6">
          {activeQuestion ? (
            <div className="space-y-6">
              {/* Question Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question Text
                </label>
                <textarea
                  value={activeQuestion.content}
                  onChange={(e) => {
                    const updated = { ...activeQuestion, content: e.target.value }
                    setActiveQuestion(updated)
                    setQuestions(questions.map(q => q.id === updated.id ? updated : q))
                  }}
                  className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your question here..."
                />
              </div>

              {/* MCQ Options */}
              {activeQuestion.type === 'mcq' && (
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Answer Options
                  </label>
                  {activeQuestion.options?.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="correct-answer"
                        checked={activeQuestion.correctAnswer === index}
                        onChange={() => {
                          const updated = { ...activeQuestion, correctAnswer: index }
                          setActiveQuestion(updated)
                          setQuestions(questions.map(q => q.id === updated.id ? updated : q))
                        }}
                        className="h-4 w-4 text-indigo-600"
                      />
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...(activeQuestion.options || [])]
                          newOptions[index] = e.target.value
                          const updated = { ...activeQuestion, options: newOptions }
                          setActiveQuestion(updated)
                          setQuestions(questions.map(q => q.id === updated.id ? updated : q))
                        }}
                        className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder={`Option ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Question Settings */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Points
                  </label>
                  <input
                    type="number"
                    value={activeQuestion.points}
                    onChange={(e) => {
                      const updated = { ...activeQuestion, points: parseInt(e.target.value) }
                      setActiveQuestion(updated)
                      setQuestions(questions.map(q => q.id === updated.id ? updated : q))
                    }}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Limit (minutes)
                  </label>
                  <input
                    type="number"
                    value={activeQuestion.timeLimit || ''}
                    onChange={(e) => {
                      const updated = { ...activeQuestion, timeLimit: parseInt(e.target.value) }
                      setActiveQuestion(updated)
                      setQuestions(questions.map(q => q.id === updated.id ? updated : q))
                    }}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  placeholder="Add tags separated by commas"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value) {
                      const newTags = e.currentTarget.value.split(',').map(tag => tag.trim())
                      const updated = {
                        ...activeQuestion,
                        tags: [...activeQuestion.tags, ...newTags]
                      }
                      setActiveQuestion(updated)
                      setQuestions(questions.map(q => q.id === updated.id ? updated : q))
                      e.currentTarget.value = ''
                    }
                  }}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {activeQuestion.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select or create a question to start editing
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
