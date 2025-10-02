import { useRef, useState } from 'react'
import { NewsItem } from '../ui/ImageOverlay'

interface GallerySectionProps {
  className?: string
}

export function GallerySection({ className = "" }: GallerySectionProps) {
  const galleryItems = [
    {
      src: "/images/gallery/1.gif",
      alt: "CFD image",
      title: "Supersonic forward step",
      category: "CFD",
      readTime: "Gallery",
      size: 'large' as const
    },
    {
      src: "/images/gallery/2.gif",
      alt: "Gallery",
      title: "Indoor fire",
      category: "CFD",
      readTime: "Indoor fire",
      size: 'large' as const
    },
    {
      src: "/images/gallery/3.gif",
      alt: "Gallery",
      title: "Store separation",
      category: "CFD",
      readTime: "Store separation",
      size: 'medium' as const
    },
    {
      src: "/images/gallery/4.gif",
      alt: "Gallery",
      title: "Dam spillway",
      category: "CFD",
      readTime: "Dam spillway",
      size: 'medium' as const
    },
    {
      src: "/images/gallery/5.gif",
      alt: "Gallery",
      title: "Dam spillway",
      category: "CFD",
      readTime: "Dam spillway",
      size: 'medium' as const
    },
    {
      src: "/images/gallery/6.gif",
      alt: "Gallery",
      title: "Dam spillway",
      category: "CFD",
      readTime: "Dam spillway",
      size: 'medium' as const
    },
    {
      src: "/images/gallery/7.gif",
      alt: "Gallery",
      title: "Dam spillway",
      category: "CFD",
      readTime: "Dam spillway",
      size: 'medium' as const
    },
    {
      src: "/images/gallery/8.gif",
      alt: "Gallery",
      title: "Dam spillway",
      category: "CFD",
      readTime: "Dam spillway",
      size: 'medium' as const
    },
    {
      src: "/images/gallery/9.gif",
      alt: "Gallery",
      title: "Dam spillway",
      category: "CFD",
      readTime: "Dam spillway",
      size: 'medium' as const
    },
    {
      src: "/images/gallery/10.gif",
      alt: "Gallery",
      title: "Dam spillway",
      category: "CFD",
      readTime: "Dam spillway",
      size: 'medium' as const
    }
  ]

  // Horizontal drag-scroll like photo slider
  const ref = useRef<HTMLDivElement | null>(null)
  const [current, setCurrent] = useState(0)
  const total = galleryItems.length

  const onScroll = () => {
    const node = ref.current
    if (!node) return
    const slideWidth = node.clientWidth / 3
    const maxScroll = node.scrollWidth - node.clientWidth
    if (maxScroll > 0 && maxScroll - node.scrollLeft < slideWidth * 0.3) {
      setCurrent(total - 1)
      return
    }
    const idx = Math.floor((node.scrollLeft + slideWidth * 0.5) / slideWidth)
    setCurrent(Math.min(Math.max(idx, 0), total - 1))
  }

  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)

  const onDown = (x: number) => {
    const node = ref.current
    if (!node) return
    isDragging.current = true
    startX.current = x
    startScroll.current = node.scrollLeft
    node.classList.add('cursor-grabbing')
  }
  const onMove = (x: number) => {
    const node = ref.current
    if (!node || !isDragging.current) return
    node.scrollLeft = startScroll.current - (x - startX.current)
  }
  const onUp = (x: number) => {
    const node = ref.current
    if (!node || !isDragging.current) return
    isDragging.current = false
    node.classList.remove('cursor-grabbing')
    const delta = x - startX.current
    const threshold = node.clientWidth * 0.1
    const slideWidth = node.clientWidth / 3
    if (Math.abs(delta) > threshold) {
      const dir = delta < 0 ? 1 : -1
      const target = Math.max(0, Math.min(node.scrollLeft + dir * slideWidth, node.scrollWidth - node.clientWidth))
      node.scrollTo({ left: target, behavior: 'smooth' })
    } else {
      const idx = Math.floor((node.scrollLeft + slideWidth * 0.5) / slideWidth)
      node.scrollTo({ left: idx * slideWidth, behavior: 'smooth' })
    }
  }

  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      <div
        ref={ref}
        onScroll={onScroll}
        onMouseDown={(e) => onDown(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={(e) => onUp(e.clientX)}
        onMouseLeave={(e) => onUp(e.clientX)}
        onTouchStart={(e) => onDown(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={() => onUp(startX.current)}
        className="w-full h-[60vh] md:h-[70vh] overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth no-scrollbar snap-x snap-mandatory cursor-grab"
      >
        {galleryItems.map((item, index) => (
          <div key={index} className="inline-block align-top w-1/3 h-full snap-start mr-[1rem]">
            <NewsItem {...item} className="h-full" />
          </div>
        ))}
      </div>
      {/* optional dots - many items, keep compact */}
      <div className="mt-4 flex justify-center gap-2">
        {galleryItems.slice(0, 8).map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === current ? 'bg-white' : 'bg-white/50'}`}></span>
        ))}
      </div>
    </div>
  )
}
