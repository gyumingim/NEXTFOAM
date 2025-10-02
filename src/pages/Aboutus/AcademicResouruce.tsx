import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images

export default function AcademicResourcePage() {
    const publications = [
        {
            year: "2025",
            papers: [
                {
                    title: "적합직교분해를 이용한 대기오염 확산 실시간 시뮬레이션 기술 연구",
                    authors: "김현식 외",
                    conference: "한국전산유체공학회 춘계학술대회",
                    year: "2025"
                }
            ]
        },
        {
            year: "2024",
            papers: [
                {
                    title: "오픈소스를 활용한 화학물질 누출사고 영향 범위 해석",
                    authors: "김현식, 길재흥, 박현강, 유지형",
                    conference: "한국위험물학회 학술대회",
                    year: "2024"
                },
                {
                    title: "이중격자 기법을 사용한 판형-핀 열교환기 CFD 성능 해석",
                    authors: "김현식, 이현웅, 길재흥, 이명성",
                    conference: "한국유체기계학술대회",
                    year: "2024"
                },
                {
                    title: "공개소스 전산유체역학 프로그램 BARAM의 개발방법 및 현황",
                    authors: "김병윤",
                    conference: "한국전산유체공학회 추계학술대회",
                    year: "2024"
                },
                {
                    title: "적합직교분해를 이용한 고속열차 전두부 형상 최적설계 및 공력성능 향상 기술 연구",
                    authors: "이웅현",
                    conference: "한국전산유체공학회 추계학술대회",
                    year: "2024"
                },
                {
                    title: "Two-Layer Realizable k-ε 난류 모델 개발",
                    authors: "길재흥",
                    conference: "한국전산유체공학회 추계학술대회",
                    year: "2024"
                }
            ]
        },
        {
            year: "2023",
            papers: [
                {
                    title: "An Automated Aerodynamic Analysis System in Missile Based on Open-Source Software",
                    authors: "유강국, 하정현, 이상철",
                    conference: "International Journal of Aeronautical and Space Sciences",
                    year: "2023",
                    type: "Journal"
                },
                {
                    title: "Numerical study of reacting flow for bi-propellant thrust",
                    authors: "정황희, 신재렬, 채종원, 이복직",
                    conference: "Asia Joint Conference on Propulsion and Power",
                    year: "2023"
                },
                {
                    title: "적합직교분해 및 인공신경망 기반의 차수축소모델 구성 프레임워크 개발 현황",
                    authors: "이웅현",
                    conference: "공개소스 CFD 연구회 2023 동계 세미나",
                    year: "2023"
                },
                {
                    title: "차수축소모델을 이용한 형상최적설계를 위한 형상 및 격자 변형 방법",
                    authors: "이웅현",
                    conference: "한국전산유체공학회 춘계 학술대회",
                    year: "2023"
                },
                {
                    title: "LM-AUSMPW+ scheme for all-speed on unstructured grid",
                    authors: "경태윤, 김규홍",
                    conference: "한국항공우주학회 춘계학술대회",
                    year: "2023"
                },
                {
                    title: "Development of Automated Aerodynamic Analysis Process Using Open-source Software",
                    authors: "유강국",
                    conference: "18th OpenFOAM Workshop",
                    year: "2023"
                },
                {
                    title: "Development of Web Platform of CFD Analysis Using OpenFOAM and Paraview",
                    authors: "서진원, 최봉근, 박현강, 이현웅",
                    conference: "18th OpenFOAM Workshop",
                    year: "2023"
                }
            ]
        },
        {
            year: "2022",
            papers: [
                {
                    title: "육공복합무인기 형상 모델링 및 유동해석 자동화 프로세스 개발",
                    authors: "이보성, 김민우, 여홍구, 황인성",
                    conference: "항공우주시스템공학회 춘계학술대회",
                    year: "2022"
                },
                {
                    title: "계층적 데이터 포맷(HDF)을 이용한 공력 데이터 베이스 활용성 증대",
                    authors: "최대산, 김성태",
                    conference: "한국항공우주학회 춘계학술대회",
                    year: "2022"
                },
                {
                    title: "유한체적법 기반 공개소프트웨어 OpenFOAM(BARAM)과 무격자 기반 CFD프로그램(FAMUS)의 소개",
                    authors: "김병윤",
                    conference: "한국전산유체공학회 춘계학술대회",
                    year: "2022"
                }
            ]
        },
        {
            year: "2021",
            papers: [
                {
                    title: "유체 운동의 실시간 시뮬레이터 개발을 위한 적합직교분해 및 인공신경망 기반의 차수축소모델 구성 프레임워크 개발",
                    authors: "이웅현",
                    conference: "KOITA",
                    year: "2021"
                },
                {
                    title: "풍력발전단지 구축 효율화를 위한 OpenFOAM 활용 대규모 유동해석 연구",
                    authors: "김병윤",
                    conference: "한국과학기술정보연구원",
                    year: "2021"
                }
            ]
        },
        {
            year: "2020",
            papers: [
                {
                    title: "영상추적 Software 개발",
                    authors: "김병윤",
                    conference: "경인테크",
                    year: "2020"
                },
                {
                    title: "EDISON 연구커뮤니티 활성화를 위한 오픈소스 계산 소프트웨어 OpenFOAM 설치 및 등록",
                    authors: "김병윤",
                    conference: "한국과학기술정보연구원",
                    year: "2020"
                }
            ]
        },
        {
            year: "2019",
            papers: [
                {
                    title: "KIMM-Flow 해석 모듈 추가 및 GUI 수정",
                    authors: "김병윤",
                    conference: "한국기계연구원",
                    year: "2019"
                },
                {
                    title: "열교환기 CFD 열유동해석 연구용역",
                    authors: "김병윤",
                    conference: "포항산업과학연구원",
                    year: "2019"
                },
                {
                    title: "OpenFOAM 기반의 CFD 프로그램 개발",
                    authors: "김병윤",
                    conference: "한국기계연구원",
                    year: "2019"
                }
            ]
        },
        {
            year: "2018",
            papers: [
                {
                    title: "무격자 방식의 전산유체역학 해석 소프트웨어 개발 연구",
                    authors: "김병윤",
                    conference: "민군협력진흥원",
                    year: "2018"
                },
                {
                    title: "OpenFOAM의 슈퍼컴퓨터 활용을 위한 성능최적화, 솔버 개선 및 사용자환경 개발",
                    authors: "김병윤",
                    conference: "한국과학기술정보연구원",
                    year: "2018"
                }
            ]
        },
        {
            year: "2017",
            papers: [
                {
                    title: "다차원 수소연소 해석 GUI 개발",
                    authors: "김병윤",
                    conference: "한국원자력연구원",
                    year: "2017"
                },
                {
                    title: "격납건물 해석을 위한 난류 벽함수 및 수치알고리즘 개선",
                    authors: "김병윤",
                    conference: "한국원자력연구원",
                    year: "2017"
                }
            ]
        },
        {
            year: "2016",
            papers: [
                {
                    title: "Circuit Breaker 용 OpenFOAM 프로그램 개발",
                    authors: "김병윤",
                    conference: "한국전기연구원",
                    year: "2016"
                },
                {
                    title: "PPS 열유동 해석",
                    authors: "김병윤",
                    conference: "현대중공업",
                    year: "2016"
                }
            ]
        },
        {
            year: "2015",
            papers: [
                {
                    title: "공개소스 전산유체역학 라이브러리의 HPC 활용을 위한 웹 기반 UI 플랫폼 개발",
                    authors: "김병윤",
                    conference: "NIPA",
                    year: "2015"
                },
                {
                    title: "제품 공정 맞춤형 설계 자동화 시스템 개발",
                    authors: "김병윤",
                    conference: "한국과학기술정보연구원",
                    year: "2015"
                }
            ]
        },
        {
            year: "2014",
            papers: [
                {
                    title: "Web-based forecasting system for the airborne spread of livestock infectious disease using computational fluid dynamics",
                    authors: "서일환, 이인복, 홍세원, 노현석, 박주현",
                    conference: "Biosystems Engineering",
                    year: "2014",
                    type: "Journal"
                },
                {
                    title: "Numerical Multi-scale Analysis of Turbulent Flow Around Low-speed Ship with Energy Saving Pre-swirl Stator",
                    authors: "박선호, 오광호",
                    conference: "ISOPE",
                    year: "2014"
                }
            ]
        },
        {
            year: "2013",
            papers: [
                {
                    title: "오픈소스(OpenFOAM)에 기반한 공력해석 전용 프로그램(ISAAC) 개발 – 전/후처리와 사용자 환경",
                    authors: "김병윤, 길재흥, 신훈범",
                    conference: "한국항공우주학회 추계학술대회",
                    year: "2013"
                },
                {
                    title: "Development and Validation of a Density-Based Implicit Solver Using LG-SGS Algorithm",
                    authors: "길재흥, 김병윤, 김지홍, 신훈범, 정성기, 김규홍",
                    conference: "OFW8",
                    year: "2013"
                }
            ]
        },
        {
            year: "2012",
            papers: [
                {
                    title: "오픈소스 CFD 코드 오픈폼(OpenFOAM)을 이용한 가스터빈엔진 노즐-터빈 유동 해석",
                    authors: "김병윤, 김병휘, 길재흥",
                    conference: "한국전산유체공학회 춘계학술대회",
                    year: "2012"
                },
                {
                    title: "Development and Validation of Computational Wind Field Model(Wind scape)",
                    authors: "김동현, 김병윤",
                    conference: "4th Asian Joint Workshop on Thermophysics and Fluid Science",
                    year: "2012"
                }
            ]
        },
        {
            year: "2011",
            papers: [
                {
                    title: "OpenFOAM을 이용한 댐 여수로의 3차원 수치모의 적용성 검토",
                    authors: "박병준, 김병윤, 정요한, 김민균",
                    conference: "대한토목학회 추계학술대회",
                    year: "2011"
                },
                {
                    title: "오픈 소스 CFD 코드를 이용한 차세대 고속열차 공력 해석",
                    authors: "김병윤, 길재흥, 권혁빈",
                    conference: "한국전산유체공학회 춘계학술대회",
                    year: "2011"
                }
            ]
        }
    ]

    const stats = [
        { label: "총 논문", value: "130+", unit: "편" },
        { label: "국제 저널", value: "15+", unit: "편" },
        { label: "학술대회", value: "100+", unit: "편" },
        { label: "연구 기간", value: "15", unit: "년" }
    ]

    const researchAreas = [
        { area: "CFD 솔버 개발", icon: "⚙️", description: "OpenFOAM 기반 BARAM, FAMUS 솔버 개발" },
        { area: "자동화 시스템", icon: "🤖", description: "공력해석 자동화 및 웹 플랫폼 개발" },
        { area: "차수축소모델", icon: "📊", description: "POD 및 인공신경망 기반 ROM 개발" },
        { area: "다물리 해석", icon: "🌊", description: "열유동, 연소, 플라즈마 해석" },
        { area: "영상계측", icon: "📷", description: "3차원 영상측량 및 상태추정 기술" },
        { area: "최적설계", icon: "🎯", description: "형상최적설계 및 성능향상 기술" }
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
                        ACADEMIC RESEARCH
                    </div>

                    {/* Hero Description */}
                    <div className="absolute w-full flex text-center items-center h-full justify-center mt-[8rem] text-[1.5rem] font-[400] text-gray-300 z-0 pointer-events-none">
                        논문 및 학술대회 발표 자료
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">RESEARCH OVERVIEW</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                15년간의 연구 성과
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                넥스트폼은 2011년 설립 이래 지속적인 연구개발을 통해 CFD 분야의 혁신을 이끌어왔습니다. 
                                국내외 학술지와 학술대회에 130편 이상의 논문을 발표하며, 공개소스 CFD 기술의 발전에 기여하고 있습니다.
                            </p>
                            <p className="text-[1.25rem] text-white font-[600] max-w-[64rem] leading-relaxed">
                                BARAM, FAMUS 등 자체 개발 솔버와 다양한 연구 성과를 통해 CFD 기술의 민주화를 실현하고 있습니다.
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">RESEARCH STATS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                연구 성과 통계
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

                {/* Research Areas Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">RESEARCH AREAS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                주요 연구 분야
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                            {researchAreas.map((area, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300 h-full">
                                        <div className="flex items-center mb-[1.5rem]">
                                            <span className="text-[2rem] mr-[1rem]">{area.icon}</span>
                                            <h3 className="text-[1.5rem] font-[600] text-white group-hover:text-gray-300 transition-colors">
                                                {area.area}
                                            </h3>
                                        </div>
                                        <div className="text-gray-400 text-[1rem] font-[400] leading-relaxed">
                                            {area.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Publications Timeline Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">PUBLICATIONS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                논문 발표 현황
                            </h2>
                        </div>
                        
                        <div className="space-y-[4rem]">
                            {publications.map((yearGroup, index) => (
                                <div key={index} className="relative">
                                    {/* Year Header */}
                                    <div className="flex items-center mb-[2rem]">
                                        <div className="w-[2rem] h-[2rem] bg-white rounded-full border-4 border-black relative z-10 flex items-center justify-center mr-[2rem]">
                                            <div className="w-[0.5rem] h-[0.5rem] bg-black rounded-full"></div>
                                        </div>
                                        <h3 className="text-[2rem] font-[800] text-white">
                                            {yearGroup.year}
                                        </h3>
                                        <div className="ml-[2rem] text-[1rem] text-gray-400 font-[400]">
                                            {yearGroup.papers.length}편 발표
                                        </div>
                                    </div>
                                    
                                    {/* Papers Grid */}
                                    <div className="ml-[4rem] grid gap-[1.5rem]">
                                        {yearGroup.papers.map((paper, paperIndex) => (
                                            <div key={paperIndex} className="border-l border-gray-800 pl-[2rem] py-[1rem]">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <h4 className="text-[1.125rem] font-[600] text-white mb-[0.5rem] leading-tight">
                                                            {paper.title}
                                                        </h4>
                                                        <div className="text-[0.875rem] text-gray-300 mb-[0.25rem]">
                                                            {paper.authors}
                                                        </div>
                                                        <div className="text-[0.875rem] text-gray-400">
                                                            {paper.conference}
                                                            {paper.type && (
                                                                <span className="ml-[0.5rem] px-[0.5rem] py-[0.125rem] bg-gray-800 text-gray-300 text-[0.75rem] rounded">
                                                                    {paper.type}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">RESEARCH COLLABORATION</span>
                                <div className="w-[4rem] h-px bg-white ml-[2rem]"></div>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                연구 협력 제안
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] mx-auto">
                                CFD 기술의 새로운 가능성을 함께 탐구하고 혁신적인 연구 성과를 만들어가세요
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-[2rem]">
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-black bg-white hover:bg-gray-200 transition-colors duration-300">
                                <span className="relative z-10">연구 협력 문의</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-white border border-gray-600 hover:border-white transition-colors duration-300">
                                <span className="relative z-10">논문 다운로드</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}