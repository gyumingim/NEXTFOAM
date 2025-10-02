import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images

export default function TechnicalDocumentationPage() {
    const baramResources = [
        {
            title: "BARAM v25.2 Release Notes",
            type: "Release Notes",
            description: "최신 버전의 새로운 기능과 개선사항을 확인하세요",
            category: "BARAM"
        },
        {
            title: "공개 소스 CFD 프로그램 BARAM의 개발 방법 및 현황",
            type: "Technical Paper",
            description: "BARAM 개발 과정과 현재 상태에 대한 상세한 기술 문서",
            category: "BARAM"
        },
        {
            title: "BARAM v25.1 Release notes",
            type: "Release Notes",
            description: "이전 버전의 업데이트 내용과 버그 수정 사항",
            category: "BARAM"
        },
        {
            title: "BARAM Validation – Density based solver",
            type: "Validation Report",
            description: "밀도 기반 솔버의 검증 결과 및 벤치마크 테스트",
            category: "BARAM"
        },
        {
            title: "BARAM Validation – Pressure based solver",
            type: "Validation Report",
            description: "압력 기반 솔버의 검증 결과 및 성능 분석",
            category: "BARAM"
        },
        {
            title: "BARAM의 Real Time Simulator 성능 평가",
            type: "Performance Report",
            description: "실시간 시뮬레이터의 성능 평가 및 최적화 방안",
            category: "BARAM"
        },
        {
            title: "ParaView Tips",
            type: "Tutorial",
            description: "ParaView를 활용한 효과적인 후처리 기법과 팁",
            category: "BARAM"
        },
        {
            title: "BaramMesh Tips",
            type: "Tutorial",
            description: "BaramMesh를 이용한 격자 생성 최적화 방법",
            category: "BARAM"
        },
        {
            title: "BARAM 서브스크립션과 서비스",
            type: "Service Guide",
            description: "BARAM 서브스크립션 서비스 및 기술 지원 안내",
            category: "BARAM"
        }
    ]

    const openfoamResources = [
        {
            title: "CFD 패러다임의 전환",
            type: "White Paper",
            description: "CFD 기술의 미래와 패러다임 변화에 대한 분석",
            category: "OpenFOAM, CFD"
        },
        {
            title: "전산유체역학(CFD)이란",
            type: "Educational Material",
            description: "CFD의 기본 개념과 원리에 대한 교육 자료",
            category: "OpenFOAM, CFD"
        },
        {
            title: "전산유체역학(CFD) 해석 절차서",
            type: "Procedure Guide",
            description: "CFD 해석의 체계적인 절차와 방법론",
            category: "OpenFOAM, CFD"
        },
        {
            title: "NextFOAM 이란?",
            type: "Introduction",
            description: "NextFOAM의 특징과 OpenFOAM과의 차이점",
            category: "OpenFOAM, CFD"
        },
        {
            title: "Open Source CFD, OpenFOAM에 대한 오해",
            type: "Educational Material",
            description: "오픈소스 CFD에 대한 일반적인 오해와 진실",
            category: "OpenFOAM, CFD"
        },
        {
            title: "Cavitation 해석 사례",
            type: "Case Study",
            description: "캐비테이션 현상 해석의 실제 적용 사례",
            category: "OpenFOAM, CFD"
        },
        {
            title: "CFD Workflow 최적화",
            type: "Best Practice",
            description: "CFD 워크플로우 효율성 향상을 위한 최적화 방법",
            category: "OpenFOAM, CFD"
        },
        {
            title: "GPU accelerated OpenFOAM with petsc4Foam",
            type: "Technical Guide",
            description: "GPU 가속을 활용한 OpenFOAM 성능 향상 기법",
            category: "OpenFOAM, CFD"
        }
    ]

    const youtubeContent = [
        {
            title: "BARAM 설치 및 설정 가이드",
            description: "BARAM 설치부터 기본 설정까지 단계별 안내",
            duration: "15:30",
            views: "2.5K"
        },
        {
            title: "OpenFOAM 기초 튜토리얼",
            description: "OpenFOAM을 처음 사용하는 사용자를 위한 기초 강의",
            duration: "28:45",
            views: "5.2K"
        },
        {
            title: "CFD 메시 생성 최적화",
            description: "효율적인 메시 생성과 품질 향상 방법",
            duration: "22:15",
            views: "3.8K"
        },
        {
            title: "ParaView 후처리 기법",
            description: "ParaView를 활용한 전문적인 시각화 기법",
            duration: "35:20",
            views: "4.1K"
        },
        {
            title: "BARAM 고급 기능 활용",
            description: "BARAM의 고급 기능과 실제 프로젝트 적용 사례",
            duration: "42:10",
            views: "1.9K"
        },
        {
            title: "CFD 결과 해석 및 검증",
            description: "CFD 결과의 정확한 해석과 검증 방법론",
            duration: "31:25",
            views: "2.7K"
        }
    ]

    const resourceStats = [
        { label: "총 자료", value: "20+", unit: "개" },
        { label: "BARAM 문서", value: "9", unit: "개" },
        { label: "OpenFOAM 가이드", value: "8", unit: "개" },
        { label: "YouTube 영상", value: "50+", unit: "개" }
    ]

    const categories = [
        { name: "BARAM", icon: "⚙️", count: baramResources.length, description: "BARAM 솔버 관련 문서 및 가이드" },
        { name: "OpenFOAM", icon: "🌊", count: openfoamResources.length, description: "OpenFOAM 및 CFD 이론 자료" },
        { name: "Tutorials", icon: "📚", count: youtubeContent.length, description: "실습 중심의 교육 콘텐츠" },
        { name: "Case Studies", icon: "🔬", count: "15+", description: "실제 프로젝트 적용 사례" }
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
                        RESOURCE CENTER
                    </div>

                    {/* Hero Description */}
                    <div className="absolute w-full flex text-center items-center h-full justify-center mt-[8rem] text-[1.5rem] font-[400] text-gray-300 z-0 pointer-events-none">
                        기술 문서 및 교육 자료
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">RESOURCE OVERVIEW</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                종합적인 기술 자료 센터
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                BARAM, OpenFOAM, CFD 기술에 대한 포괄적인 문서와 교육 자료를 제공합니다. 
                                초보자부터 전문가까지 모든 레벨의 사용자를 위한 자료를 준비했습니다.
                            </p>
                            <p className="text-[1.25rem] text-white font-[600] max-w-[64rem] leading-relaxed">
                                실무에 바로 적용할 수 있는 실용적인 가이드와 최신 기술 동향을 확인하세요.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Resource Stats Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">RESOURCE STATS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                자료 현황
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
                            {resourceStats.map((stat, index) => (
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

                {/* Categories Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">CATEGORIES</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                자료 분류
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                            {categories.map((category, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300 h-full">
                                        <div className="flex items-center mb-[1.5rem]">
                                            <span className="text-[2rem] mr-[1rem]">{category.icon}</span>
                                            <h3 className="text-[1.5rem] font-[600] text-white group-hover:text-gray-300 transition-colors">
                                                {category.name}
                                            </h3>
                                        </div>
                                        <div className="text-[2rem] font-[800] text-white mb-[1rem]">
                                            {category.count}
                                        </div>
                                        <div className="text-gray-400 text-[1rem] font-[400] leading-relaxed">
                                            {category.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BARAM Resources Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">BARAM DOCUMENTATION</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                BARAM 관련 자료
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                            {baramResources.map((resource, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300 h-full">
                                        <div className="flex items-start justify-between mb-[1rem]">
                                            <span className="px-[0.75rem] py-[0.25rem] bg-gray-800 text-gray-300 text-[0.75rem] rounded">
                                                {resource.type}
                                            </span>
                                            <span className="text-[0.75rem] text-gray-500">
                                                BARAM
                                            </span>
                                        </div>
                                        <h3 className="text-[1.25rem] font-[600] text-white group-hover:text-gray-300 transition-colors mb-[1rem] leading-tight">
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-400 text-[0.875rem] font-[400] leading-relaxed">
                                            {resource.description}
                                        </p>
                                        <div className="mt-[1.5rem] pt-[1rem] border-t border-gray-800">
                                            <button className="text-[0.875rem] text-gray-300 hover:text-white transition-colors">
                                                다운로드 →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* OpenFOAM Resources Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">OPENFOAM & CFD GUIDES</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                OpenFOAM 및 CFD 가이드
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                            {openfoamResources.map((resource, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300 h-full">
                                        <div className="flex items-start justify-between mb-[1rem]">
                                            <span className="px-[0.75rem] py-[0.25rem] bg-gray-800 text-gray-300 text-[0.75rem] rounded">
                                                {resource.type}
                                            </span>
                                            <span className="text-[0.75rem] text-gray-500">
                                                OpenFOAM
                                            </span>
                                        </div>
                                        <h3 className="text-[1.25rem] font-[600] text-white group-hover:text-gray-300 transition-colors mb-[1rem] leading-tight">
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-400 text-[0.875rem] font-[400] leading-relaxed">
                                            {resource.description}
                                        </p>
                                        <div className="mt-[1.5rem] pt-[1rem] border-t border-gray-800">
                                            <button className="text-[0.875rem] text-gray-300 hover:text-white transition-colors">
                                                다운로드 →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* YouTube Channel Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">NEXTFOAM YOUTUBE CHANNEL</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                교육 영상 콘텐츠
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                실습 중심의 교육 영상을 통해 BARAM과 OpenFOAM을 더 쉽게 학습하세요.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                            {youtubeContent.map((video, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors duration-300">
                                        {/* Video Thumbnail Placeholder */}
                                        <div className="aspect-video bg-gray-900 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-[4rem] h-[4rem] border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-[1rem]">
                                                    <svg className="w-[2rem] h-[2rem] text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </div>
                                                <div className="text-[0.875rem] text-gray-500 font-[400]">
                                                    Video Placeholder
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="p-[2rem]">
                                            <h3 className="text-[1.25rem] font-[600] text-white group-hover:text-gray-300 transition-colors mb-[1rem] leading-tight">
                                                {video.title}
                                            </h3>
                                            <p className="text-gray-400 text-[0.875rem] font-[400] leading-relaxed mb-[1rem]">
                                                {video.description}
                                            </p>
                                            <div className="flex items-center justify-between text-[0.75rem] text-gray-500">
                                                <span>{video.duration}</span>
                                                <span>{video.views} views</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-[3rem]">
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-white border border-gray-600 hover:border-white transition-colors duration-300">
                                <span className="relative z-10">YouTube 채널 보기</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-900 py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto text-center">
                        <div className="mb-[5rem]">
                            <div className="flex items-center justify-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">GET SUPPORT</span>
                                <div className="w-[4rem] h-px bg-white ml-[2rem]"></div>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                기술 지원 및 문의
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] mx-auto">
                                자료에 대한 질문이나 추가 기술 지원이 필요하시면 언제든 문의해 주세요
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-[2rem]">
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-black bg-white hover:bg-gray-200 transition-colors duration-300">
                                <span className="relative z-10">기술 문의</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-white border border-gray-600 hover:border-white transition-colors duration-300">
                                <span className="relative z-10">교육 신청</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}