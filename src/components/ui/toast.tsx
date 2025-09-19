'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ToastProps {
  message: string
  type?: 'success' | 'error'
  onClose?: () => void
}

export function Toast({ message, type = 'success', onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={cn(
      'fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50',
      type === 'success' ? 'bg-teal-500 text-white' : 'bg-red-500 text-white'
    )}>
      {message}
    </div>
  )
}