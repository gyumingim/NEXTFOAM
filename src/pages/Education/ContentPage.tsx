import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images

export default function EducationContentPage() {
    const educationPrograms = [
        {
            id: 1,
            title: "CFD 실전교육 BARAM & OpenFOAM",
            description: "OpenFOAM을 이용한 CFD 시뮬레이션 사용자들을 위한 예제 및 실습 위주의 교육을 진행합니다.",
            duration: "4일",
            price: "1,500,000원",
            discount: "학생할인 30%",
            features: [
                "CLI(Command Line Interface)를 이용한 OpenFOAM의 전반적인 사용법",
                "공개된 GUI(Graphical User Interface) 패키지 프로그램 BARAM 실습",
                "baramMesh를 이용한 격자 생성",
                "baramFlow를 이용한 유동 해석 및 후처리 과정",
                "누구나 어디서든 CFD 활용이 가능",
                "교육 수강후 한달 동안 무상으로 기술지원 제공"
            ],
            curriculum: [
                {
                    day: "1일차",
                    topics: [
                        "전산유체역학의 기본 이론",
                        "유체역학 지배방정식 및 컴퓨터를 이용한 시뮬레이션 방법론",
                        "시뮬레이션 프로세스 – 전처리, 계산, 후처리 과정",
                        "물리 모델의 종류와 적절한 모델 선정 방법",
                        "경계 조건, 초기 조건의 개념 및 사용 방법",
                        "수치해석 기법의 종류와 특성 및 선택 방법",
                        "OpenFOAM(NextFOAM) 소개",
                        "OpenFOAM(NextFOAM) 설치 및 구동환경 만들기",
                        "OpenFOAM 기본 Solver 사용법 예제 1 (cavity flow, icoFoam)"
                    ]
                },
                {
                    day: "2일차",
                    topics: [
                        "OpenFOAM 기본 Solver 사용법 예제 2 (hotRoom, buoyantSimpleFOAM)",
                        "ParaView 사용법",
                        "OpenFOAM 기본 Solver 사용법 예제 3 (Dam breaking, VOF, interFoam)",
                        "snappyHexMesh 소개",
                        "PyFoam 소개 및 사용하기",
                        "병렬계산하기, OpenMPI 사용법",
                        "Function objects/ 경계조건 /Utilities 소개"
                    ]
                },
                {
                    day: "3일차",
                    topics: [
                        "BARAM 프로그램의 소개 및 설치",
                        "프로그램의 특징 및 주요 기능",
                        "설치: Windows, MacOS에서 설치 방법 / 소스코드를 이용한 설치 방법",
                        "baramMesh 실습 예제 1 ahmedBody",
                        "baramMesh 실습 예제 2 Fan"
                    ]
                },
                {
                    day: "4일차",
                    topics: [
                        "baramFlow 실습 예제 1 ahmed Body",
                        "baramFlow 실습 예제 2 Fan",
                        "baramFlow 실습 예제 3 Conjugate Heat Transfer",
                        "baramFlow 실습 예제 4 Weir"
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "OpenFOAM 코드개발자 교육",
            description: "OpenFOAM 이용하여 사용자 요구에 맞는 customized solver를 만들고자하시는 여러분께 도움을 드리고자 OpenFOAM solver를 직접 modify 하는 방법에 대한 교육을 진행합니다.",
            duration: "3일",
            price: "2,000,000원",
            discount: "On-Site 교육으로만 진행",
            features: [
                "OpenFOAM solver를 직접 modify 하는 방법",
                "사용자 요구에 맞는 customized solver 개발",
                "High Level 프로그래밍 기법",
                "wmake로 빌드하기",
                "Utility 만들기",
                "경계조건 라이브러리 만들기",
                "FVM & SIMPLE algorithm in OpenFOAM"
            ],
            curriculum: [
                {
                    day: "1일차",
                    topics: [
                        "OpenFOAM compile을 위한 compiler 사용법",
                        "OpenFOAM을 이용한 High Level 프로그래밍"
                    ]
                },
                {
                    day: "2일차",
                    topics: [
                        "wmake로 빌드하기",
                        "Utility 만들기",
                        "경계조건 라이브러리 만들기"
                    ]
                },
                {
                    day: "3일차",
                    topics: [
                        "FVM & SIMPLE algorith in OpenFOAM"
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "BARAM/OpenFOAM 열전달 교육",
            description: "OpenFOAM을 이용하여 열전달 및 복합열전달 유동해석을 하고자 하시는 여러분들께 도움을 드리고자 thermophysical models 설명 및 해석 방법에 대한 교육을 진행합니다.",
            duration: "1일",
            price: "2,000,000원",
            discount: "On-Site 교육으로만 진행",
            features: [
                "Heat Transfer Solver",
                "Thermophysical models",
                "thermophysicalProperties 예제 실습",
                "Multi Region Conjugate Heat Transfer Solver",
                "전처리 방법",
                "해석 방법",
                "예제 실습"
            ],
            curriculum: [
                {
                    day: "1일차",
                    topics: [
                        "Heat Transfer Solver",
                        "Thermophysical models",
                        "thermophysicalProperties 예제 실습",
                        "Multi Region Conjugate Heat Transfer Solver",
                        "전처리 방법",
                        "해석 방법",
                        "예제 실습"
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "CAE/AI 엔지니어를 위한 HPC 교육",
            description: "자체 HPC 구축 및 관리 / HPC를 활용하여 CFD 등 CAE 해석을 수행하고자하는 엔지니어 및 연구원을 대상으로 교육을 진행합니다.",
            duration: "2일",
            price: "2,000,000원",
            discount: "On-Site 교육으로만 진행",
            features: [
                "HPC 활용 및 관리를 위한 Linux 기본",
                "HPC 개요 및 기본 개념",
                "HPC 구성 요소 및 성능 영향 요인",
                "활용 분야에 따른 HPC 설계 및 활용 방안",
                "HPC 구축 데모 및 실습",
                "HPC에서 OpenFOAM 등 CFD 어플리케이션 수행",
                "HPC에서 Pytorch를 활용한 AI 학습",
                "HPC에서 GPU 활용"
            ],
            curriculum: [
                {
                    day: "1일차",
                    topics: [
                        "HPC 활용 및 관리를 위한 Linux 기본 (2시간)",
                        "HPC 개요 HPC 기본 개념 및 활용 분야",
                        "HPC 구성 요소 및 성능 영향 요인",
                        "활용 분야에 따른 HPC 설계 및 활용 방안",
                        "HPC 구축 데모 및 실습"
                    ]
                },
                {
                    day: "2일차",
                    topics: [
                        "HPC에서 OpenFOAM 등 CFD 어플리케이션 수행",
                        "HPC에서 Pytorch를 활용한 AI 학습",
                        "HPC에서 GPU 활용"
                    ]
                }
            ]
        }
    ]

    const educationStats = [
        { label: "교육 과정", value: "4", unit: "개" },
        { label: "교육생", value: "500+", unit: "명" },
        { label: "교육 기간", value: "1-4", unit: "일" },
        { label: "기술 지원", value: "1개월", unit: "무상" }
    ]

    const benefits = [
        {
            title: "실무 중심 교육",
            description: "예제 및 실습 위주의 체계적인 교육 과정",
            icon: "🎯"
        },
        {
            title: "전문가 강의",
            description: "CFD 분야 전문가들의 실무 경험 기반 강의",
            icon: "👨‍🏫"
        },
        {
            title: "기술 지원",
            description: "교육 수강 후 한 달간 무상 기술 지원 제공",
            icon: "🛠️"
        },
        {
            title: "학생 할인",
            description: "박사과정까지 학생할인 30% 적용",
            icon: "🎓"
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
                        EDUCATION
                    </div>

                    {/* Hero Description */}
                    <div className="absolute w-full flex text-center items-center h-full justify-center mt-[8rem] text-[1.5rem] font-[400] text-gray-300 z-0 pointer-events-none">
                        CFD 실전교육 BARAM & OpenFOAM
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">EDUCATION OVERVIEW</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                전문적인 CFD 교육 프로그램
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                OpenFOAM을 이용한 CFD 시뮬레이션 사용자들을 위한 예제 및 실습 위주의 교육을 진행합니다. 
                                CLI와 GUI를 모두 활용한 종합적인 교육으로 누구나 어디서든 CFD 활용이 가능합니다.
                            </p>
                            <p className="text-[1.25rem] text-white font-[600] max-w-[64rem] leading-relaxed">
                                교육 수강후 한달 동안 무상으로 기술지원을 제공합니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Education Stats Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">EDUCATION STATS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                교육 현황
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
                            {educationStats.map((stat, index) => (
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">EDUCATION BENEFITS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                교육 혜택
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

                {/* Education Programs Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">EDUCATION PROGRAMS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                교육 과정
                            </h2>
                        </div>
                        
                        <div className="space-y-[4rem]">
                            {educationPrograms.map((program, index) => (
                                <div key={index} className="border border-gray-800 rounded-lg p-[3rem] hover:border-gray-700 transition-colors duration-300">
                                    {/* Program Header */}
                                    <div className="mb-[3rem]">
                                        <div className="flex items-start justify-between mb-[2rem]">
                                            <div className="flex-1">
                                                <div className="flex items-center mb-[1rem]">
                                                    <span className="px-[1rem] py-[0.5rem] bg-gray-800 text-gray-300 text-[0.75rem] rounded mr-[1rem]">
                                                        {program.duration}
                                                    </span>
                                                    <span className="text-[1.5rem] font-[800] text-white mr-[1rem]">
                                                        {program.price}
                                                    </span>
                                                    <span className="text-[0.875rem] text-gray-400">
                                                        {program.discount}
                                                    </span>
                                                </div>
                                                <h3 className="text-[2rem] font-[600] text-white mb-[1rem] leading-tight">
                                                    {program.title}
                                </h3>
                                                <p className="text-[1rem] text-gray-300 leading-relaxed mb-[2rem]">
                                                    {program.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Program Features */}
                                        <div className="mb-[2rem]">
                                            <h4 className="text-[1.25rem] font-[600] text-white mb-[1rem]">
                                                주요 특징
                                            </h4>
                                            <div className="grid md:grid-cols-2 gap-[1rem]">
                                                {program.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-start">
                                                        <div className="w-[0.5rem] h-[0.5rem] bg-white rounded-full mt-[0.5rem] mr-[1rem] flex-shrink-0"></div>
                                                        <p className="text-[0.875rem] text-gray-300 leading-relaxed">
                                                            {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                                    </div>
                                    
                                    {/* Curriculum */}
                                    <div>
                                        <h4 className="text-[1.25rem] font-[600] text-white mb-[2rem]">
                                            교육 과정
                                        </h4>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                                            {program.curriculum.map((day, dayIndex) => (
                                                <div key={dayIndex} className="border border-gray-700 rounded-lg p-[1.5rem]">
                                                    <h5 className="text-[1rem] font-[600] text-white mb-[1rem]">
                                                        {day.day}
                                                    </h5>
                                                    <div className="space-y-[0.5rem]">
                                                        {day.topics.map((topic, topicIndex) => (
                                                            <div key={topicIndex} className="flex items-start">
                                                                <div className="w-[0.25rem] h-[0.25rem] bg-gray-400 rounded-full mt-[0.5rem] mr-[0.75rem] flex-shrink-0"></div>
                                                                <p className="text-[0.75rem] text-gray-400 leading-relaxed">
                                                                    {topic}
                                                                </p>
                                    </div>
                                                        ))}
                                    </div>
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">APPLY NOW</span>
                                <div className="w-[4rem] h-px bg-white ml-[2rem]"></div>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                교육 신청하기
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] mx-auto">
                                전문적인 CFD 교육으로 기술 역량을 향상시키고 실무에 바로 적용하세요
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-[2rem]">
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-black bg-white hover:bg-gray-200 transition-colors duration-300">
                                <span className="relative z-10">교육 신청</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-white border border-gray-600 hover:border-white transition-colors duration-300">
                                <span className="relative z-10">교육 문의</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}