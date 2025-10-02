import { useState } from 'react'

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
  aspectRatio = "4/6",
  className = "",
  onClick
}: ImageOverlayProps) {
  const [, setIsHovered] = useState(false)

  return (
    <div 
      className={`w-full bg-gray-800 overflow-hidden relative group cursor-pointer ${className}`}
      style={{ aspectRatio }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} draggable={false} className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />

      {/* 기본 텍스트 오버레이와 화살표 */}
      {title && (
        <div className={`absolute left-0 right-0 z-20 px-[4rem] pb-[6rem] pt-[200%] w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.35)_20%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.1)_60%,rgba(0,0,0,0)_100%)] transition-all duration-500 bottom-0`}>
          <div className="flex items-center justify-between">
            <h3 className="text-white text-[3rem] font-[600] drop-shadow-lg">{title}</h3>
          </div>
          {description && (
            <p className="text-white/85 text-[1.125rem] mt-2 max-w-[80%] leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Hover description overlay removed: description always visible under title */}
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
