import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images

export default function NewsReleasePage() {
    const newsArticles = [
        {
            id: 1,
            title: "넥스트폼의 오픈소스 전산유체역학 솔루션 '바람', 해외·학계서 주목…\"비용 절감 효과 커\"",
            source: "AI타임스",
            date: "2025",
            category: "Industry Recognition",
            summary: "국내 산업용 시뮬레이션 시장의 외산 소프트웨어 의존도를 해결하고 연간 수백억 원의 비용 절감 효과를 제공하는 오픈소스 CFD 솔루션 '바람(BARAM)'이 주목받고 있습니다.",
            highlights: [
                "공공부문 및 산업 전반에서 연간 수백억 원의 비용 절감 효과",
                "라이선스 비용이 전혀 들지 않는 오픈소스 솔루션",
                "화학물질 확산, 화재·폭발, 기계·항공 등 분야에서 실증 프로젝트 완료",
                "세계 최고 수준의 석·박사급 전문가들로 구성된 연구진",
                "해외 연구자들 사이에서도 주목받으며 교육 도구로 활용"
            ],
            impact: "국민 혈세 절감과 기술 민주화, 산업 독립, 국제 학술 기여까지 달성 가능"
        },
        {
            id: 2,
            title: "국산 CFD 솔버 '바람', 외산 독점 깨고 산업 시뮬레이션 시장 정조준",
            source: "경상일보",
            date: "2025.07.17",
            category: "Market Disruption",
            summary: "현대중공업 출신 전문가가 주도하는 넥스트폼이 국내 유일의 자체 해석 엔진을 개발하여 외산 소프트웨어 독점을 깨고 산업용 시뮬레이션 시장에 본격 도전장을 내밀었습니다.",
            highlights: [
                "현대중공업 기술연구소 출신 전문가 주도 개발",
                "국내 산업계의 해석 기술 자립을 목표",
                "전체 인력의 80% 이상이 석사급 이상 연구원",
                "조선, 플랜트, 우주기술 등 5개 전문 분야 연구조직",
                "압축·비압축 유동, 열전달, 다상유동 등 폭넓은 해석 기능 지원"
            ],
            impact: "기술의 민주화를 통해 더 많은 연구자와 엔지니어들이 CFD 해석에 쉽게 접근 가능"
        },
        {
            id: 3,
            title: "넥스트폼, 오픈소스 CFD 솔루션 'BARAM' 출시",
            source: "뉴스메카",
            date: "2025.07.16",
            category: "Product Launch",
            summary: "전산유체역학 전문기업 넥스트폼이 국내 처음 개발한 오픈소스 프리웨어 CFD 솔루션 'BARAM'을 공식 출시하고 상용화에 나섰습니다.",
            highlights: [
                "국내 첫 오픈소스 프리웨어 전산유체해석 소프트웨어",
                "복잡한 명령어 입력 없이 간편한 GUI 환경 제공",
                "메시지 생성부터 유동 해석, 결과 시각화까지 원스톱 처리",
                "15년간 산업 현장과 국책과제를 통해 축적한 CFD 기술",
                "300개가 넘는 산업 프로젝트 수행 경험"
            ],
            impact: "도입 비용과 기술 진입장벽을 낮춰 다양한 산업 분야 연구개발 가속화"
        }
    ]

    const mediaStats = [
        { label: "보도 매체", value: "10+", unit: "개" },
        { label: "언론 노출", value: "50+", unit: "회" },
        { label: "언론사", value: "15+", unit: "개사" },
        { label: "언론 영향력", value: "국내외", unit: "확산" }
    ]

    const keyMessages = [
        {
            title: "비용 절감 효과",
            description: "연간 수백억 원의 국민 혈세 유출을 막고 연구 장비·인력 확충에 재투자 가능",
            icon: "💰"
        },
        {
            title: "기술 민주화",
            description: "누구나 비용 부담 없이 고성능 해석을 수행할 수 있는 오픈소스 솔루션",
            icon: "🌍"
        },
        {
            title: "산업 독립",
            description: "외산 소프트웨어 의존도를 낮추고 국내 기술 주권 확보",
            icon: "🏭"
        },
        {
            title: "국제 기여",
            description: "글로벌 CFD 커뮤니티에서 채택 사례 증가로 대한민국 기술 위상 향상",
            icon: "🚀"
        }
    ]

    const industryImpact = [
        { sector: "자동차", impact: "차량 공기역학, 엔진 냉각, 연소해석", icon: "🚗" },
        { sector: "에너지", impact: "풍력터빈, 태양광, 화력발전소 해석", icon: "⚡" },
        { sector: "항공우주", impact: "항공기 공력해석, 로켓 추진, 위성 열해석", icon: "✈️" },
        { sector: "조선해양", impact: "선박 저항, 프로펠러 성능, 해양구조물", icon: "🚢" },
        { sector: "화학", impact: "화학물질 확산, 화재·폭발 해석", icon: "🧪" },
        { sector: "건설", impact: "건물 풍압, 환기시스템, 화재해석", icon: "🏗️" }
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
                        NEWS RELEASE
                    </div>

                    {/* Hero Description */}
                    <div className="absolute w-full flex text-center items-center h-full justify-center mt-[8rem] text-[1.5rem] font-[400] text-gray-300 z-0 pointer-events-none">
                        언론보도 및 미디어 커버리지
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">MEDIA COVERAGE</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                언론의 주목을 받는 혁신 기술
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                넥스트폼의 오픈소스 CFD 솔루션 'BARAM'은 국내외 언론의 주목을 받으며 
                                산업용 시뮬레이션 시장의 패러다임을 바꾸고 있습니다.
                            </p>
                            <p className="text-[1.25rem] text-white font-[600] max-w-[64rem] leading-relaxed">
                                연간 수백억 원의 비용 절감 효과와 기술 민주화를 통해 
                                대한민국 기술의 위상을 높이고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Media Stats Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">MEDIA STATS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                언론 보도 현황
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
                            {mediaStats.map((stat, index) => (
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

                {/* Key Messages Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">KEY MESSAGES</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                핵심 메시지
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                            {keyMessages.map((message, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300 h-full">
                                        <div className="flex items-center mb-[1.5rem]">
                                            <span className="text-[2rem] mr-[1rem]">{message.icon}</span>
                                            <h3 className="text-[1.5rem] font-[600] text-white group-hover:text-gray-300 transition-colors">
                                                {message.title}
                                            </h3>
                                        </div>
                                        <div className="text-gray-400 text-[1rem] font-[400] leading-relaxed">
                                            {message.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* News Articles Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">NEWS ARTICLES</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                주요 보도자료
                            </h2>
                        </div>
                        
                        <div className="space-y-[4rem]">
                            {newsArticles.map((article, index) => (
                                <div key={index} className="border border-gray-800 rounded-lg p-[3rem] hover:border-gray-700 transition-colors duration-300">
                                    {/* Article Header */}
                                    <div className="flex items-start justify-between mb-[2rem]">
                                        <div className="flex-1">
                                            <div className="flex items-center mb-[1rem]">
                                                <span className="px-[1rem] py-[0.5rem] bg-gray-800 text-gray-300 text-[0.75rem] rounded mr-[1rem]">
                                                    {article.category}
                                                </span>
                                                <span className="text-[0.875rem] text-gray-400">
                                                    {article.source} · {article.date}
                                                </span>
                                            </div>
                                            <h3 className="text-[1.5rem] font-[600] text-white mb-[1rem] leading-tight">
                                                {article.title}
                                            </h3>
                                            <p className="text-[1rem] text-gray-300 leading-relaxed mb-[2rem]">
                                                {article.summary}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Article Highlights */}
                                    <div className="mb-[2rem]">
                                        <h4 className="text-[1.125rem] font-[600] text-white mb-[1rem]">
                                            주요 내용
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-[1rem]">
                                            {article.highlights.map((highlight, highlightIndex) => (
                                                <div key={highlightIndex} className="flex items-start">
                                                    <div className="w-[0.5rem] h-[0.5rem] bg-white rounded-full mt-[0.5rem] mr-[1rem] flex-shrink-0"></div>
                                                    <p className="text-[0.875rem] text-gray-300 leading-relaxed">
                                                        {highlight}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Impact Statement */}
                                    <div className="border-l border-gray-600 pl-[2rem]">
                                        <h4 className="text-[1rem] font-[600] text-white mb-[0.5rem]">
                                            기대 효과
                                        </h4>
                                        <p className="text-[0.875rem] text-gray-300 leading-relaxed">
                                            {article.impact}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Industry Impact Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">INDUSTRY IMPACT</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                산업별 영향
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                            {industryImpact.map((impact, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300 h-full">
                                        <div className="flex items-center mb-[1.5rem]">
                                            <span className="text-[2rem] mr-[1rem]">{impact.icon}</span>
                                            <h3 className="text-[1.5rem] font-[600] text-white group-hover:text-gray-300 transition-colors">
                                                {impact.sector}
                                            </h3>
                                        </div>
                                        <div className="text-gray-400 text-[1rem] font-[400] leading-relaxed">
                                            {impact.impact}
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">MEDIA INQUIRY</span>
                                <div className="w-[4rem] h-px bg-white ml-[2rem]"></div>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                언론 문의
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] mx-auto">
                                넥스트폼의 혁신적인 기술과 비전에 대해 더 자세히 알고 싶으시다면 언론 담당자에게 문의해 주세요
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-[2rem]">
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-black bg-white hover:bg-gray-200 transition-colors duration-300">
                                <span className="relative z-10">언론 문의</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-white border border-gray-600 hover:border-white transition-colors duration-300">
                                <span className="relative z-10">보도자료 다운로드</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}