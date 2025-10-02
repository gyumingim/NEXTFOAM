import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images
const consultingImages = import.meta.glob('../assets/consulting/*', { eager: true, as: 'url' })
const imageUrls = Object.values(consultingImages)

export default function BaramPage() {
    const features = [
        {
            title: "오픈소스 CFD 솔버",
            description: "누구나 사용할 수 있고, 개발에 참여할 수 있는 완전 오픈소스 CFD 솔버입니다.",
            details: [
                "라이선스 비용 없이 자유롭게 사용 가능",
                "GitHub를 통한 오픈소스 개발 참여",
                "커뮤니티 기반 지속적인 개발 및 개선",
                "상업적 용도로도 제한 없이 사용 가능"
            ]
        },
        {
            title: "고성능 계산 엔진",
            description: "최신 수치해석 기법과 병렬처리 기술을 적용한 고성능 CFD 솔버입니다.",
            details: [
                "다중 CPU 코어 활용 병렬처리",
                "GPU 가속 계산 지원",
                "대규모 메시 처리 최적화",
                "메모리 효율적인 알고리즘"
            ]
        },
        {
            title: "사용자 친화적 인터페이스",
            description: "전문가와 초보자 모두가 쉽게 사용할 수 있는 직관적인 인터페이스를 제공합니다.",
            details: [
                "GUI 기반 쉬운 설정",
                "단계별 튜토리얼 제공",
                "다양한 후처리 도구",
                "실시간 모니터링 기능"
            ]
        },
        {
            title: "광범위한 물리 모델",
            description: "다양한 유동 현상과 물리적 조건을 시뮬레이션할 수 있는 포괄적인 물리 모델을 제공합니다.",
            details: [
                "압축성/비압축성 유동",
                "난류 모델링",
                "열전달 및 연소",
                "다상 유동 및 입자 추적"
            ]
        }
    ]

    const applications = [
        { category: "항공우주", icon: "🚀", description: "항공기 공력해석, 로켓 추진, 위성 열해석" },
        { category: "자동차", icon: "🚗", description: "차량 공기역학, 엔진 냉각, 연소해석" },
        { category: "조선해양", icon: "🚢", description: "선박 저항, 프로펠러 성능, 해양구조물" },
        { category: "에너지", icon: "⚡", description: "풍력터빈, 태양광, 화력발전소 해석" },
        { category: "건설", icon: "🏗️", description: "건물 풍압, 환기시스템, 화재해석" },
        { category: "전자", icon: "💻", description: "전자기기 냉각, 반도체 공정, 클린룸" }
    ]

    const stats = [
        { label: "다운로드", value: "10,000+", unit: "회" },
        { label: "활성 사용자", value: "2,500+", unit: "명" },
        { label: "GitHub 스타", value: "500+", unit: "개" },
        { label: "커뮤니티", value: "24/7", unit: "지원" }
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
                        BARAM
                    </div>

                    {/* Hero Description */}
                    <div className="absolute w-full flex text-center items-center h-full justify-center mt-[8rem] text-[1.5rem] font-[400] text-gray-300 z-0 pointer-events-none">
                        No More Pay License Fee for CFD
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">INTRODUCTION</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                오픈소스 CFD의 새로운 패러다임
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                우리는 스마트폰에서 필요한 앱을 그냥 설치해서 씁니다. AI로 무엇인가를 할 때 공개된 코드를 내려 받아 사용합니다. 
                                그런데 왜 CFD(열유동해석)는 비싼 돈을 내고 사용할까요?
                            </p>
                            <p className="text-[1.25rem] text-white font-[600] max-w-[64rem] leading-relaxed">
                                BARAM®은 누구나 사용할 수 있고, 개발에 참여할 수 있습니다.
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">COMMUNITY STATS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                글로벌 커뮤니티
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

                {/* Features Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">FEATURES</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                핵심 기능
                            </h2>
                        </div>
                        
                        <div className="space-y-[6rem]">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    {/* Left Side - Text Content (2/3) */}
                                    <div className="w-2/3 pr-[4rem]">
                                        {/* Feature Header */}
                                        <div className="mb-[3rem]">
                                            <div className="flex items-center mb-[2rem]">
                                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">FEATURE {String(index + 1).padStart(2, '0')}</span>
                                            </div>
                                            <h2 className="text-[2.5rem] font-[600] mb-[2rem] leading-tight">
                                                {feature.title}
                                            </h2>
                                            <p className="text-[1.125rem] text-gray-300 mb-[2rem] leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>

                                        {/* Feature Details */}
                                        <div className="space-y-[1rem]">
                                            {feature.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="border-l border-gray-800 max-w-[30rem] gap-[0rem]">
                                                    <p className="text-[1rem] text-gray-300 leading-relaxed font-[400] pl-[1rem]">
                                                        {detail}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Right Side - Image (1/3) */}
                                    <div className="w-1/3">
                                        <div className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-800">
                                            <img 
                                                src={imageUrls[index % imageUrls.length] || imageUrls[0]} 
                                                alt={feature.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Applications Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">APPLICATIONS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                적용 분야
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                            {applications.map((app, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300">
                                        <div className="flex items-center mb-[1.5rem]">
                                            <span className="text-[2rem] mr-[1rem]">{app.icon}</span>
                                            <h3 className="text-[1.5rem] font-[600] text-white group-hover:text-gray-300 transition-colors">
                                                {app.category}
                                            </h3>
                                        </div>
                                        <div className="text-gray-400 text-[1rem] font-[400] leading-relaxed">
                                            {app.description}
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">GET STARTED</span>
                                <div className="w-[4rem] h-px bg-white ml-[2rem]"></div>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                Step into BARAM
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] mx-auto">
                                지금 바로 BARAM을 다운로드하고 오픈소스 CFD의 세계에 참여하세요
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-[2rem]">
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-black bg-white hover:bg-gray-200 transition-colors duration-300">
                                <span className="relative z-10">GitHub에서 다운로드</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-white border border-gray-600 hover:border-white transition-colors duration-300">
                                <span className="relative z-10">문서 보기</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}