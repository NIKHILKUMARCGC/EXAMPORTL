'use client'

import { useState, useEffect } from 'react'
import { Camera, Mic, Monitor, AlertTriangle } from 'lucide-react'

interface ProctorAlert {
  type: 'warning' | 'error'
  message: string
  timestamp: Date
}

export default function ProctorService() {
  const [cameraActive, setCameraActive] = useState(false)
  const [micActive, setMicActive] = useState(false)
  const [screenShare, setScreenShare] = useState(false)
  const [alerts, setAlerts] = useState<ProctorAlert[]>([])

  // Simulated proctor checks
  const proctorChecks = {
    checkFace: () => {
      if (!cameraActive) {
        addAlert('error', 'Face not visible in camera')
        return false
      }
      return true
    },
    checkAudio: () => {
      if (!micActive) {
        addAlert('warning', 'Background noise detected')
        return false
      }
      return true
    },
    checkScreen: () => {
      if (!screenShare) {
        addAlert('error', 'Screen sharing is required')
        return false
      }
      return true
    }
  }

  const addAlert = (type: 'warning' | 'error', message: string) => {
    setAlerts(prev => [...prev, {
      type,
      message,
      timestamp: new Date()
    }])
  }

  // Initialize devices
  useEffect(() => {
    const initDevices = async () => {
      try {
        // Request camera access
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        setCameraActive(true)
        setMicActive(true)
        
        // Cleanup
        return () => {
          stream.getTracks().forEach(track => track.stop())
        }
      } catch (error) {
        addAlert('error', 'Failed to access camera or microphone')
      }
    }

    initDevices()
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Proctor Controls */}
      <div className="bg-white rounded-xl shadow-lg p-4 space-y-4">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            {/* Camera Status */}
            <div className={`p-2 rounded-lg ${cameraActive ? 'bg-green-100' : 'bg-red-100'}`}>
              <Camera className={`h-5 w-5 ${cameraActive ? 'text-green-600' : 'text-red-600'}`} />
            </div>

            {/* Microphone Status */}
            <div className={`p-2 rounded-lg ${micActive ? 'bg-green-100' : 'bg-red-100'}`}>
              <Mic className={`h-5 w-5 ${micActive ? 'text-green-600' : 'text-red-600'}`} />
            </div>

            {/* Screen Share Status */}
            <div className={`p-2 rounded-lg ${screenShare ? 'bg-green-100' : 'bg-red-100'}`}>
              <Monitor className={`h-5 w-5 ${screenShare ? 'text-green-600' : 'text-red-600'}`} />
            </div>
          </div>

          {/* Proctor Status */}
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-600">Proctor Active</span>
          </div>
        </div>

        {/* Recent Alerts */}
        {alerts.length > 0 && (
          <div className="max-h-32 overflow-y-auto space-y-2">
            {alerts.slice(-3).map((alert, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 p-2 rounded-lg text-sm ${
                  alert.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-yellow-50 text-yellow-700'
                }`}
              >
                <AlertTriangle className="h-4 w-4" />
                <span>{alert.message}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
