import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'

const features = [
  "Custom-tailored assessment solutions",
  "Dedicated account management",
  "Advanced analytics and reporting",
  "Integration with your existing systems",
  "On-premise deployment options",
  "Customizable branding",
  "24/7 priority support",
  "Regular business reviews",
]

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Enterprise-Grade Assessment Solutions</h1>
              <p className="text-xl text-indigo-100 mb-8">
                Empower your organization with customizable, scalable, and secure assessment tools designed for enterprise needs.
              </p>
              <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg hover:bg-indigo-100 transition-colors text-lg font-medium inline-flex items-center">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative h-64 lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Enterprise Solutions"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Enterprise Solution?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Global Tech Corp Streamlines Hiring</h3>
                <p className="text-gray-600 mb-6">
                  Learn how Global Tech Corp reduced their hiring time by 40% and improved candidate quality using our enterprise assessment platform.
                </p>
                <button className="text-indigo-600 font-medium inline-flex items-center">
                  Read Case Study
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Global Tech Corp Case Study"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your assessment process?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get in touch with our enterprise team to discuss your specific needs and how we can help.
          </p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg hover:bg-indigo-100 transition-colors text-lg font-medium">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}

