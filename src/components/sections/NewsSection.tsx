import { NewsItem } from '../ui/ImageOverlay'


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

  return (
    <div className={`w-full h-full flex flex-col ${className}`}>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-3">
        {newsItems.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}

        {/* Bottom Row - Small Items */}
      </div>
    </div>
  )
}
