import Layout from "../components/Layout"
import Header from "../components/Header"

export default function MainPage() {
  return (
    <Layout>
      <div className="w-full h-[calc(100vh)] overflow-y-auto scroll-smooth no-scrollbar bg-black">
        <Container heightRatio={20} bgColor="#000000" fullBleed>
          <Header />

          <div className="relative w-full h-full">
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src="/video/11_Kitiashvili_I_SC24_SunHelicityTour%20(1080p%20with%2030fps).mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 h-full flex items-center px-[7rem]">
              <div className="flex flex-col gap-[1rem] max-w-[720px]">
                <Title className="text-white">Computational Fluid Dynamics</Title>
                <SubTitle className="text-white">
                  Open source/Customized/AI CFD, Optimization, Digital twin, Photogrammetry<br />
                NEXTFOAM is uniquely positioned to solve your engineering challenges. 
              </SubTitle>
              <Button>
                EXPLORE →
              </Button>
              </div>
            </div>
          </div>
        </Container>




        <Container heightRatio={0} bgColor="#FFFFFF">
          <div className="text-[2.5rem] font-[700] text-black mb-[4rem]">Main Business Area</div>
          {/* <SubTitle>
            We have done more than 300 consulting projects in the area of aerospace, <br />
          marine, automotive, electronics, power, HVAC and so on…
          </SubTitle> */}
          <CardList>
            <Card src="/images/Business-2.jpg" title="Aerospace" description="항공우주 산업을 위한 고성능 CFD 해석 및 설계 최적화 서비스" />
            <Card src="/images/Business-2.jpg" title="Marine" description="해양 엔지니어링 분야의 유체역학 해석 및 선박 설계 지원" />
            <Card src="/images/Business-2.jpg" title="Automotive" description="자동차 산업의 공기역학 해석 및 연비 최적화 솔루션" />
            <Card src="/images/Business-2.jpg" title="Electronics" description="전자제품의 열관리 및 냉각 시스템 설계 및 해석" />
          </CardList>
        </Container>


        <Container heightRatio={20} bgColor="#ffffff" fullBleed>
          <div className="relative w-full h-full">
            <img src="/images/Main-2.png" alt="Optimization" className="w-full h-full object-cover" />
            {/* 왼쪽 가독성 향상을 위한 그라데이션 오버레이 */}
            <div className="absolute left-0 top-0 h-full w-3/5 z-10 bg-gradient-to-r from-black/90 via-black/70 to-transparent pointer-events-none" />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8">
              <div className="text-white text-[5rem] font-[700] mb-[3.5rem] mt-[10rem] drop-shadow-lg leading-[5rem] ml-[4.5rem]">
                Supercomputers <br/>
                & Wind Tunnels
              </div>
              <div className="text-white text-[1rem] font-normal max-w-4xl leading-relaxed drop-shadow-lg ml-[4.5rem] mb-[2rem]">
                Stay up-to-date on the latest news from NASA–from Earth to the <br />
                Moon, the Solar System and beyond.
              </div>
              <div className="text-white text-[1.5rem] font-[700] w-fit leading-relaxed drop-shadow-lg ml-[4.5rem] border-[0.01rem] border-white rounded-[0.2rem] px-[1rem] py-[0.5rem]">
                Try it now
              </div>
            </div>
          </div>
        </Container>


        <Container heightRatio={17} bgColor="#FFFFFF">
          <div className="text-[2.5rem] font-[700] text-black mb-[4rem]">Our Key Technologies</div>
          <CardList>
            <Card src="/images/Keys-1.png" title="Open Source CFD" description="OpenFOAM 기반의 오픈소스 CFD 솔버를 활용한 유체역학 해석" />
            <Card src="/images/Keys-2.png" title="AI Integration" description="인공지능을 활용한 CFD 해석 자동화 및 최적화" />
            <Card src="/images/Keys-3.png" title="Digital Twin" description="실시간 데이터 연동을 통한 디지털 트윈 구현" />
            <Card src="/images/Keys-4.png" title="Photogrammetry" description="3D 스캐닝 및 포토그래메트리를 활용한 형상 모델링" />
          </CardList>
        </Container>


        <Container heightRatio={-30} bgColor="#FFFFFF">
          <div className="w-full h-full flex">
            {/* Left Column - Text Content */}
            <div className="flex-1 flex flex-col ">
              <div className="text-[0.875rem] font-[600] text-gray-500 uppercase tracking-wide mb-2">
                2025.09.23
              </div>
              <div className="text-[3rem] font-[900] text-black mb-4 leading-tight">
                Latest News
              </div>
              <div className="text-[1.5rem] font-[700] text-black mb-4">
                CFD Conference
              </div>
              <div className="text-[1rem] font-normal text-black mb-6 leading-relaxed w-[90%]">
                12th OKUCC(OpenFOAM Korea Users' Community Conference) 행사가 9월 18일 ~ 9월 19일 경주 더 케이 호텔에서 열립니다.
              </div>
              <div className="flex items-center text-red-500 text-[0.875rem] font-[600] cursor-pointer hover:text-red-600 transition-colors">
                Browse Conference Archive
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
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










        <Container heightRatio={20} bgColor="#FFFFFF">
          <div className="w-full h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mt-[0rem] mb-[4rem]">
              <div className="text-[3rem] font-[700] text-black">News & Events</div>
            </div>

            {/* Main Grid */}
            <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-3">
              {/* Large Featured Item */}
              <div className="col-span-2 row-span-2 relative group cursor-pointer">
                <img src="/images/Keys-1.png" alt="Featured News" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">NEWS RELEASE</span>
                    <span className="text-white/60 text-xs">4 MIN READ</span>
                  </div>
                  <h3 className="text-white text-[1.25rem] font-bold leading-tight">NASA Selects Blue Origin to Deliver VIPER Rover to Moon's South Pole</h3>
                </div>
              </div>

              {/* Medium Item 1 */}
              <div className="col-span-1 row-span-1 relative group cursor-pointer">
                <img src="/images/Keys-2.png" alt="News" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">ARTICLE</span>
                    <span className="text-white/60 text-xs">2 MIN READ</span>
                  </div>
                  <h4 className="text-white text-sm font-bold leading-tight">Hubble Images Celestial Cigar's Smoldering Heart</h4>
                </div>
              </div>

              {/* Medium Item 2 */}
              <div className="col-span-1 row-span-1 relative group cursor-pointer">
                <img src="/images/Keys-3.png" alt="News" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">ARTICLE</span>
                    <span className="text-white/60 text-xs">5 MIN READ</span>
                  </div>
                  <h4 className="text-white text-sm font-bold leading-tight">NASA's Deep Space Communications Demo Exceeds Expectations</h4>
                </div>
              </div>

              {/* Medium Item 3 */}
              <div className="col-span-1 row-span-1 relative group cursor-pointer">
                <img src="/images/Keys-4.png" alt="News" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">ARTICLE</span>
                    <span className="text-white/60 text-xs">6 MIN READ</span>
                  </div>
                  <h4 className="text-white text-sm font-bold leading-tight">NASA's Chandra Finds Black Hole With Tremendous Growth</h4>
                </div>
              </div>

              {/* Bottom Row - Small Items */}
              <div className="col-span-4 row-span-1 grid grid-cols-4 gap-3 mt-[4rem]">
                {[
                  { src: "/images/Keys-1.png", title: "Building a Lunar Network: Johnson Tests Wireless Technologies", time: "2 MIN READ", category: "ARTICLE" },
                  { src: "/images/Keys-2.png", title: "NASA's Parker Solar Probe Sails Through 25th Sun Flyby", time: "2 MIN READ", category: "BLOG" },
                  { src: "/images/Keys-3.png", title: "NASA's Hubble Sees White Dwarf Eating Piece of Pluto-Like Object", time: "5 MIN READ", category: "ARTICLE" },
                  { src: "/images/Keys-4.png", title: "What's Up: September 2025 Skywatching Tips from NASA", time: "3 MIN READ", category: "ARTICLE" }
                ].map((item, index) => (
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
        </Container>










        <Container heightRatio={-25} bgColor="#000000">
          <div className="relative w-full h-full">
            <video className="absolute inset-0 w-full h-full object-contain bg-black" style={{ objectPosition: '100% center' }} autoPlay muted loop playsInline>
              <source src="/video/Main-2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center">
              <div className="flex flex-col gap-[1rem] max-w-[720px]">
                <Title className="text-white">Optimization & Digital Twin</Title>
                <SubTitle className="text-white">
                  Open source/Customized/AI CFD, Optimization, Digital twin, Photogrammetry<br />
            NEXTFOAM is uniquely positioned to solve your engineering challenges. 
          </SubTitle>
          <Button>
            EXPLORE →
          </Button>
              </div>
            </div>
          </div>
        </Container>



        

        <Container heightRatio={20} bgColor="#F9F9F9">
          <div className="w-full h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mt-24 mb-[4rem]">
              <div className="text-[3rem] font-[700] text-black">CFD Gallery</div>
            </div>

            {/* Main Grid */}
            <div className="flex-1 grid grid-cols-6 grid-rows-4 gap-3">
              {/* Large Featured Item */}
              <div className="col-span-2 row-span-2 relative group cursor-pointer">
                <img src="/images/gallery/1.gif" alt="CFD image" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">CFD</span>
                    <span className="text-white/60 text-xs">Gallery</span>
                  </div>
                  <h3 className="text-white text-[1.25rem] font-bold leading-tight">Supersonic forward step</h3>
                </div>
              </div>

              {/* Medium Item 1 */}
              <div className="col-span-2 row-span-2 relative group cursor-pointer">
                <img src="/images/gallery/2.gif" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">CFD</span>
                    <span className="text-white/60 text-xs">Indoor fire</span>
                  </div>
                  <h4 className="text-white text-[1.25rem] font-bold leading-tight">Indoor fire</h4>
                </div>
              </div>

              {/* Medium Item 2 */}
              <div className="col-span-1 row-span-1 relative group cursor-pointer">
                <img src="/images/gallery/3.gif" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">CFD</span>
                    <span className="text-white/60 text-xs">Store separation</span>
                  </div>
                  <h4 className="text-white text-[1.25rem] font-bold leading-tight">Store separation</h4>
                </div>
              </div>

              {/* Medium Item 3 */}
              <div className="col-span-1 row-span-1 relative group cursor-pointer">
                <img src="/images/gallery/4.gif" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">CFD</span>
                    <span className="text-white/60 text-xs">Dam spillway</span>
                  </div>
                  <h4 className="text-white text-[1.25rem] font-bold leading-tight">Dam spillway</h4>
                </div>
              </div>

              {/* Medium Item 3 */}
              <div className="col-span-1 row-span-1 relative group cursor-pointer">
                <img src="/images/gallery/5.gif" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">CFD</span>
                    <span className="text-white/60 text-xs">Dam spillway</span>
                  </div>
                  <h4 className="text-white text-[1.25rem] font-bold leading-tight">Dam spillway</h4>
                </div>
              </div>

              {/* Medium Item 3 */}
              <div className="col-span-1 row-span-1 relative group cursor-pointer">
                <img src="/images/gallery/6.gif" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">CFD</span>
                    <span className="text-white/60 text-xs">Dam spillway</span>
                  </div>
                  <h4 className="text-white text-[1.25rem] font-bold leading-tight">Dam spillway</h4>
                </div>
              </div>

              {/* Medium Item 3 */}
              <div className="col-span-1 row-span-1 relative group cursor-pointer">
                <img src="/images/gallery/7.gif" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">CFD</span>
                    <span className="text-white/60 text-xs">Dam spillway</span>
                  </div>
                  <h4 className="text-white text-[1.25rem] font-bold leading-tight">Dam spillway</h4>
                </div>
              </div>

              {/* Medium Item 3 */}
              <div className="col-span-1 row-span-1 relative group cursor-pointer">
                <img src="/images/gallery/8.gif" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">CFD</span>
                    <span className="text-white/60 text-xs">Dam spillway</span>
                  </div>
                  <h4 className="text-white text-[1.25rem] font-bold leading-tight">Dam spillway</h4>
                </div>
              </div>

              {/* Medium Item 3 */}
              <div className="col-span-1 row-span-1 relative group cursor-pointer">
                <img src="/images/gallery/9.gif" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">CFD</span>
                    <span className="text-white/60 text-xs">Dam spillway</span>
                  </div>
                  <h4 className="text-white text-[1.25rem] font-bold leading-tight">Dam spillway</h4>
                </div>
              </div>

              {/* Medium Item 3 */}
              <div className="col-span-1 row-span-1 relative group cursor-pointer">
                <img src="/images/gallery/10.gif" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-200%" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">CFD</span>
                    <span className="text-white/60 text-xs">Dam spillway</span>
                  </div>
                  <h4 className="text-white text-[1.25rem] font-bold leading-tight">Dam spillway</h4>
                </div>
              </div>

              <div className=" flex text-[2rem] font-[500] col-span-2 row-span-2 relative group cursor-pointer px-2 py-1 text-black h-[50%] justify-center items-center text-center rounded-sm transition-colors duration-300 ease-in-out hover:bg-black hover:text-white border-1">
                View More 
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center ml-2 filter transition duration-300 group-hover:invert">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

             
            </div>
            
          </div>
        </Container>


        <Container heightRatio={110} bgColor="#FFFFFF">
          <div className="w-full h-full flex flex-col">
            <div className="text-[2.5rem] font-[700] text-black mb-[3rem] mt-[4rem]">Our Partners</div>
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

function CardList({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4 gap-[1rem] w-full">
      {children}
    </div>
  )
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row gap-[1rem]">
      {children}
    </div>
  )
}

function Column({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[1rem] justify-center">
      {children}
    </div>
  )
}

function Card({ src, title, description }: { src: string, title?: string, description?: string }) {
  return (
    <div className="w-full bg-white overflow-hidden relative group cursor-pointer" style={{ aspectRatio: '4/6' }}>
      <img src={src} alt="card" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />

      {/* 기본 텍스트 오버레이와 화살표 */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-12 pt-[200%] w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.45)_20%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.1)_60%,rgba(0,0,0,0)_100%)]">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-[1.75rem] font-[600] drop-shadow-lg">{title}</h3>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* 호버 시 설명 텍스트 */}
      {description && (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 pointer-events-none">
          <p className="text-white text-[1.25rem] text-center leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  )
}

function Container({ children, heightRatio = 1, bgColor = "#ffffff", fullBleed = false }: { children: React.ReactNode, heightRatio?: number, bgColor?: string, fullBleed?: boolean }) {
  return (
    <section
      className={"w-full flex flex-col justify-center " + (fullBleed ? "px-0" : "px-[7rem]")}
      style={{ minHeight: `${100 + heightRatio}vh`, height: `${100 + heightRatio}vh`, backgroundColor: bgColor }}
    >
      {children}
    </section>
  )
}

function Title({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={"text-black text-[3rem] font-black " + className}>
      {children}
    </div>
  )
}

function SubTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={"text-black text-[1.125rem] font-normal " + className}>
      {children}
    </div>
  )
}


function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white text-[.875rem] mt-[2rem] py-[0.5rem] px-[1rem] border-[0.01rem] border-white rounded-[0.2rem] w-fit">
      {children}
    </div>
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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