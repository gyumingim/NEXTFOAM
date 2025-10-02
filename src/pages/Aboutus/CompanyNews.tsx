import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images

export default function CompanyNewsPage() {
    const companyNews = [
        {
            id: 1,
            title: "BARAM – ANSA 전략적 협력 관계 구축",
            date: "2025.08.19",
            category: "Strategic Partnership",
            summary: "오픈 소스 CFD 솔루션 BARAM과 상용 전처리 프로그램 ANSA의 만남으로 전처리에서 해석까지 이어지는 one-stop 솔루션을 제공합니다.",
            content: "넥스트폼과 에스피구루는 전략적 협력 관계를 구축하여 국내 CFD 시장에서 오픈 소스의 영역을 넓혀가고자 합니다. 복잡한 CAD 파일을 이용한 열유동 해석이 필요한 분들은 전처리 프로그램 구매만으로 CFD 시뮬레이션이 가능합니다.",
            highlights: [
                "BARAM의 Pre-processing 한계 극복",
                "오픈 소스 CFD 확산 및 CFD 패러다임의 변화",
                "CFD Workflow 최적화/자동화",
                "업무 효율 극대화, Human error 최소화",
                "CFD 활용 확대"
            ],
            products: [
                {
                    name: "BARAM",
                    description: "넥스트폼이 OpenFOAM의 단점인 사용자 편의성과 안정성 문제를 해결하여 개발/공개하고 있는 High-End CFD 솔루션",
                    features: [
                        "OpenFOAM의 업그레이드가 지속적으로 반영",
                        "포털 사이트(baramcfd.org)에서 설치 파일 다운로드, 매뉴얼, 튜토리얼, Q&A 제공",
                        "정기교육 및 온사이트 교육 진행",
                        "서브스크립션 계약을 통한 기술지원, 유지보수, 기능 개발 서비스"
                    ]
                },
                {
                    name: "ANSA",
                    description: "BETA CAE System에서 개발한 CAE/CFD 해석을 위한 전처리 프로그램으로, 현재 Cadence가 인수하였으며, 국내에서는 에스피구루가 공급",
                    features: [
                        "CAD에서 해석 모델로의 변환 과정(Clean-up)에 탁월한 성능",
                        "CFD 뿐 아니라 다양한 CAE 해석을 위한 격자 생성 가능",
                        "다양한 솔버의 입력으로 내보내기 가능",
                        "Task Manager, scripting, batch meshing, templates 등의 기능으로 반복 작업 감소"
                    ]
                }
            ],
            philosophy: [
                {
                    title: "No More Pay License Fee for CFD",
                    description: "이제 CFD는 고가의 라이선스 비용을 내고 사용하는 시대가 아닙니다. 각종 AI 솔루션처럼 공개 소스를 사용하고, 필요하면 구독 계약을 통해 서비스를 받으면 됩니다."
                },
                {
                    title: "DIY(Do It Yourself) CFD",
                    description: "이제 CFD는 프로그램 자체의 성능을 논하는 시대가 아닙니다. 워크플로우를 어떻게 효율적으로 구성하느냐가 중요합니다. 효율적인 프로그램을 찾지 말고 직접 설계하세요."
                }
            ],
            contact: {
                nextfoam: "넥스트폼 : marketing@nextfoam.co.kr, 010-9169-7540, 김동규 선임",
                spguru: "SP GURU : info@spguru.kr, 010-9012-5850, 최재권 영업대표"
            }
        }
    ]

    const partnershipStats = [
        { label: "협력사", value: "2", unit: "개사" },
        { label: "솔루션", value: "2", unit: "개" },
        { label: "서비스 영역", value: "전체", unit: "CFD 워크플로우" },
        { label: "지원", value: "24/7", unit: "기술지원" }
    ]

    const workflowSteps = [
        { step: "01", title: "CAD Import", description: "복잡한 CAD 파일을 ANSA로 가져오기", icon: "📥" },
        { step: "02", title: "Pre-processing", description: "ANSA를 통한 격자 생성 및 전처리", icon: "⚙️" },
        { step: "03", title: "CFD Analysis", description: "BARAM을 통한 고성능 CFD 해석", icon: "🌊" },
        { step: "04", title: "Post-processing", description: "결과 분석 및 시각화", icon: "📊" }
    ]

    const benefits = [
        {
            title: "비용 절감",
            description: "고가의 라이선스 비용 없이 오픈소스 솔루션 활용",
            icon: "💰"
        },
        {
            title: "워크플로우 최적화",
            description: "전처리부터 해석까지 원스톱 솔루션 제공",
            icon: "🔄"
        },
        {
            title: "기술 지원",
            description: "전문가의 기술지원 및 교육 서비스",
            icon: "🎓"
        },
        {
            title: "확장성",
            description: "필요에 따른 서브스크립션 계약 및 기능 확장",
            icon: "📈"
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
                        COMPANY NEWS
                    </div>

                    {/* Hero Description */}
                    <div className="absolute w-full flex text-center items-center h-full justify-center mt-[8rem] text-[1.5rem] font-[400] text-gray-300 z-0 pointer-events-none">
                        넥스트폼의 최신 소식과 업데이트
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">LATEST NEWS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                전략적 파트너십 구축
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                넥스트폼은 지속적인 혁신과 협력을 통해 CFD 시장의 패러다임을 바꾸고 있습니다. 
                                최신 소식과 업데이트를 통해 우리의 여정을 함께하세요.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Partnership Stats Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">PARTNERSHIP STATS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                협력 현황
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
                            {partnershipStats.map((stat, index) => (
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

                {/* Main News Article */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        {companyNews.map((news, index) => (
                            <div key={index} className="border border-gray-800 rounded-lg p-[4rem] hover:border-gray-700 transition-colors duration-300">
                                {/* News Header */}
                                <div className="mb-[3rem]">
                                    <div className="flex items-center mb-[2rem]">
                                        <span className="px-[1rem] py-[0.5rem] bg-gray-800 text-gray-300 text-[0.75rem] rounded mr-[2rem]">
                                            {news.category}
                                        </span>
                                        <span className="text-[0.875rem] text-gray-400">
                                            {news.date}
                                        </span>
                                    </div>
                                    <h2 className="text-[2.5rem] font-[600] text-white mb-[2rem] leading-tight">
                                        {news.title}
                                    </h2>
                                    <p className="text-[1.25rem] text-gray-300 leading-relaxed">
                                        {news.summary}
                                    </p>
                                </div>

                                {/* News Content */}
                                <div className="mb-[3rem]">
                                    <p className="text-[1rem] text-gray-400 leading-relaxed mb-[2rem]">
                                        {news.content}
                                    </p>
                                    
                                    {/* Highlights */}
                                    <div className="mb-[3rem]">
                                        <h3 className="text-[1.5rem] font-[600] text-white mb-[1.5rem]">
                                            협력의 가치
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-[1rem]">
                                            {news.highlights.map((highlight, highlightIndex) => (
                                                <div key={highlightIndex} className="flex items-start">
                                                    <div className="w-[0.5rem] h-[0.5rem] bg-white rounded-full mt-[0.5rem] mr-[1rem] flex-shrink-0"></div>
                                                    <p className="text-[0.875rem] text-gray-300 leading-relaxed">
                                                        {highlight}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Products Section */}
                                    <div className="mb-[3rem]">
                                        <h3 className="text-[1.5rem] font-[600] text-white mb-[2rem]">
                                            협력 솔루션
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-[2rem]">
                                            {news.products.map((product, productIndex) => (
                                                <div key={productIndex} className="border border-gray-800 rounded-lg p-[2rem]">
                                                    <h4 className="text-[1.25rem] font-[600] text-white mb-[1rem]">
                                                        {product.name}
                                                    </h4>
                                                    <p className="text-[0.875rem] text-gray-300 mb-[1rem] leading-relaxed">
                                                        {product.description}
                                                    </p>
                                                    <div className="space-y-[0.5rem]">
                                                        {product.features.map((feature, featureIndex) => (
                                                            <div key={featureIndex} className="flex items-start">
                                                                <div className="w-[0.25rem] h-[0.25rem] bg-gray-500 rounded-full mt-[0.5rem] mr-[0.75rem] flex-shrink-0"></div>
                                                                <p className="text-[0.75rem] text-gray-400 leading-relaxed">
                                                                    {feature}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Philosophy Section */}
                                    <div className="mb-[3rem]">
                                        <h3 className="text-[1.5rem] font-[600] text-white mb-[2rem]">
                                            핵심 철학
                                        </h3>
                                        <div className="space-y-[2rem]">
                                            {news.philosophy.map((philosophy, philosophyIndex) => (
                                                <div key={philosophyIndex} className="border-l border-gray-600 pl-[2rem]">
                                                    <h4 className="text-[1rem] font-[600] text-white mb-[0.5rem]">
                                                        {philosophy.title}
                                                    </h4>
                                                    <p className="text-[0.875rem] text-gray-300 leading-relaxed">
                                                        {philosophy.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contact Section */}
                                    <div className="border border-gray-700 rounded-lg p-[2rem] bg-gray-900">
                                        <h3 className="text-[1.25rem] font-[600] text-white mb-[1rem]">
                                            문의 연락처
                                        </h3>
                                        <div className="space-y-[0.5rem]">
                                            <p className="text-[0.875rem] text-gray-300">
                                                {news.contact.nextfoam}
                                            </p>
                                            <p className="text-[0.875rem] text-gray-300">
                                                {news.contact.spguru}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Workflow Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">WORKFLOW</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                통합 워크플로우
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                            {workflowSteps.map((step, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300 h-full text-center">
                                        <div className="text-[2rem] mb-[1rem]">{step.icon}</div>
                                        <div className="text-[0.875rem] font-[600] text-gray-400 mb-[0.5rem]">
                                            {step.step}
                                        </div>
                                        <h3 className="text-[1.25rem] font-[600] text-white group-hover:text-gray-300 transition-colors mb-[1rem]">
                                            {step.title}
                                        </h3>
                                        <div className="text-gray-400 text-[0.875rem] font-[400] leading-relaxed">
                                            {step.description}
                                        </div>
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">BENEFITS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                협력의 장점
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
                                BARAM + ANSA 최적 조합
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] mx-auto">
                                지금 바로 BARAM과 ANSA의 최적 조합을 사용해보세요. 
                                전처리에서 해석까지 원스톱 솔루션을 경험하세요.
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-[2rem]">
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-black bg-white hover:bg-gray-200 transition-colors duration-300">
                                <span className="relative z-10">BARAM 다운로드</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-white border border-gray-600 hover:border-white transition-colors duration-300">
                                <span className="relative z-10">ANSA 문의</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}