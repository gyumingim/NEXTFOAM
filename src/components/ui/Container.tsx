import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  heightRatio?: number
  bgColor?: string
  fullBleed?: boolean
  className?: string
}

export function Container({ 
  children, 
  heightRatio = 1, 
  bgColor = "#ffffff", 
  fullBleed = false,
  className = ""
}: ContainerProps) {
  return (
    <section
      className={`w-full flex flex-col justify-center ${fullBleed ? "px-0" : "px-[7rem]"} ${className}`}
      style={{ 
        minHeight: `${100 + heightRatio}vh`, 
        height: `${100 + heightRatio}vh`, 
        backgroundColor: bgColor 
      }}
    >
      {children}
    </section>
  )
}
