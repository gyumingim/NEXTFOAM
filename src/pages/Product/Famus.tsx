import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images
export default function FamusPage() {
    const features = [
        {
            title: "무격자 계산 기법",
            description: "공간 격자 생성 없이도 정확한 유동 해석이 가능한 혁신적인 CFD 솔버입니다.",
            details: [
                "질점만을 사용한 유한체적법과 유사한 계산",
                "격자 재생성 없이 복잡한 운동 구현",
                "다물체 간 상대운동 및 물체 변형 지원",
                "전처리 작업 시간 대폭 단축"
            ]
        },
        {
            title: "고차 정확도 수치해석",
            description: "충격파에서의 수치적 불안정성을 극복하고 초음속 영역에서도 정확한 해석이 가능합니다.",
            details: [
                "AUSMPW+ 기법으로 충격파 안정성 확보",
                "3차 공간 정확도의 MLP3 적용",
                "LU-SGS 및 Dual time stepping",
                "Geometric Conservation Least Squares Method"
            ]
        },
        {
            title: "다물리 해석 지원",
            description: "압축성 유동뿐만 아니라 플라즈마 현상까지 해석할 수 있는 포괄적인 솔버입니다.",
            details: [
                "압축성 시뮬레이션 솔버",
                "평형/비평형 플라즈마 해석",
                "NASA Glenn Research Center CEA 활용",
                "2000종 이상 기체 물성치 테이블"
            ]
        },
        {
            title: "6자유도 이동물체 해석",
            description: "복잡한 운동을 격자 재생성 없이 쉽게 구현할 수 있는 고급 기능을 제공합니다.",
            details: [
                "6자유도 운동 해석",
                "외력 작용 물체 및 추진 물체 해석",
                "강제 운동 입력 기능",
                "이동물체 궤적 및 자세각 출력"
            ]
        }
    ]

    const capabilities = [
        { 
            category: "CAD 클린업", 
            icon: "🔧", 
            description: "IGES, STL, STEP 포맷 지원 및 Netgen을 이용한 표면 형상 구현",
            features: ["다양한 CAD 포맷 지원", "자동 표면 형상 구현", "NASTRAN 포맷 임포트", "3차원 질점 자동 생성"]
        },
        { 
            category: "압축성 해석", 
            icon: "💨", 
            description: "초음속 영역에서도 정확한 압축성 유동 해석이 가능합니다",
            features: ["초음속 유동 해석", "충격파 안정성", "고차 정확도", "다물리 연성"]
        },
        { 
            category: "플라즈마 해석", 
            icon: "⚡", 
            description: "평형/비평형 플라즈마 현상까지 해석할 수 있는 고급 기능",
            features: ["평형 플라즈마", "비평형 플라즈마", "CEA 물성치", "2000종 기체 지원"]
        },
        { 
            category: "이동물체", 
            icon: "🚀", 
            description: "6자유도 운동을 격자 재생성 없이 구현하는 혁신적 기능",
            features: ["6자유도 운동", "외력 작용 해석", "강제 운동 입력", "궤적 및 자세각 출력"]
        }
    ]

    const stats = [
        { label: "개발 기관", value: "3", unit: "개" },
        { label: "지원 포맷", value: "4+", unit: "종" },
        { label: "기체 종류", value: "2000+", unit: "종" },
        { label: "자유도", value: "6", unit: "DOF" }
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
                        FAMUS
                    </div>

                    {/* Hero Description */}
                    <div className="absolute w-full flex text-center items-center h-full justify-center mt-[8rem] text-[1.5rem] font-[400] text-gray-300 z-0 pointer-events-none">
                        Meshless CFD for Complex Motion
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
                                무격자 CFD의 혁신
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                FAMUS는 무격자 계산 기법을 활용한 압축성 CFD 해석 프로그램으로, 공간 격자 생성 없이도 정확한 유동 해석이 가능합니다. 
                                국방과학연구소의 기술을 기반으로 넥스트폼과 서울대학교 극초음속연구실이 공동 개발하였습니다.
                            </p>
                            <p className="text-[1.25rem] text-white font-[600] max-w-[64rem] leading-relaxed">
                                기존 격자 기법에서 발생하는 전처리 작업 시간을 줄이고, 복잡한 운동이나 다물체 간 상대운동을 격자 재생성 없이 쉽게 구현할 수 있습니다.
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">TECHNICAL SPECS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                기술 사양
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">CORE FEATURES</span>
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

                {/* Capabilities Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">CAPABILITIES</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                주요 역량
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-[3rem]">
                            {capabilities.map((capability, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300 h-full">
                                        <div className="flex items-center mb-[1.5rem]">
                                            <span className="text-[2rem] mr-[1rem]">{capability.icon}</span>
                                            <h3 className="text-[1.5rem] font-[600] text-white group-hover:text-gray-300 transition-colors">
                                                {capability.category}
                                            </h3>
                                        </div>
                                        <p className="text-gray-400 text-[1rem] font-[400] leading-relaxed mb-[1.5rem]">
                                            {capability.description}
                                        </p>
                                        <div className="space-y-[0.5rem]">
                                            {capability.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center">
                                                    <div className="w-[0.25rem] h-[0.25rem] bg-white rounded-full mr-[0.75rem]"></div>
                                                    <span className="text-[0.875rem] text-gray-300 font-[400]">
                                                        {feature}
                                                    </span>
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">GET STARTED</span>
                                <div className="w-[4rem] h-px bg-white ml-[2rem]"></div>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                Experience FAMUS
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] mx-auto">
                                무격자 CFD의 혁신적인 기능을 경험하고 복잡한 운동 해석의 새로운 가능성을 열어보세요
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-[2rem]">
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-black bg-white hover:bg-gray-200 transition-colors duration-300">
                                <span className="relative z-10">문의하기</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-white border border-gray-600 hover:border-white transition-colors duration-300">
                                <span className="relative z-10">기술 문서</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}