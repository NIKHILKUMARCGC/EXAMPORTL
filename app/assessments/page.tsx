import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const assessmentTypes = [
  {
    title: "Technical Skills",
    description: "Evaluate programming, development, and technical knowledge",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    features: [
      "Coding challenges",
      "Multiple programming languages",
      "Real-time compilation",
      "Automated evaluation"
    ]
  },
  {
    title: "Soft Skills",
    description: "Assess communication, leadership, and interpersonal abilities",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    features: [
      "Video interviews",
      "Personality assessments",
      "Situational judgment",
      "Communication skills"
    ]
  },
  {
    title: "Domain Knowledge",
    description: "Test subject matter expertise across various fields",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    features: [
      "Industry-specific tests",
      "Customizable questions",
      "Comprehensive reporting",
      "Skill gap analysis"
    ]
  }
]

export default function AssessmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Comprehensive Assessment Solutions</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Evaluate skills and knowledge with our advanced assessment platform designed for accurate and fair testing.
            </p>
          </div>
        </div>
      </div>

      {/* Assessment Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {assessmentTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">100K+</div>
              <div className="text-gray-600">Assessments Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Assessment Types</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">1M+</div>
              <div className="text-gray-600">Users Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

