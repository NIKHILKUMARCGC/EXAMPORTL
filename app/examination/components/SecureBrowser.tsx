'use client'

import { useEffect, useState } from 'react'
import { Shield, AlertTriangle, X } from 'lucide-react'

export default function SecureBrowser() {
  const [securityChecks, setSecurityChecks] = useState({
    isFullScreen: false,
    multipleDisplays: false,
    restrictedKeys: false,
    clipboardAccess: false,
    rightClickDisabled: false,
  })

  useEffect(() => {
    // Check for full screen
    const checkFullScreen = () => {
      setSecurityChecks(prev => ({
        ...prev,
        isFullScreen: document.fullscreenElement !== null
      }))
    }

    // Check for multiple displays
    const checkDisplays = async () => {
      if ('getScreenDetails' in window) {
        try {
          const screens = await (window as any).getScreenDetails()
          setSecurityChecks(prev => ({
            ...prev,
            multipleDisplays: screens.screens.length > 1
          }))
        } catch (error) {
          console.error('Failed to check displays:', error)
        }
      }
    }

    // Disable restricted keys
    const handleKeyDown = (e: KeyboardEvent) => {
      const restrictedKeys = ['Tab', 'Alt', 'Meta', 'Control', 'Escape']
      if (restrictedKeys.includes(e.key)) {
        e.preventDefault()
        setSecurityChecks(prev => ({ ...prev, restrictedKeys: true }))
      }
    }

    // Disable clipboard
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault()
      setSecurityChecks(prev => ({ ...prev, clipboardAccess: true }))
    }

    // Disable right click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      setSecurityChecks(prev => ({ ...prev, rightClickDisabled: true }))
    }

    // Add event listeners
    document.addEventListener('fullscreenchange', checkFullScreen)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('copy', handleCopy)
    document.addEventListener('paste', handleCopy)
    document.addEventListener('contextmenu', handleContextMenu)
    checkDisplays()

    // Request full screen
    const requestFullScreen = async () => {
      try {
        await document.documentElement.requestFullscreen()
      } catch (error) {
        console.error('Failed to enter full screen:', error)
      }
    }
    requestFullScreen()

    return () => {
      document.removeEventListener('fullscreenchange', checkFullScreen)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('paste', handleCopy)
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])

  const getSecurityStatus = () => {
    const checks = Object.values(securityChecks)
    if (checks.every(check => !check)) return 'secure'
    if (checks.filter(check => check).length > 2) return 'high-risk'
    return 'warning'
  }

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="bg-white rounded-xl shadow-lg p-4">
        <div className="flex items-center space-x-4">
          {getSecurityStatus() === 'secure' ? (
            <div className="p-2 bg-green-100 rounded-lg">
              <Shield className="h-5 w-5 text-green-600" />
            </div>
          ) : getSecurityStatus() === 'warning' ? (
            <div className="p-2 bg-yellow-100 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
            </div>
          ) : (
            <div className="p-2 bg-red-100 rounded-lg">
              <X className="h-5 w-5 text-red-600" />
            </div>
          )}

          <div>
            <h3 className="text-sm font-medium text-gray-900">
              Secure Browser Status
            </h3>
            <p className="text-xs text-gray-500">
              {getSecurityStatus() === 'secure'
                ? 'Environment is secure'
                : getSecurityStatus() === 'warning'
                ? 'Security warnings detected'
                : 'High-risk environment detected'}
            </p>
          </div>
        </div>

        {getSecurityStatus() !== 'secure' && (
          <div className="mt-4 space-y-2">
            {Object.entries(securityChecks).map(([key, value]) => (
              value && (
                <div key={key} className="flex items-center space-x-2 text-xs text-red-600">
                  <AlertTriangle className="h-4 w-4" />
                  <span>
                    {key === 'isFullScreen' && 'Full screen mode required'}
                    {key === 'multipleDisplays' && 'Multiple displays detected'}
                    {key === 'restrictedKeys' && 'Restricted key usage detected'}
                    {key === 'clipboardAccess' && 'Clipboard access attempted'}
                    {key === 'rightClickDisabled' && 'Right-click attempted'}
                  </span>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
