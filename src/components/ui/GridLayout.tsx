import React from 'react'

interface GridLayoutProps {
  children: React.ReactNode
  cols?: number
  gap?: string
  className?: string
}

export function GridLayout({ children, cols = 4, gap = "1rem", className = "" }: GridLayoutProps) {
  return (
    <div 
      className={`grid w-full ${className}`}
      style={{ 
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: gap
      }}
    >
      {children}
    </div>
  )
}

interface FlexRowProps {
  children: React.ReactNode
  gap?: string
  className?: string
}

export function FlexRow({ children, gap = "1rem", className = "" }: FlexRowProps) {
  return (
    <div className={`flex flex-row ${className}`} style={{ gap }}>
      {children}
    </div>
  )
}

interface FlexColumnProps {
  children: React.ReactNode
  gap?: string
  className?: string
}

export function FlexColumn({ children, gap = "1rem", className = "" }: FlexColumnProps) {
  return (
    <div className={`flex flex-col ${className}`} style={{ gap }}>
      {children}
    </div>
  )
}
