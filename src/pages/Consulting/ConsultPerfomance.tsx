import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images
const consultingImages = import.meta.glob('../assets/consulting/*', { eager: true, as: 'url' })
const imageUrls = Object.values(consultingImages)

export default function ConsultPerformancePage() {
    const performanceData = [
        {
            category: "항공/우주 분야",
            icon: "🚀",
            projects: [
                { title: "화성 탐사 회전익기용 고성능 로터 및 전기구동 시스템 핵심기술 개발", client: "한국연구재단", year: "2024" },
                { title: "Grid fin 및 Landing legs를 장착한 재사용 발사체 공력 특성 예측", client: "한국항공우주연구원", year: "2023" },
                { title: "비행체 공력해석 및 자동화 S/W를 사용한 6분력 DB 구축", client: "국방과학연구소", year: "2022" },
                { title: "비행체 단분리 거동 해석", client: "한화", year: "2022" },
                { title: "고정밀도 공력해석자 자동화 기술 연구", client: "국방과학연구소", year: "2019" },
                { title: "외장분리 시뮬레이션 프로그램(ANYSEP V4) 개발", client: "한국항공우주산업", year: "2018" },
                { title: "고속비행체 동적 공력DB 생성 및 관리검증", client: "한국항공우주연구원", year: "2024" },
                { title: "무인 이동체 설계 플랫폼을 위한 유저 익스피리언스 개발", client: "한국연구재단", year: "2023" },
                { title: "하이드로코드 개선 및 최신화", client: "ADD", year: "2023" },
                { title: "고속비행체 시뮬레이션 공력 DB 생성 및 비행가시화", client: "한국항공우주연구원", year: "2023" },
                { title: "PCB 형태 드론 플랫폼 개발", client: "PNU드론", year: "2023" },
                { title: "극초음속 비행체 하중분포 연구를 위한 전산해석", client: "한국항공우주연구원", year: "2023" },
                { title: "우주비행기용 영상계측시스템 제작", client: "한국항공우주연구원", year: "2023" }
            ]
        },
        {
            category: "자동차/철도 분야",
            icon: "🚄",
            projects: [
                { title: "370kph 고속열차 전두부 형상 최적화 설계도구 제작", client: "한국교통대", year: "2023" },
                { title: "코레일 EMU-260 고속전철 84량, TC2차량 냉난방해석", client: "현대로템", year: "2023" },
                { title: "370kph 주행 열차의 3차원 전산유체해석", client: "한국교통대", year: "2022" },
                { title: "OpenFOAM을 이용한 칵핏 공조 해석 프로그램 개발", client: "현대모비스", year: "2018" },
                { title: "OpenFOAM 기반 PAV 최적화 해석 패키지 개발", client: "현대자동차", year: "2018" },
                { title: "하이퍼튜브(아음속 캡슐 트레인) 공력 전용 해석 SW 개발", client: "한국철도기술연구원", year: "2018" },
                { title: "해외수출용 고속철도차량 TSI 인증 공력해석", client: "현대로템", year: "2024" },
                { title: "고점도 접착제 면도포 노즐 내부 유동 및 도포형상 해석", client: "현대모비스", year: "2024" },
                { title: "공항철도 전동차 54량, 터널교행유동해석", client: "현대로템", year: "2023" },
                { title: "코레일 EMU-260 고속전철 84량, 냉난방 해석", client: "현대로템", year: "2022" },
                { title: "웹 기반 열유체 해석 플랫폼 개발", client: "현대모비스", year: "2022" },
                { title: "공항철도 전동차 54량, 공기역학적특성 CFD 해석", client: "현대로템", year: "2022" }
            ]
        },
        {
            category: "조선/해양 분야",
            icon: "🚢",
            projects: [
                { title: "추진기 소음저감 부가물 설계 프로그램 멀티 부가물 설계 및 후처리 GUI 모듈 개발", client: "선박해양플랜트연구소", year: "2022" },
                { title: "극저온 열교환기 성능 예측 플랫폼 개발", client: "한국조선해양", year: "2022" },
                { title: "선체개구부 침수유량 감소 효과 CFD 연구", client: "사회적참사대책위원회", year: "2021" },
                { title: "고정도 파랑 생성을 위한 난류모델링 기반기술 구축", client: "선박해양플랜트연구소", year: "2021" },
                { title: "디지털트윈 기반 배관시스템 열유동 Virtual Commissioning 자동화 플랫폼 개발", client: "한국조선해양", year: "2020" },
                { title: "H.7060 잠수함구조함-II 체계개발사업 Thruster 후류 CFD 해석", client: "대우조선해양", year: "2019" },
                { title: "부유체 6자유도 영상계측 시스템", client: "제주대", year: "2023" },
                { title: "배관 성능 평가 자동화 프로그램 해석 모듈 업데이트", client: "한국조선해양", year: "2023" },
                { title: "OpenFOAM을 이용한 선체 및 추진기 유동해석", client: "선박해양플랜트연구소", year: "2020" },
                { title: "Scrubber의 배기가스 역류 예측을 위한 열유동해석", client: "시뮬레이션테크", year: "2020" },
                { title: "중견조선소용 LNG 추진 선박 및 성능 해석 시스템 개발", client: "중소조선연구원", year: "2020" }
            ]
        },
        {
            category: "전기/전자 분야",
            icon: "⚡",
            projects: [
                { title: "키친전용 복합 열전달 프로그램을 개발하여 자동화 기능을 접목시킨 GUI 구축", client: "LG전자", year: "2024" },
                { title: "비전문가용 CFD 해석 자동화툴 개발", client: "LG전자", year: "2024" },
                { title: "Slot Die Coating 전용 CFD 프로그램 개발", client: "SK이노베이션", year: "2024" },
                { title: "열교환기 열전달해석 프로그램 개발", client: "한국전자기술연구원", year: "2023" },
                { title: "인쇄 Leveling 자동화 Tool 개발", client: "삼성전기", year: "2022" },
                { title: "디스펜싱 유동해석 기술 개발", client: "삼성전자", year: "2019" },
                { title: "Sputtering process 모델링을 위한 OpenFOAM 프로그래밍 기술지원", client: "코닝정밀소재", year: "2024" },
                { title: "OpenFOAM을 활용한 회전기 냉각 팬 해석 검증", client: "HD현대일렉트릭", year: "2024" },
                { title: "해석효율화(스프레딩,경화해석)를 위한 격자 자동생성 Tool 개발", client: "삼성전자", year: "2022" },
                { title: "입형다단펌프 성능 해석", client: "한국전자기술연구원", year: "2022" },
                { title: "FAB 환경분석 3차원 CFD 해석 모델 구축 및 시뮬레이션", client: "플로우플러스", year: "2021" }
            ]
        },
        {
            category: "에너지/환경/플랜트 분야",
            icon: "🌱",
            projects: [
                { title: "대기오염 확산 시뮬레이션 SaaS 개발 및 실증", client: "NIA", year: "2024" },
                { title: "화학물질 누출사고 영향범위 예측 및 사고원인 분석을 위한 오픈소스 3차원 CFD 프로그램 개발", client: "환경부", year: "2023" },
                { title: "디지털트윈 CFD 프로그램 연계 개발", client: "이삭엔지니어링", year: "2023" },
                { title: "격납건물 수소거동 해석을위한 난류모델 개선 및 검증", client: "한국원자력연구원", year: "2017" },
                { title: "Open Source 기반 정수장 수리흐름 해석 K-water형 CFD 표준모델 개발", client: "수자원공사", year: "2019" },
                { title: "학파저수지 수상태양광(20MW/5MW*4기) CFD / FEM 해석", client: "BK에너지", year: "2019" },
                { title: "CFD 기반의 핫셀내통 기류특성 분석 및 관련 툴 개발", client: "한국원자력연구원", year: "2019" },
                { title: "격납건물 해석을 위한 난류 벽함수 및 수치알고리즘 개선", client: "한국원자력연구원", year: "2019" },
                { title: "다차원 수소연소 해석 GUI 개발", client: "한국원자력연구원", year: "2017" },
                { title: "Circuit Breaker 용 OpenFOAM 프로그램 개발", client: "한국전기연구원", year: "2016" },
                { title: "PPS 열유동 해석", client: "현대중공업", year: "2016" }
            ]
        },
        {
            category: "건설/토목 분야",
            icon: "🏗️",
            projects: [
                { title: "와류 유입구 CFD 해석 자동화 사전 타당성 분석", client: "한국건설기술연구원", year: "2024" },
                { title: "검단역 PSD 풍압 해석", client: "지오디", year: "2024" },
                { title: "대구권 광역철도 구미역 PSD 풍압 시뮬레이션", client: "지오디", year: "2024" },
                { title: "대전 둔산동 그랑르피에드 연돌 해석", client: "르피에르둔산피에프브이", year: "2024" },
                { title: "수중터널 침설시공 동적제어 시험장치 제작 및 수중터널 통합시공시스템 소프트웨어 개발", client: "대우건설", year: "2023" },
                { title: "이라크 Khor Al Zubair 침매터널 시공 중 환기 및 온도 CFD 해석", client: "대우건설", year: "2023" },
                { title: "토트와이어 센서 및 시뮬링크 함수 블록", client: "대우건설", year: "2021" },
                { title: "OpenFOAM을 이용한 CFD 해석 프로그램 개발", client: "주성지앤비", year: "2021" },
                { title: "수중터널 침설시공법 모사 시험장치 제작", client: "대우건설", year: "2021" },
                { title: "영상계측 프로그램 개발", client: "대우건설", year: "2021" },
                { title: "2차원 와류진동 해석 소프트웨어 개발", client: "대우건설", year: "2020" }
            ]
        },
        {
            category: "기타",
            icon: "🔬",
            projects: [
                { title: "AI 기반 공연현장 군중 밀집 사고예측및 실시간 대응 플랫폼 기술 개발", client: "한국콘텐츠진흥원", year: "2024" },
                { title: "양자기술 기반 데이터센터 공조설계 시뮬레이션 실증", client: "SQK", year: "2024" },
                { title: "실감기반 첨단소방훈련체계 구축연구", client: "소방청", year: "2024" },
                { title: "KIMM-Flow 압축성 솔버 개발", client: "한국기계연구원", year: "2024" },
                { title: "유체 운동의 실시간 시뮬레이터 개발을 위한 적합직교분해 및 인공신경망 기반의 차수축소모델 구성 프레임워크 개발", client: "KOITA", year: "2021" },
                { title: "풍력발전단지 구축 효율화를 위한 OpenFOAM 활용 대규모 유동해석 연구", client: "한국과학기술정보연구원", year: "2021" },
                { title: "배터리 충전실 열유동해석", client: "지오디", year: "2024" },
                { title: "축자율 비자율 데이터 서비스 시범 환경 구축", client: "금오공대", year: "2024" },
                { title: "온수롤 내부 유체 열유동 해석 및 열전달 해석", client: "지오디", year: "2023" },
                { title: "배터리 관리 시스템 보드제작 및 기술개발", client: "경인테크", year: "2023" },
                { title: "윈도우용 KIMM-Flow 패키지 파일 개발", client: "한국기계연구원", year: "2023" }
            ]
        }
    ]

    const stats = [
        { label: "총 프로젝트", value: "150+", unit: "건" },
        { label: "참여 기관", value: "50+", unit: "개" },
        { label: "연구 기간", value: "10+", unit: "년" },
        { label: "성공률", value: "100", unit: "%" }
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
                        PERFORMANCE
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

                {/* Stats Section */}
                <div className="bg-gray-950 py-[4rem] px-[4rem]">
                    <div className="max-w-[90rem] mx-auto">
                                        <div className="mb-[3rem]">
                            <div className="flex items-center mb-[1rem]">
                                <div className="w-[3rem] h-px bg-white mr-[1.5rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">MISSION STATS</span>
                                            </div>
                            <h2 className="text-[2.5rem] font-[600] mb-[1rem]">
                                컨설팅 수행실적
                                            </h2>
                                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-[2.5rem] font-[800] text-white mb-[0.25rem]">
                                        {stat.value}
                                                </div>
                                    <div className="text-[0.875rem] text-gray-400 font-[400]">
                                        {stat.label}
                                    </div>
                                    <div className="text-[0.75rem] text-gray-500 font-[400]">
                                        {stat.unit}
                                    </div>
                                </div>
                            ))}
                            </div>
                    </div>
                </div>

                {/* Performance Data Section */}
                <div className="bg-black py-[4rem] px-[4rem]">
                    <div className="max-w-[140rem] mx-auto">
                        <div className="grid grid-cols-12 gap-[2rem]">
                            {/* Left Side - Performance Data */}
                            <div className="col-span-7">
                                {performanceData.map((category, categoryIndex) => (
                                    <div key={categoryIndex} className="mb-[3rem]">
                                        {/* Category Header */}
                                        <div className="mb-[1.5rem]">
                                            <div className="flex items-center mb-[0.75rem]">
                                                <div className="w-[2rem] h-px bg-white mr-[1rem]"></div>
                                                <span className="text-[0.75rem] font-[600] text-gray-400 tracking-widest">
                                                    {category.category.toUpperCase()}
                                                </span>
                            </div>
                                            <div className="flex items-center">
                                                <span className="text-[1.5rem] mr-[0.75rem]">{category.icon}</span>
                                                <h2 className="text-[1.5rem] font-[600] text-white">
                                                    {category.category}
                            </h2>
                        </div>
                                        </div>

                                        {/* Table Header */}
                                        <div className="border-b border-gray-800 pb-[0.5rem] mb-[0.5rem]">
                                            <div className="grid grid-cols-12 gap-[1rem] text-[0.75rem] font-[600] text-gray-400 tracking-widest uppercase">
                                                <div className="col-span-2">YEAR</div>
                                                <div className="col-span-5">PROJECT</div>
                                                <div className="col-span-5">CLIENT</div>
                                            </div>
                                        </div>

                                        {/* Projects Table with Connected Timeline */}
                                        <div className="relative">
                                            {/* Timeline Line */}
                                            <div className="absolute left-[0.25rem] top-[0.75rem] bottom-[0.75rem] w-px bg-gray-600"></div>
                                            
                                            <div className="space-y-[0.125rem]">
                                                {category.projects.map((project, projectIndex) => (
                                                    <div key={projectIndex} className="group relative">
                                                        <div className="grid grid-cols-12 gap-[1rem] py-[0.75rem] border-b border-gray-900 hover:border-gray-700 transition-colors duration-300">
                                                            <div className="col-span-2 flex items-center">
                                                                <div className="flex items-center">
                                                                    {/* Timeline Dot */}
                                                                    <div className="w-[0.5rem] h-[0.5rem] bg-white rounded-full border-2 border-black relative z-10"></div>
                                                                    <div className="text-[0.875rem] font-[600] text-gray-500 ml-[0.75rem]">
                                                                        {project.year}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-span-5 text-[1rem] font-[400] text-white leading-relaxed">
                                                                {project.title}
                                                            </div>
                                                            <div className="col-span-5 text-[0.875rem] font-[400] text-gray-400">
                                                                {project.client}
                                                            </div>
                                                        </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>

                            {/* Right Side - Images */}
                            <div className="col-span-5">
                                <div className="space-y-[2rem]">
                                    {imageUrls.slice(0, 6).map((imageUrl, index) => (
                                        <div key={index} className="aspect-[3/2] rounded-lg overflow-hidden border border-gray-800">
                                            <img 
                                                src={imageUrl} 
                                                alt={`Project ${index + 1}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="bg-gray-900 py-[4rem] px-[4rem]">
                    <div className="max-w-[90rem] mx-auto text-center">
                        <div className="mb-[3rem]">
                            <div className="flex items-center justify-center mb-[1rem]">
                                <div className="w-[3rem] h-px bg-white mr-[1.5rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">MISSION</span>
                                <div className="w-[3rem] h-px bg-white ml-[1.5rem]"></div>
                            </div>
                            <h2 className="text-[2.5rem] font-[600] mb-[1rem]">
                                혁신을 통한 미래 설계
                            </h2>
                            <p className="text-[1rem] text-gray-400 mb-[2rem] font-[400] max-w-[64rem] mx-auto">
                                다양한 분야의 첨단 기술 프로젝트를 통해 CFD 기술의 한계를 뛰어넘고, 
                                더 나은 미래를 위한 솔루션을 제공합니다.
                            </p>
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="w-[4rem] h-[4rem] border border-gray-600 rounded-full flex items-center justify-center">
                                <svg className="w-[2rem] h-[2rem] text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}