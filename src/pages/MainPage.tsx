import Layout from "../components/Layout"
import Header from "../components/Header"

export default function MainPage() {
  return (
    <Layout>
      <div className="w-full h-[calc(100vh)] overflow-y-auto scroll-smooth no-scrollbar">
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


        <Container heightRatio={17} bgColor="#FFFFFF">
          <div className="text-[2.5rem] font-[700] text-black mb-[4rem]">Latest News</div>
          <div className="text-[1.5em] font-[700] text-black mb-[4rem]">
            12th OKUCC(OpenFOAM Korea Users’ Community Conference) <br/>
            행사가 9월 18일 ~ 9월 19일 경주 더 케이 호텔에서 열립니다.
          </div>
          <div className="text-[2.5rem] font-[700] text-black mb-[4rem]">Latest News</div>
        </Container>



        <Container heightRatio={17} bgColor="#FFF0FF">
          <Title>Research & Development</Title>
          <SubTitle>
            We have a dedicated research and development team to develop new technologies and products.
          </SubTitle>
          <CardList>
            <Card src="/images/Keys-1.png" title="CFD Research" description="최신 CFD 기술 연구 및 개발을 통한 혁신적인 해석 방법론 구축" />
            <Card src="/images/Keys-2.png" title="AI Development" description="인공지능 기반 CFD 자동화 시스템 개발 및 머신러닝 알고리즘 연구" />
            <Card src="/images/Keys-3.png" title="Digital Twin" description="실시간 모니터링을 위한 디지털 트윈 플랫폼 개발 및 구현" />
            <Card src="/images/Keys-4.png" title="Photogrammetry" description="3D 스캐닝 기술을 활용한 정밀 형상 모델링 및 측정 시스템 개발" />
          </CardList>
        </Container>






        <Container heightRatio={17} bgColor="#F7f4f0">
          <Title>Optimization & Digital Twin</Title>
          <SubTitle>
            Open source/Customized/AI CFD, Optimization, Digital twin, Photogrammetry<br />
            NEXTFOAM is uniquely positioned to solve your engineering challenges.
          </SubTitle>
          <Button>
            EXPLORE →
          </Button>
        </Container>

        <Container heightRatio={17} bgColor="#f0f9f8">
          <Title>Optimization & Digital Twin</Title>
          <SubTitle>
            Open source/Customized/AI CFD, Optimization, Digital twin, Photogrammetry<br />
            NEXTFOAM is uniquely positioned to solve your engineering challenges.
          </SubTitle>
          <Button>
            EXPLORE →
          </Button>
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