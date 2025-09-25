import React from 'react'
import { NewsItem } from '../ui/ImageOverlay'
import { NewsTitle } from '../ui/Text'

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

  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mt-[3rem] mb-[4rem]">
        <NewsTitle>CFD Gallery</NewsTitle>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-6 grid-rows-4 gap-3">
        {galleryItems.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}

        {/* View More Button */}
        <div className="flex text-[2rem] font-[500] col-span-2 row-span-2 relative group cursor-pointer px-2 py-1 text-black h-[50%] justify-center items-center text-center rounded-sm transition-colors duration-300 ease-in-out hover:bg-black hover:text-white border-1">
          View More 
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center ml-2 filter transition duration-300 group-hover:invert">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
