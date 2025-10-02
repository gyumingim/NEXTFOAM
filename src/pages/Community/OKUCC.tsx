import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images

export default function OKUCCPage() {
    const okuccInfo = {
        title: "OpenFOAM Korea Users' Community Conference",
        description: "OKUCC는 국내 OpenFOAM 사용자들이 정보 및 최신동향 공유, 기술 교류, 네트워킹 등을 목적으로 1년에 한번 진행하는 컨퍼런스입니다.",
        purpose: "OpenFOAM에 관심이 있거나 사용하고 있는 연구원, 엔지니어, 교수, 학생들이 참여하여, 이틀간 OpenFOAM에 관련된 주제와 응용 분야에 대해 다양한 발표와 토론이 이루어집니다."
    }

    const conferences = [
        {
            year: "2025",
            edition: "12th",
            venue: "경주 더 케이 호텔",
            date: "2025.09.18 ~ 19",
            presentations: [
                "오픈 소스를 이용한 CFD Workflow 혁신, 넥스트폼 김병윤",
                "미기상/CFD 모델을 활용한 대기환경모델링 연구, 서울시립대학교, 박승부",
                "고성능 데이터센터 대상 AI 자율운전을 위한 CFD 기반 시뮬레이터 구축, 오토시맨틱스, 박정규",
                "화학물질 취급 공정 환기 평가, 한국산업안전보건공단, 김규완",
                "KIMM Cyberlab 개발 방향, 한국기계연구원, 이충성",
                "OpenFOAM을 위한 책상용 베어울프 2-PC 클러스터 구축, 원자력 연구원, 김종태",
                "드론용 프로펠러 설계와 개발을 위한 OpenFOAM 활용 방안과 기술 협력 방안 제안, 니나노컴퍼니, 김건홍",
                "NASA ROBIN Helicopter simulation using OpenFOAM, 넥스트폼, 이보성",
                "BARAM, Inspiration through Insights!, 넥스트폼, 윤정구",
                "rhoPimpleFoam 기반 열플라즈마토치해석, 한국재료연구원, 전병륜",
                "슈퍼컴퓨터의 재정의: AWS 클라우드 기반의 고성능 컴퓨팅 환경, AWS, 조상만",
                "SW 교육의 새로운 기준, 버추얼클래스: AI, CAE, CAD를 위한 최적의 클라우드 실습 환경, 소프트웨이즈, 장재환"
            ]
        },
        {
            year: "2024",
            edition: "11th",
            venue: "호텔 ICC 대전",
            date: "2024.09.26 ~ 27",
            presentations: [
                "적합직교분해를 이용한 고속열차 전두부 형상최적설계 및 공력성능 향상기술 연구, 넥스트폼 이웅현",
                "The modeling of rising bubble pair using adaptive mesh refinement, 부산대학교 정유신",
                "대기오염 확산 시뮬레이션 SaaS 개발 및 실증, 넥스트폼 김현식",
                "buoyantBoussinesqSimpleFoam 기반 위상최적화 연구, 부산대학교 양재성",
                "LX디지털트윈 플랫폼 소개, 한국국토정보공사 이용국",
                "BARAM, 돌풍 조심하세요, 넥스트폼 김동규",
                "개수로 흐름에 대한 부력 수정 난류 모형의 적용성 검토, 한국건설기술연구원 이두한",
                "Surface film model을 이용한 강판의 냉각 모델 기초 연구, 서울대학교 이원강",
                "템플릿 메타 프로그램밍의 이해, 선박해양플랜트연구소 연성모",
                "PIMPLE 알고리즘 기반 프로펠러 설계 프로세스에 대한 고찰 : 실패 사례와 극복 방안, 니나노컴퍼니 김건홍",
                "High Performance Computing for CFD, 넥스트폼 이보성",
                "Cut-Cell 기반 격자생성 기술 개발 현황, 한국원자력연구원 김종태",
                "OpenFOAM의 overset 라이브러리, sugar++, 동아대학교 김찬우",
                "Foam-extend와 AADO 기술을 이용한 축류 송풍기 설계 최적화, 피도텍 이형진"
            ]
        },
        {
            year: "2023",
            edition: "10th",
            venue: "부산 누리마루 APEC 하우스",
            date: "2023.10.19 ~ 20",
            presentations: [
                "Keynote, 수리학 분야에서 OpenFOAM 활용과 전망, 한국건설기술연구원 이두한 연구위원",
                "Keynote, 조선해양 분야의 OpenFOAM활용 사례 및 코드 개발 과정, 동아대학교 이상봉 교수",
                "Foam-extend를 이용한 가스터빈 유동해석, 한국항공우주연구원 강승환",
                "CFD Simulation of Marine Propeller Cavitaion Using Compressible and Incompressible Flow Solvers, 한국해양대학교 Ng'aru Joseph Mwangi",
                "OpenFOAM의 중첩격자 라이브러리에 대한 분석, 동아대학교 김찬우",
                "Suspension plasma spray의 열역학적 해석, 그린리소스 김영기",
                "ParaView를 활용한 CFD 후처리 기법, 넥스트폼 김태우",
                "OpenFOAM을 이용한 파랑 중 선박의 부가저항 수치해석, 해양대학교 서성욱",
                "현대중공업 선박해양연구소의 OpenFOAM을 이용한 선박 성능 해석 – 현재와 미래, 현대중공업 김건홍",
                "OpenFOAM 솔버 수렴 특성, 한국원자력연구원 김종태",
                "고속 유동 해석을 위한 압력 기반의 해석자 소개, 넥스트폼 김태우",
                "Turbulent Inflow Profile for Numerical Wind Tunnel, 넥스트폼 신재렬",
                "LTS 기법을 이용한 선박의 저항 및 항주자세 수치계산 시간 단축, 넥스트폼 정광열",
                "Blender 3D를 활용한 CAD/Surface Mesh Repair, 삼성중공업 연성모",
                "동적 환경변수 관리 도구를 활용한 OpenFOAM 사용환경 구축 및 OpenFOAM 개발을 위한 IDE 환경 구축, 삼성중공업 연성모",
                "오픈폼을 이용한 120W급 동축반전팬의 유동해석, 전자부품연구원 이명성",
                "interFoam을 활용한 용암유동 전산해석, 충북대학교 황규관"
            ]
        },
        {
            year: "2015",
            edition: "4th",
            venue: "호텔 ICC 대전",
            date: "2015.9.10~11",
            presentations: [
                "Keynote, OpenFOAM 솔버의 문제점 및 해결 방안, 넥스트폼 길재흥",
                "Keynote, 공기역학 해석을 위한 OpenFOAM 활용, 부산대학교 오세종",
                "Keynote, OpenFOAM을 활용한 산업용 연소기 해석 연구 현황, 포항공과대학교 허강열",
                "선박 및 추진기의 SnappyHexMesh를 이용한 자동격자 생성 및 계산, 해양대학교 박선호",
                "로터 후류 효과를 고려한 헬리콥터 동체의 착빙 형상 예측, 부산대학교 손찬규",
                "OpenFOAM Analysis of CANDU-6 Moderator Circulation, 군산대학교 장세명",
                "OpenFOAM 응용 변압기 해석 사례, 효성 팽진기",
                "OpenFOAM 사용자 환경 개발 아이디어, 경원이앤씨 김군홍",
                "Web 환경을 통한 OpenFOAM 구동, 넥스트폼 노현석",
                "넥스트폼 OpenFOAM 활용 사례, 넥스트폼 김병윤"
            ]
        },
        {
            year: "2014",
            edition: "3rd",
            venue: "부산 노보텔 앰버서더 호텔",
            date: "2014.9.18",
            presentations: [
                "OpenFOAM을 활용한 전산 수치 해석 자동화 프로그램 개발과 응용, 현대중공업 김건홍",
                "넥스트폼의 오픈폼 활용 사례, 넥스트폼 김병윤",
                "Improvement of a legacy CFD code by OpenFOAM, 한국원자력연구원 김종태",
                "로터 공력해석을 위한 Actuator Model 개발, 부산대학교 김태우",
                "Multi-Scale Integrated Fuel Cell Model Using OpenFOAM, 세메스 최해원",
                "OpenFOAM을 이용한 동네 예보 기반 공기중 축산 바이러스 확산 예보 시스템 개발, 넥스트폼 노현석"
            ]
        },
        {
            year: "2013",
            edition: "2nd",
            venue: "서울대 호암교수회관",
            date: "2013.10.24",
            presentations: [
                "왕복식 (reciprocating) 펌프 캐비테이션 예측을 위한 오픈폼 솔버 개발, 넥스트폼 김병윤",
                "도장공장 환기 설계용 CFD 시뮬레이터 개발, 대우조선해양 고영호",
                "로터 및 외부유동 해석을 위한 오픈폼 솔버의 수정과 사용, 부산대학교 김태우",
                "OpenFOAM을 이용한 항공기 공력해석 프로그램 ISAAC 개발, 한국항공우주산업 신훈범",
                "Application of OpenFOAM to Prediction of Hull Resistance, 현대중공업 이상봉",
                "LU-SGS 수치기법을 적용한 OpenFOAM 기반의 압축성 코드 개발 및 검증, 서울대학교 김정현"
            ]
        },
        {
            year: "2012",
            edition: "1st",
            venue: "과학기술정보연구원",
            date: "2012.10.18",
            presentations: [
                "OpenFOAM 표준 해석자 알고리즘 변경을 통한 Actuator Disk Model 기반의 로터 해석자 개발, 부산대학교 김태우",
                "도장 건조 예측을 위한 전산유체역학 시뮬레이터 개발, 대우조선해양 심도식",
                "Incompressible and Compressible Flows with Cavitation, 서울대학교 박선호",
                "공개SW 라이선스 이해와 관리, 공개SW역량프라자 박준석"
            ]
        }
    ]

    const stats = [
        { label: "총 컨퍼런스", value: "12", unit: "회" },
        { label: "참여자", value: "1,000+", unit: "명" },
        { label: "발표", value: "200+", unit: "개" },
        { label: "기관", value: "50+", unit: "개" }
    ]

    const benefits = [
        {
            title: "기술 교류",
            description: "OpenFOAM 최신 기술과 응용 사례 공유",
            icon: "🤝"
        },
        {
            title: "네트워킹",
            description: "산업계, 학계, 연구기관 간 협력 기회",
            icon: "🌐"
        },
        {
            title: "교육 기회",
            description: "실무 중심의 교육 프로그램과 워크샵",
            icon: "🎓"
        },
        {
            title: "혁신 동향",
            description: "CFD 기술의 미래 방향과 트렌드 파악",
            icon: "🚀"
        }
    ]

    return (
        <Layout>
            <div className="w-full min-h-screen bg-black text-white">
                <Header />
                
                {/* Hero Section - Fixed Title with Scroll Effect */}
                <div className="relative h-screen overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
                    
                    {/* Fixed Title */}
                    <div 
                        className="absolute w-full flex text-center items-center h-full justify-center text-[5rem] font-[800] text-white z-0 pointer-events-none"
                        style={{ 
                            zIndex: 1
                        }}
                    >
                        OKUCC
                    </div>

                    {/* Hero Description */}
                    <div className="absolute w-full flex text-center items-center h-full justify-center mt-[8rem] text-[1.5rem] font-[400] text-gray-300 z-0 pointer-events-none">
                        OpenFOAM Korea Users' Community Conference
                    </div>

                    {/* Scroll Down Animation */}
                    <div className="absolute bottom-[2rem] left-1/2 transform -translate-x-1/2 z-1 pointer-events-none">
                        <div className="flex flex-col items-center space-y-[0.5rem]">
                            <div className="w-[3rem] h-[3rem] border-2 bg-white border-white rounded-full flex items-center justify-center pt-[0.5rem]">
                                <svg 
                                    className="w-[1.5rem] h-[1.5rem] text-black bg-white animate-bounce" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={4} 
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Introduction Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">ABOUT OKUCC</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                OpenFOAM 한국 사용자 컨퍼런스
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                {okuccInfo.description}
                            </p>
                            <p className="text-[1.25rem] text-white font-[600] max-w-[64rem] leading-relaxed">
                                {okuccInfo.purpose}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">CONFERENCE STATS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                컨퍼런스 현황
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-[3rem] font-[800] text-white mb-[0.5rem]">
                                        {stat.value}
                                    </div>
                                    <div className="text-[1rem] text-gray-400 font-[400]">
                                        {stat.label}
                                    </div>
                                    <div className="text-[0.875rem] text-gray-500 font-[400]">
                                        {stat.unit}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">CONFERENCE BENEFITS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                컨퍼런스 혜택
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300 h-full">
                                        <div className="flex items-center mb-[1.5rem]">
                                            <span className="text-[2rem] mr-[1rem]">{benefit.icon}</span>
                                            <h3 className="text-[1.25rem] font-[600] text-white group-hover:text-gray-300 transition-colors">
                                                {benefit.title}
                                            </h3>
                                        </div>
                                        <div className="text-gray-400 text-[0.875rem] font-[400] leading-relaxed">
                                            {benefit.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Conferences Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">CONFERENCE HISTORY</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                컨퍼런스 연혁
                            </h2>
                        </div>
                        
                        <div className="space-y-[4rem]">
                            {conferences.map((conference, index) => (
                                <div key={index} className="border border-gray-800 rounded-lg p-[3rem] hover:border-gray-700 transition-colors duration-300">
                                    {/* Conference Header */}
                                    <div className="mb-[3rem]">
                                        <div className="flex items-center justify-between mb-[1rem]">
                                            <div className="flex items-center">
                                                <span className="text-[2rem] font-[800] text-white mr-[1rem]">
                                                    {conference.year}
                                                </span>
                                                <span className="px-[1rem] py-[0.5rem] bg-gray-800 text-gray-300 text-[0.75rem] rounded">
                                                    {conference.edition} OKUCC
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-[1rem] text-gray-300 font-[600]">
                                                    {conference.venue}
                                                </div>
                                                <div className="text-[0.875rem] text-gray-400">
                                                    {conference.date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Presentations */}
                                    <div>
                                        <h4 className="text-[1.25rem] font-[600] text-white mb-[2rem]">
                                            발표자료 보기
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-[1rem]">
                                            {conference.presentations.map((presentation, presentationIndex) => (
                                                <div key={presentationIndex} className="flex items-start">
                                                    <div className="w-[0.5rem] h-[0.5rem] bg-white rounded-full mt-[0.5rem] mr-[1rem] flex-shrink-0"></div>
                                                    <p className="text-[0.875rem] text-gray-300 leading-relaxed">
                                                        {presentation}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-900 py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto text-center">
                        <div className="mb-[5rem]">
                            <div className="flex items-center justify-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">JOIN COMMUNITY</span>
                                <div className="w-[4rem] h-px bg-white ml-[2rem]"></div>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                커뮤니티에 참여하세요
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] mx-auto">
                                OpenFOAM 사용자들과 함께 기술을 공유하고 혁신을 만들어가세요
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-[2rem]">
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-black bg-white hover:bg-gray-200 transition-colors duration-300">
                                <span className="relative z-10">커뮤니티 참여</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-white border border-gray-600 hover:border-white transition-colors duration-300">
                                <span className="relative z-10">발표자료 다운로드</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}