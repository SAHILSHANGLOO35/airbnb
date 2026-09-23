"use client"

import { createContext, ReactNode, useContext, useRef, useState } from "react"

type ToastContextType = {
  showToast: (message: string) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState("")
  const [visible, setVisible] = useState(false)

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = (message: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    setMessage(message)
    setVisible(true)

    timerRef.current = setTimeout(() => {
      setVisible(false)
    }, 2000)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-8 left-1/2 z-200 -translate-x-1/2 rounded-lg bg-[#222] px-5.5 py-3.5 text-sm font-medium text-white transition-opacity duration-300 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {message}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider")
  }

  return context
}
