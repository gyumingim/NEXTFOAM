import React, { useState, useEffect } from 'react'

interface ImageOverlayProps {
  src: string
  alt: string
  title?: string
  description?: string
  category?: string
  readTime?: string
  aspectRatio?: string
  className?: string
  showArrow?: boolean
  onClick?: () => void
}

export function ImageOverlay({ 
  src, 
  alt, 
  title, 
  description, 
  category, 
  readTime,
  aspectRatio = "4/6",
  className = "",
  showArrow = true,
  onClick
}: ImageOverlayProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (isHovered && description) {
      setTypedText('')
      setCurrentIndex(0)
      
      const typeInterval = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev < description.length) {
            setTypedText(description.slice(0, prev + 1))
            return prev + 1
          } else {
            clearInterval(typeInterval)
            return prev
          }
        })
      }, 20) // 타이핑 속도 조절

      return () => clearInterval(typeInterval)
    } else {
      setTypedText('')
      setCurrentIndex(0)
    }
  }, [isHovered, description])

  return (
    <div 
      className={`w-full bg-white overflow-hidden relative group cursor-pointer ${className}`}
      style={{ aspectRatio }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />

      {/* 기본 텍스트 오버레이와 화살표 */}
      {title && (
        <div className={`absolute left-0 right-0 z-20 px-4 pb-12 pt-[200%] w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.45)_20%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.1)_60%,rgba(0,0,0,0)_100%)] transition-all duration-500 ${isHovered ? 'bottom-4' : 'bottom-0'}`}>
          <div className="flex items-center justify-between">
            <h3 className="text-white text-[1.75rem] font-[600] drop-shadow-lg">{title}</h3>
            {showArrow && (
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 호버 시 타이핑 효과 설명 텍스트 */}
      {description && (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute top-8 left-8 max-w-[80%]">
            <div className="text-white text-[1.25rem] leading-relaxed">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

interface NewsItemProps {
  src: string
  alt: string
  title: string
  category: string
  readTime: string
  size: 'large' | 'medium' | 'small'
  className?: string
  onClick?: () => void
}

export function NewsItem({ 
  src, 
  alt, 
  title, 
  category, 
  readTime, 
  size,
  className = "",
  onClick
}: NewsItemProps) {
  const sizeClasses = {
    large: "col-span-2 row-span-2 p-4",
    medium: "col-span-1 row-span-1 p-3",
    small: "col-span-1 row-span-1 p-3"
  }

  const titleSizes = {
    large: "text-[1.25rem]",
    medium: "text-sm",
    small: "text-xs"
  }

  const iconSizes = {
    large: "w-4 h-4",
    medium: "w-3 h-3",
    small: "w-3 h-3"
  }

  const dotSizes = {
    large: "w-1.5 h-1.5",
    medium: "w-1 h-1",
    small: "w-1 h-1"
  }

  return (
    <div 
      className={`relative group cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
      <div className={`absolute bottom-0 left-0 right-0 ${sizeClasses[size]}`}>
        <div className="flex items-center gap-2 mb-2">
          <div className={`${iconSizes[size]} bg-white/20 rounded-full flex items-center justify-center`}>
            <div className={`${dotSizes[size]} bg-white rounded-full`}></div>
          </div>
          <span className="text-white/80 text-xs font-medium">{category}</span>
          <span className="text-white/60 text-xs">{readTime}</span>
        </div>
        <h3 className={`text-white ${titleSizes[size]} font-bold leading-tight`}>{title}</h3>
      </div>
    </div>
  )
}
