import Layout from "../components/Layout"
import Header from "../components/Header"
import { useEffect, useRef, useState } from "react"
import { Container } from "../components/ui/Container"
import { ImageOverlay } from "../components/ui/ImageOverlay"
import { VideoSection, VideoSectionContained } from "../components/ui/VideoSection"
import { NewsSection } from "../components/sections/NewsSection"
import { GallerySection } from "../components/sections/GallerySection"
import {
  MainTitle,
  SubTitle,
  BodyText,
  PartnerTitle,
  LargeWhiteTitle,
  LargeWhiteSubTitle,
  ButtonText
} from "../components/ui/Text"

export default function MainPage() {
  // Carousel state for Main Business Area
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const totalSlides = 4

  // Tech carousel (Our Key Technology) state
  const [techCurrentIndex, setTechCurrentIndex] = useState<number>(0)
  const techTotalSlides = 4

  // Auto-slide effect for tech section
  useEffect(() => {
    const interval = setInterval(() => {
      setTechCurrentIndex((prev) => (prev + 1) % techTotalSlides)
    }, 4000) // 4초마다 자동 슬라이드

    return () => clearInterval(interval)
  }, [techTotalSlides])

  const scrollByViewport = (dir: number) => {
    const node = carouselRef.current
    if (!node) return
    const slideWidth = node.clientWidth * 0.8
    const maxScroll = node.scrollWidth - node.clientWidth
    const target = Math.max(0, Math.min(node.scrollLeft + slideWidth * dir, maxScroll))
    node.scrollTo({ left: target, behavior: 'smooth' })
  }

  const onScroll = () => {
    const node = carouselRef.current
    if (!node) return
    const slideWidth = node.clientWidth * 0.8
    const maxScroll = node.scrollWidth - node.clientWidth
    // If near the end, force last index to avoid rounding issues
    if (maxScroll > 0 && maxScroll - node.scrollLeft < slideWidth * 0.3) {
      if (currentIndex !== totalSlides - 1) setCurrentIndex(totalSlides - 1)
      return
    }
    const idx = Math.floor((node.scrollLeft + slideWidth * 0.5) / slideWidth)
    if (idx !== currentIndex) setCurrentIndex(Math.min(Math.max(idx, 0), totalSlides - 1))
  }

  // Drag-to-scroll support
  const isDraggingRef = useRef<boolean>(false)
  const startXRef = useRef<number>(0)
  const startScrollRef = useRef<number>(0)
  const dragMovedRef = useRef<boolean>(false)

  const onPointerDown = (clientX: number) => {
    const node = carouselRef.current
    if (!node) return
    isDraggingRef.current = true
    dragMovedRef.current = false
    startXRef.current = clientX
    startScrollRef.current = node.scrollLeft
    node.classList.add('cursor-grabbing')
  }

  const onPointerMove = (clientX: number) => {
    const node = carouselRef.current
    if (!node || !isDraggingRef.current) return
    const delta = clientX - startXRef.current
    if (Math.abs(delta) > 5) dragMovedRef.current = true
    node.scrollLeft = startScrollRef.current - delta
  }

  const snapToNearest = () => {
    const node = carouselRef.current
    if (!node) return
    const slideWidth = node.clientWidth * 0.8
    const maxScroll = node.scrollWidth - node.clientWidth
    const idx = Math.floor((node.scrollLeft + slideWidth * 0.5) / slideWidth)
    const target = Math.max(0, Math.min(idx * slideWidth, maxScroll))
    node.scrollTo({ left: target, behavior: 'smooth' })
  }

  const onPointerUp = (clientX: number) => {
    const node = carouselRef.current
    if (!node) return
    if (!isDraggingRef.current) return
    const delta = clientX - startXRef.current
    isDraggingRef.current = false
    node.classList.remove('cursor-grabbing')
    const threshold = node.clientWidth * 0.15 // 15% 스와이프 임계치
    if (Math.abs(delta) > threshold) {
      scrollByViewport(delta < 0 ? 1 : -1)
    } else {
      snapToNearest()
    }
  }


  return (
    <Layout>
      <div className="w-full h-[calc(100vh)] overflow-y-auto scroll-smooth no-scrollbar bg-black">
        <Container heightRatio={20} bgColor="#000000" fullBleed>
          <Header />
          <VideoSection
            videoSrc="/video/11_Kitiashvili_I_SC24_SunHelicityTour%20(1080p%20with%2030fps).mp4"
            title="Computational Fluid Dynamics"
            subtitle="Open source/Customized/AI CFD, Optimization, Digital twin, Photogrammetry<br />NEXTFOAM is uniquely positioned to solve your engineering challenges."
            buttonText="EXPLORE →"
          />
        </Container>




        <Container heightRatio={30} bgColor="#000000" fullBleed={true}>
          <div className="relative">
            <div
              ref={carouselRef}
              onScroll={onScroll}
              onMouseDown={(e) => onPointerDown(e.clientX)}
              onMouseMove={(e) => onPointerMove(e.clientX)}
              onMouseUp={(e) => onPointerUp(e.clientX)}
              onMouseLeave={(e) => onPointerUp(e.clientX)}
              onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
              onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
              onTouchEnd={() => onPointerUp(startXRef.current)}
              onClick={(e) => {
                const node = carouselRef.current
                if (!node) return
                if (dragMovedRef.current) return
                const x = e.clientX
                const w = node.clientWidth
                if (x > w * 0.6) scrollByViewport(1)
                else if (x < w * 0.4) scrollByViewport(-1)
                else snapToNearest()
              }}
              className="w-full h-[120%] overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth no-scrollbar snap-x snap-mandatory pr-[20%] cursor-grab"
            >
              <div className="inline-block align-top w-[80%] h-full snap-start mr-[2rem]">
                <ImageOverlay 
                  src="/images/Business-2.jpg" 
                  alt="Aerospace" 
                  title="Aerospace" 
                  description="항공우주 산업을 위한 고성능 CFD 해석 및 설계 최적화 서비스를 제공합니다. " 
                  aspectRatio="16/9"
                  className="h-full"
                />
              </div>
              <div className="inline-block align-top w-[80%] h-full snap-start mr-[2rem]">
                <ImageOverlay 
                  src="/images/Business-2.jpg" 
                  alt="Marine" 
                  title="Marine" 
                  description="해양 엔지니어링 분야의 유체역학 해석 및 선박 설계 지원을 전문으로 합니다. " 
                  aspectRatio="16/9"
                  className="h-full"
                />
              </div>
              <div className="inline-block align-top w-[80%] h-full snap-start mr-[2rem]">
                <ImageOverlay 
                  src="/images/Business-2.jpg" 
                  alt="Automotive" 
                  title="Automotive" 
                  description="자동차 산업의 공기역학 해석 및 연비 최적화 솔루션을 제공합니다." 
                  aspectRatio="16/9"
                  className="h-full"
                />
              </div>
              <div className="inline-block align-top w-[80%] h-full snap-start">
                <ImageOverlay 
                  src="/images/Business-2.jpg" 
                  alt="Electronics" 
                  title="Electronics" 
                  description="전자제품의 열관리 및 냉각 시스템 설계 및 해석을 전문으로 합니다." 
                  aspectRatio="16/9"
                  className="h-full"
                />
              </div>
            </div>
            {/* Nav Buttons removed as requested */}
            {/* Dots (absolute and pushed slightly below image) */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-9rem] z-20 flex items-center gap-4">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <span
                  key={i}
                  className={`rounded-full transition-all duration-200 drop-shadow-[0_0_6px_rgba(0,0,0,0.35)] ${
                    i === currentIndex
                      ? 'w-4 h-4 bg-white'
                      : 'w-3 h-3 bg-white/80'
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </Container>


        <Container heightRatio={20} bgColor="#000000" fullBleed>
          <div className="relative w-full h-full">
            <img src="/images/Main-2.png" alt="Optimization" className="w-full h-full object-cover" />
            {/* 왼쪽 가독성 향상을 위한 그라데이션 오버레이 */}
            <div className="absolute left-0 top-0 h-full w-3/5 z-10 bg-gradient-to-r from-black/100 via-black/100 to-transparent pointer-events-none" />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8">
              <LargeWhiteTitle>
                Supercomputers <br />
                & Wind Tunnels
              </LargeWhiteTitle>
              <LargeWhiteSubTitle>
                Stay up-to-date on the latest news from NASA–from Earth to the <br />
                Moon, the Solar System and beyond.
              </LargeWhiteSubTitle>
              <ButtonText>
                Try it now
              </ButtonText>
            </div>
          </div>
        </Container>


        <Container heightRatio={17} bgColor="#000000" fullBleed>
          <div className="relative w-full h-full overflow-hidden group">
            {/* Background Images with Parallax Effect */}
            <div className="absolute inset-0">
              <div className={`absolute inset-0 transition-all duration-1500 ease-out ${techCurrentIndex === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                <img 
                  src="/images/Keys-1.png" 
                  alt="Open Source CFD" 
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              </div>
              <div className={`absolute inset-0 transition-all duration-1500 ease-out ${techCurrentIndex === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                <img 
                  src="/images/Keys-2.png" 
                  alt="AI Integration" 
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
              </div>
              <div className={`absolute inset-0 transition-all duration-1500 ease-out ${techCurrentIndex === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                <img 
                  src="/images/Keys-3.png" 
                  alt="Digital Twin" 
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              </div>
              <div className={`absolute inset-0 transition-all duration-1500 ease-out ${techCurrentIndex === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                <img 
                  src="/images/Keys-4.png" 
                  alt="Photogrammetry" 
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
              </div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex items-center">
              <div className="w-full max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* 1st item - Text left */}
                  <div className={`transition-all duration-1500 ease-out ${techCurrentIndex === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h2 className="text-white text-[5rem] font-[300] leading-[0.9] tracking-tight">
                          Open Source
                        </h2>
                        <h3 className="text-white text-[3rem] font-[200] text-white/80">
                          CFD Technology
                        </h3>
                      </div>
                      <p className="text-white/90 text-[1.25rem] leading-relaxed max-w-lg">
                        OpenFOAM 기반의 오픈소스 CFD 솔버를 활용한 고성능 유체역학 해석 서비스를 제공합니다.
                      </p>
                      <div className="grid grid-cols-2 gap-6 pt-8">
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">SOLVER TYPE</div>
                          <div className="text-white text-lg">OpenFOAM</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">PERFORMANCE</div>
                          <div className="text-white text-lg">High Performance</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">COST EFFICIENCY</div>
                          <div className="text-white text-lg">Open Source</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">VALIDATION</div>
                          <div className="text-white text-lg">Industry Standard</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2nd item - Text right */}
                  <div className={`transition-all duration-1500 ease-out ${techCurrentIndex === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="space-y-8 text-right">
                      <div className="space-y-4">
                        <h2 className="text-white text-[5rem] font-[300] leading-[0.9] tracking-tight">
                          AI Integration
                        </h2>
                        <h3 className="text-white text-[3rem] font-[200] text-white/80">
                          Machine Learning
                        </h3>
                      </div>
                      <p className="text-white/90 text-[1.25rem] leading-relaxed max-w-lg ml-auto">
                        인공지능과 머신러닝 기술을 활용한 CFD 해석 자동화 및 최적화 솔루션을 개발합니다.
                      </p>
                      <div className="grid grid-cols-2 gap-6 pt-8">
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">AUTOMATION</div>
                          <div className="text-white text-lg">Mesh Generation</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">PREDICTION</div>
                          <div className="text-white text-lg">Result Analysis</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">OPTIMIZATION</div>
                          <div className="text-white text-lg">Parameter Tuning</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">EFFICIENCY</div>
                          <div className="text-white text-lg">Maximized</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3rd item - Text left */}
                  <div className={`transition-all duration-1500 ease-out ${techCurrentIndex === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h2 className="text-white text-[5rem] font-[300] leading-[0.9] tracking-tight">
                          Digital Twin
                        </h2>
                        <h3 className="text-white text-[3rem] font-[200] text-white/80">
                          Real-time Simulation
                        </h3>
                      </div>
                      <p className="text-white/90 text-[1.25rem] leading-relaxed max-w-lg">
                        실시간 데이터 연동을 통한 디지털 트윈 구현으로 물리적 시스템의 가상 복제본을 생성합니다.
                      </p>
                      <div className="grid grid-cols-2 gap-6 pt-8">
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">REAL-TIME</div>
                          <div className="text-white text-lg">Data Sync</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">MONITORING</div>
                          <div className="text-white text-lg">Live Analysis</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">PREDICTION</div>
                          <div className="text-white text-lg">Smart Control</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">VIRTUAL</div>
                          <div className="text-white text-lg">Replica System</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4th item - Text right */}
                  <div className={`transition-all duration-1500 ease-out ${techCurrentIndex === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="space-y-8 text-right">
                      <div className="space-y-4">
                        <h2 className="text-white text-[5rem] font-[300] leading-[0.9] tracking-tight">
                          Photogrammetry
                        </h2>
                        <h3 className="text-white text-[3rem] font-[200] text-white/80">
                          3D Scanning
                        </h3>
                      </div>
                      <p className="text-white/90 text-[1.25rem] leading-relaxed max-w-lg ml-auto">
                        정밀한 형상 모델링을 위한 3D 스캐닝/포토그래메트리 기술을 적용합니다.
                      </p>
                      <div className="grid grid-cols-2 gap-6 pt-8">
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">PRECISION</div>
                          <div className="text-white text-lg">High Accuracy</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">SCANNING</div>
                          <div className="text-white text-lg">3D Technology</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">MODELING</div>
                          <div className="text-white text-lg">Complex Geometry</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-white/60 text-sm font-medium uppercase tracking-wider">QUALITY</div>
                          <div className="text-white text-lg">CFD Ready</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex items-center space-x-8">
                {/* Progress indicators */}
                <div className="flex space-x-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTechCurrentIndex(i)}
                      className={`relative w-12 h-1 rounded-full transition-all duration-500 ${
                        i === techCurrentIndex 
                          ? 'bg-white' 
                          : 'bg-white/30 hover:bg-white/60'
                      }`}
                    >
                      <div 
                        className={`absolute inset-0 bg-white rounded-full transition-all duration-1000 ease-out ${
                          i === techCurrentIndex ? 'w-full' : 'w-0'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                
                {/* Slide counter */}
                <div className="text-white/60 text-sm font-mono">
                  {String(techCurrentIndex + 1).padStart(2, '0')} / 04
                </div>
              </div>
            </div>

            {/* Hover pause indicator */}
            <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white/60 text-xs uppercase tracking-wider">
                Auto-advancing in 4s
              </div>
            </div>
          </div>
        </Container>


        <Container heightRatio={-30} bgColor="#000000">
          <div className="w-full h-full flex">
            {/* Left Column - Text Content */}
            <div className="flex-1 flex flex-col">
              <MainTitle>Latest News</MainTitle>
              <SubTitle>CFD Conference</SubTitle>
              <BodyText>
                12th OKUCC(OpenFOAM Korea Users' Community Conference) 행사가 9월 18일 ~ 9월 19일 경주 더 케이 호텔에서 열립니다.
              </BodyText>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative">
              <div className="relative w-full bg-gray-800 rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img src="/images/OKUCC.png" alt="CFD Conference" className="w-full h-full object-contain" />
                {/* Download Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>


        <Container heightRatio={-40} bgColor="#000000">
          <NewsSection />
        </Container>


        <Container heightRatio={0} bgColor="#000000">
          <VideoSectionContained
            videoSrc="/video/Main-2.mp4"
            title="Optimization & Digital Twin"
            subtitle="Open source/Customized/AI CFD, Optimization, Digital twin, Photogrammetry<br />NEXTFOAM is uniquely positioned to solve your engineering challenges."
            buttonText="EXPLORE →"
          />
        </Container>


        <Container heightRatio={-15} bgColor="#000000">
          <GallerySection />
        </Container>


        <Container heightRatio={110} bgColor="#000000">
          <div className="w-full h-full flex flex-col">
            <PartnerTitle>Our Partners</PartnerTitle>
            <PartnerGrid />
          </div>
        </Container>


        <Container heightRatio={-35} bgColor="#000000">
          <Footer />
        </Container>
      </div>
    </Layout>
  )
}



function PartnerGrid() {
  const urls = Object.values(
    import.meta.glob('../assets/logo/*', { eager: true, query: '?url', import: 'default' })
  ) as string[]

  // react.svg 등 내부 아이콘은 제외하고 고객사 파일만 필터링 (대략적인 필터)
  const filtered = urls.filter((u) => !/react\.svg$/i.test(u))

  return (
    <div className="grid grid-cols-5 gap-8 items-center">
      {filtered.map((url) => {
        const match = decodeURIComponent(url).match(/([^/\\]+)\.(png|jpe?g|svg|webp)$/i)
        const name = match ? match[1] : 'Partner'
        return (
          <div key={url} className="w-full h-20 bg-white rounded-md shadow-sm relative group flex items-center justify-center overflow-hidden">
            <img src={url} alt={name} className="max-h-12 object-contain transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-2 text-center">
              <span className="text-white text-xs font-semibold leading-snug">{name}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Footer() {
  return (
    <div className="w-full py-[4rem] mt-[10rem]">
      <div className="">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Left Column - Brand & Mission */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
            </div>
            <div className="text-[1.5rem] font-bold text-white leading-tight">
              National Computational Fluid Dynamics Company
            </div>
            <div className="text-gray-300 text-sm leading-relaxed">
              NEXTFOAM explores advanced CFD solutions in engineering, innovates for industrial benefit, and inspires the engineering world through cutting-edge technology.
            </div>
            <div className="space-y-2">
              <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">About NEXTFOAM's Mission</a>
              <div className="flex items-center text-white text-sm cursor-pointer hover:text-gray-300 transition-colors">
                Join Us
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center ml-2">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="space-y-4">
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">Home</a>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">News & Events</a>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">Multimedia</a>
              <div className="flex items-center space-x-2">
                <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">NEXTFOAM+</a>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">LIVE</span>
              </div>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">Projects</a>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">CFD Solutions</a>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">Engineering</a>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">The Industry</a>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">The Future</a>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">Research</a>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">Aerospace</a>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">Technology</a>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">Learning Resources</a>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">About NEXTFOAM</a>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">NEXTFOAM 한국어</a>
            </div>
          </div>

          {/* Right Column - Follow & Social */}
          <div className="lg:col-span-1 space-y-6">
            <div className="text-white font-semibold text-lg">Follow NEXTFOAM</div>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">More NEXTFOAM Social Accounts</a>
              <a href="#" className="block text-white text-sm hover:text-gray-300 transition-colors">NEXTFOAM Newsletters</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-wrap gap-6 mb-6">
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Sitemap</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">For Media</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">FOIA</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">No FEAR Act</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Office of the IG</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Budget & Annual Reports</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Agency Financial Reports</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Contact NEXTFOAM</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Accessibility</a>
          </div>
          <div className="space-y-1 text-gray-400 text-sm justify-start flex gap-[2rem]">
            <span>Page Last Updated: Dec 15, 2024</span>
            <span>Page Editor: NEXTFOAM Team</span>
            <span>Responsible NEXTFOAM Official: Engineering Department</span>
          </div>
        </div>
      </div>
    </div>
  )
}