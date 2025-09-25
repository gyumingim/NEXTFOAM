import Layout from "../components/Layout"
import Header from "../components/Header"
import { Container } from "../components/ui/Container"
import { GridLayout } from "../components/ui/GridLayout"
import { ImageOverlay } from "../components/ui/ImageOverlay"
import { Button, ActionButton } from "../components/ui/Button"
import { VideoSection, VideoSectionContained } from "../components/ui/VideoSection"
import { NewsSection } from "../components/sections/NewsSection"
import { GallerySection } from "../components/sections/GallerySection"
import {
  DateText,
  MainTitle,
  SectionTitle,
  SubTitle,
  BodyText,
  PartnerTitle,
  LargeWhiteTitle,
  LargeWhiteSubTitle,
  ButtonText
} from "../components/ui/Text"

export default function MainPage() {
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




        <Container heightRatio={0} bgColor="#FFFFFF">
          <SectionTitle>Main Business Area</SectionTitle>
          <GridLayout cols={4} gap="1rem">
            <ImageOverlay 
              src="/images/Business-2.jpg" 
              alt="Aerospace" 
              title="Aerospace" 
              description="항공우주 산업을 위한 고성능 CFD 해석 및 설계 최적화 서비스를 제공합니다. 초음속 유동, 연소 해석, 열전달 분석을 통해 항공기와 우주선의 성능을 극대화하고 안전성을 향상시킵니다. NASA, ESA 등 국제기관과의 협력을 통한 첨단 기술 개발과 실무 경험을 바탕으로 최적의 솔루션을 제시합니다." 
            />
            <ImageOverlay 
              src="/images/Business-2.jpg" 
              alt="Marine" 
              title="Marine" 
              description="해양 엔지니어링 분야의 유체역학 해석 및 선박 설계 지원을 전문으로 합니다. 선박 저항, 추진 효율, 파랑 하중 해석을 통해 연료 소비를 최소화하고 운항 안정성을 극대화합니다. 컨테이너선부터 유조선, 해양 구조물까지 다양한 해양 산업 분야의 엔지니어링 과제를 해결하여 친환경적이고 경제적인 해상 운송을 실현합니다." 
            />
            <ImageOverlay 
              src="/images/Business-2.jpg" 
              alt="Automotive" 
              title="Automotive" 
              description="자동차 산업의 공기역학 해석 및 연비 최적화 솔루션을 제공합니다. 차량 주변 유동장 분석, 실내 공조 시스템 설계, 엔진 냉각 시스템 최적화를 통해 연비 개선과 승차감 향상을 동시에 실현합니다. 전기차 배터리 열관리부터 수소차 연료 전지 시스템까지 미래 모빌리티 기술의 핵심 엔지니어링을 지원합니다." 
            />
            <ImageOverlay 
              src="/images/Business-2.jpg" 
              alt="Electronics" 
              title="Electronics" 
              description="전자제품의 열관리 및 냉각 시스템 설계 및 해석을 전문으로 합니다. 반도체, 디스플레이, 통신 장비의 열적 특성 분석을 통해 성능 저하를 방지하고 수명을 연장합니다. 자연 대류부터 강제 대류, 복합 열전달 해석까지 다양한 열관리 기법을 활용하여 컴팩트하고 효율적인 전자 시스템 설계를 지원합니다." 
            />
          </GridLayout>
        </Container>


        <Container heightRatio={20} bgColor="#ffffff" fullBleed>
          <div className="relative w-full h-full">
            <img src="/images/Main-2.png" alt="Optimization" className="w-full h-full object-cover" />
            {/* 왼쪽 가독성 향상을 위한 그라데이션 오버레이 */}
            <div className="absolute left-0 top-0 h-full w-3/5 z-10 bg-gradient-to-r from-black/90 via-black/70 to-transparent pointer-events-none" />
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


        <Container heightRatio={17} bgColor="#FFFFFF">
          <SectionTitle>Our Key Technologies</SectionTitle>
          <GridLayout cols={4} gap="1rem">
            <ImageOverlay 
              src="/images/Keys-1.png" 
              alt="Open Source CFD" 
              title="Open Source CFD" 
              description="OpenFOAM 기반의 오픈소스 CFD 솔버를 활용한 고성능 유체역학 해석 서비스를 제공합니다. 복잡한 기하학적 구조와 다양한 유동 조건에서 정확하고 신뢰할 수 있는 해석 결과를 도출합니다. 메시 생성부터 후처리까지 전체 CFD 워크플로우를 최적화하여 연구 개발 시간을 단축하고 비용을 절감합니다." 
            />
            <ImageOverlay 
              src="/images/Keys-2.png" 
              alt="AI Integration" 
              title="AI Integration" 
              description="인공지능과 머신러닝 기술을 활용한 CFD 해석 자동화 및 최적화 솔루션을 개발합니다. 딥러닝 기반 메시 생성, 신경망을 이용한 유동 예측, 강화학습을 통한 설계 최적화 등 차세대 AI-CFD 융합 기술을 통해 전통적인 엔지니어링 프로세스를 혁신하고 있습니다." 
            />
            <ImageOverlay 
              src="/images/Keys-3.png" 
              alt="Digital Twin" 
              title="Digital Twin" 
              description="실시간 데이터 연동을 통한 디지털 트윈 구현으로 물리적 시스템의 가상 복제본을 생성합니다. IoT 센서 데이터와 CFD 시뮬레이션을 결합하여 실시간 성능 모니터링, 예측적 유지보수, 가상 시나리오 테스트가 가능한 스마트 시스템을 구축합니다. 제조업부터 에너지, 건설까지 다양한 산업 분야에 적용됩니다." 
            />
            <ImageOverlay 
              src="/images/Keys-4.png" 
              alt="Photogrammetry" 
              title="Photogrammetry" 
              description="3D 스캐닝 및 포토그래메트리 기술을 활용한 정밀한 형상 모델링 서비스를 제공합니다. 드론 촬영, 레이저 스캐닝, 구조광 스캐닝 등 다양한 3D 데이터 수집 기술을 통해 복잡한 구조물의 디지털 복원이 가능합니다. CFD 해석을 위한 정확한 기하학적 모델 생성과 VR/AR 콘텐츠 제작을 지원합니다." 
            />
          </GridLayout>
        </Container>


        <Container heightRatio={-30} bgColor="#FFFFFF">
          <div className="w-full h-full flex">
            {/* Left Column - Text Content */}
            <div className="flex-1 flex flex-col">
              <DateText>2025.09.23</DateText>
              <MainTitle>Latest News</MainTitle>
              <SubTitle>CFD Conference</SubTitle>
              <BodyText>
                12th OKUCC(OpenFOAM Korea Users' Community Conference) 행사가 9월 18일 ~ 9월 19일 경주 더 케이 호텔에서 열립니다.
              </BodyText>
              <ActionButton
                icon={
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                }
              >
                Browse Conference Archive
              </ActionButton>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative">
              <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img src="/images/OKUCC.png" alt="CFD Conference" className="w-full h-full object-contain" />
                {/* Download Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>


        <Container heightRatio={-20} bgColor="#FFFFFF">
          <NewsSection />
        </Container>


        <Container heightRatio={-25} bgColor="#000000">
          <VideoSectionContained
            videoSrc="/video/Main-2.mp4"
            title="Optimization & Digital Twin"
            subtitle="Open source/Customized/AI CFD, Optimization, Digital twin, Photogrammetry<br />NEXTFOAM is uniquely positioned to solve your engineering challenges."
            buttonText="EXPLORE →"
          />
        </Container>


        <Container heightRatio={-15} bgColor="#F9F9F9">
          <GallerySection />
        </Container>


        <Container heightRatio={110} bgColor="#FFFFFF">
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
    import.meta.glob('../assets/*', { eager: true, as: 'url' })
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