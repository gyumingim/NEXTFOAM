import React from 'react'
import { NewsItem } from '../ui/ImageOverlay'
import { GridLayout } from '../ui/GridLayout'
import { NewsTitle } from '../ui/Text'

interface NewsSectionProps {
  className?: string
}

export function NewsSection({ className = "" }: NewsSectionProps) {
  const newsItems = [
    {
      src: "/images/Keys-1.png",
      alt: "Featured News",
      title: "NASA Selects Blue Origin to Deliver VIPER Rover to Moon's South Pole",
      category: "NEWS RELEASE",
      readTime: "4 MIN READ",
      size: 'large' as const
    },
    {
      src: "/images/Keys-2.png",
      alt: "News",
      title: "Hubble Images Celestial Cigar's Smoldering Heart",
      category: "ARTICLE",
      readTime: "2 MIN READ",
      size: 'medium' as const
    },
    {
      src: "/images/Keys-3.png",
      alt: "News",
      title: "NASA's Deep Space Communications Demo Exceeds Expectations",
      category: "ARTICLE",
      readTime: "5 MIN READ",
      size: 'medium' as const
    },
    {
      src: "/images/Keys-4.png",
      alt: "News",
      title: "NASA's Chandra Finds Black Hole With Tremendous Growth",
      category: "ARTICLE",
      readTime: "6 MIN READ",
      size: 'medium' as const
    }
  ]

  const smallItems = [
    { src: "/images/Keys-1.png", title: "Building a Lunar Network: Johnson Tests Wireless Technologies", time: "2 MIN READ", category: "ARTICLE" },
    { src: "/images/Keys-2.png", title: "NASA's Parker Solar Probe Sails Through 25th Sun Flyby", time: "2 MIN READ", category: "BLOG" },
    { src: "/images/Keys-3.png", title: "NASA's Hubble Sees White Dwarf Eating Piece of Pluto-Like Object", time: "5 MIN READ", category: "ARTICLE" },
    { src: "/images/Keys-4.png", title: "What's Up: September 2025 Skywatching Tips from NASA", time: "3 MIN READ", category: "ARTICLE" }
  ]

  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mt-[0rem] mb-[4rem]">
        <NewsTitle>News & Events</NewsTitle>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-3">
        {newsItems.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}

        {/* Bottom Row - Small Items */}
        <div className="col-span-4 row-span-1 grid grid-cols-4 gap-3 mt-[4rem]">
          {smallItems.map((item, index) => (
            <div key={index} className="flex gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden flex-shrink-0 relative">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0px_40px_rgba(0,0,0,0.1)]"></div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <span className="text-gray-600 text-xs mb-1">{item.time}</span>
                <h5 className="text-black text-xs font-bold leading-tight mb-1">{item.title}</h5>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-500 text-xs">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
