// Metadata
export const metadata = {
  title: 'ExamPro - Smart Assessment Platform',
  description: 'Enhance your learning journey with our adaptive assessment platform',
}

// Client Component
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-white">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
