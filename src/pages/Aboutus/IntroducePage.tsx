import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images

export default function IntroducePage() {
    const milestones = [
        {
            year: "2025",
            title: "도로 절개사면 모니터링 시스템 특허 등록",
            description: "교량 모니터링 시스템 특허 등록으로 인프라 안전 모니터링 기술 확보"
        },
        {
            year: "2023",
            title: "자체 개발 OpenFOAM 포크 NextFOAM 공개",
            description: "공개소스 CFD 솔버의 새로운 버전을 전 세계에 공개"
        },
        {
            year: "2022",
            title: "공개 소스 CFD 프로그램 BARAM 차세대 버전 공개",
            description: "누구나 사용할 수 있는 오픈소스 CFD 솔버의 혁신적 업그레이드"
        },
        {
            year: "2018",
            title: "무격자 CFD 해석 프로그램 FAMUS 제품 출시",
            description: "격자 재생성 없이 복잡한 운동을 구현하는 혁신적인 솔버 출시"
        },
        {
            year: "2017",
            title: "병역특례 업체 지정 및 기술전문기업(K-ESP) 지정",
            description: "정부 인정 기술 전문 기업으로 성장"
        },
        {
            year: "2011",
            title: "(주)넥스트폼 설립",
            description: "3명이 모여 시작한 공개소스 CFD 전문 기업의 출발"
        }
    ]

    const teamStats = [
        { label: "설립", value: "2011", unit: "년" },
        { label: "구성원", value: "25", unit: "명" },
        { label: "박사", value: "5", unit: "명" },
        { label: "석사", value: "18", unit: "명" }
    ]

    const achievements = [
        {
            category: "프로젝트 수행",
            icon: "📊",
            stats: "300+ 건",
            description: "산업체, 연구소, 대학, 공공기관 등 100여 개 기관과의 협력 프로젝트"
        },
        {
            category: "학술 활동",
            icon: "📚",
            stats: "130+ 편",
            description: "국내외 학술지와 학술대회에 발표한 논문 수"
        },
        {
            category: "커뮤니티",
            icon: "👥",
            stats: "100+ 명",
            description: "매년 OKUCC에 참여하는 OpenFOAM 사용자 커뮤니티"
        },
        {
            category: "특허",
            icon: "💡",
            stats: "6+ 건",
            description: "도로 절개사면, 교량 모니터링, 건축물 풍압 등 다양한 분야 특허"
        }
    ]

    const values = [
        {
            title: "CFD for Everyone!",
            description: "CFD는 아직 석사, 박사 학위를 소지한 소수의 전문 인력들이 활용할 수 있는 연구개발 도구로 연구실 밖의 제품 설계, 개발, AS 등으로 확대되지 못하고 있습니다.",
            details: [
                "공개소스 프로그램을 통한 비용 문제 해결",
                "문제별 특화된 솔루션 제공",
                "전문 컨설팅을 통한 접근성 향상",
                "제품 성능 향상과 안전한 생활 구현"
            ]
        },
        {
            title: "OpenFOAM & OKUC",
            description: "OpenFOAM은 공개 소스 CFD 코드로 누구나 자유롭게 다운로드 받아 사용할 수 있으며, 전 세계의 많은 연구자들에 의해 계속 개발되고 있습니다.",
            details: [
                "NextFOAM 포크를 통한 자체 개발",
                "OKUCC 커뮤니티 행사 개최",
                "100명 이상 사용자와의 지식 공유",
                "1박 2일간의 친목 도모 행사"
            ]
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
                        NEXTFOAM
                    </div>

                    {/* Hero Description */}
                    <div className="absolute w-full flex text-center items-center h-full justify-center mt-[8rem] text-[1.5rem] font-[400] text-gray-300 z-0 pointer-events-none">
                        Since 2011
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">ABOUT US</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                기술 기반의 전문 엔지니어링 컨설팅
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                넥스트폼은 2011년 3명이 모여 공개소스 CFD 코드인 OpenFOAM을 기반으로, 기술 기반의 전문 엔지니어링 컨설팅 기업으로 발전 및 물리현상 시뮬레이션 분야의 패러다임 전환을 목표로 출발하였습니다.
                            </p>
                            <p className="text-[1.25rem] text-white font-[600] max-w-[64rem] leading-relaxed">
                                이후 다양한 산업 분야의 전문 인력들이 동참하여 열유체 분야에서 국내의 대표적인 컨설팅 기업으로 발전하였습니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Stats Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">TEAM</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                전문 인력 구성
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
                            {teamStats.map((stat, index) => (
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

                {/* Values Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">MISSION</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                핵심 가치
                            </h2>
                        </div>
                        
                        <div className="space-y-[6rem]">
                            {values.map((value, index) => (
                                <div key={index} className="flex items-start">
                                    {/* Left Side - Text Content (2/3) */}
                                    <div className="w-2/3 pr-[4rem]">
                                        {/* Value Header */}
                                        <div className="mb-[3rem]">
                                            <div className="flex items-center mb-[2rem]">
                                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">VALUE {String(index + 1).padStart(2, '0')}</span>
                                            </div>
                                            <h2 className="text-[2.5rem] font-[600] mb-[2rem] leading-tight">
                                                {value.title}
                                            </h2>
                                            <p className="text-[1.125rem] text-gray-300 mb-[2rem] leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>

                                        {/* Value Details */}
                                        <div className="space-y-[1rem]">
                                            {value.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="border-l border-gray-800 max-w-[30rem] gap-[0rem]">
                                                    <p className="text-[1rem] text-gray-300 leading-relaxed font-[400] pl-[1rem]">
                                                        {detail}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Right Side - Image Placeholder (1/3) */}
                                    <div className="w-1/3">
                                        <div className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-800 bg-gray-900 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-[4rem] h-[4rem] border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-[1rem]">
                                                    <svg className="w-[2rem] h-[2rem] text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                    </svg>
                                                </div>
                                                <div className="text-[0.875rem] text-gray-500 font-[400]">
                                                    Image Placeholder
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">ACHIEVEMENTS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                주요 성과
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300 h-full">
                                        <div className="flex items-center mb-[1.5rem]">
                                            <span className="text-[2rem] mr-[1rem]">{achievement.icon}</span>
                                            <h3 className="text-[1.5rem] font-[600] text-white group-hover:text-gray-300 transition-colors">
                                                {achievement.category}
                                            </h3>
                                        </div>
                                        <div className="text-[2rem] font-[800] text-white mb-[1rem]">
                                            {achievement.stats}
                                        </div>
                                        <div className="text-gray-400 text-[1rem] font-[400] leading-relaxed">
                                            {achievement.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">HISTORY</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                성장의 발자취
                            </h2>
                        </div>
                        
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-[1rem] top-0 bottom-0 w-px bg-gray-600"></div>
                            
                            <div className="space-y-[3rem]">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className="relative flex items-start">
                                        {/* Timeline Dot */}
                                        <div className="w-[2rem] h-[2rem] bg-white rounded-full border-4 border-black relative z-10 flex items-center justify-center">
                                            <div className="w-[0.5rem] h-[0.5rem] bg-black rounded-full"></div>
                                        </div>
                                        
                                        <div className="ml-[3rem] flex-1">
                                            <div className="text-[1.5rem] font-[800] text-white mb-[0.5rem]">
                                                {milestone.year}
                                            </div>
                                            <h3 className="text-[1.25rem] font-[600] text-white mb-[1rem]">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-[1rem] text-gray-300 leading-relaxed">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-900 py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto text-center">
                        <div className="mb-[5rem]">
                            <div className="flex items-center justify-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">CONTACT</span>
                                <div className="w-[4rem] h-px bg-white ml-[2rem]"></div>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                함께 성장하는 파트너
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] mx-auto">
                                CFD 기술의 새로운 가능성을 함께 탐구하고 혁신적인 솔루션을 만들어가세요
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-[2rem]">
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-black bg-white hover:bg-gray-200 transition-colors duration-300">
                                <span className="relative z-10">문의하기</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-white border border-gray-600 hover:border-white transition-colors duration-300">
                                <span className="relative z-10">회사소개서</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}