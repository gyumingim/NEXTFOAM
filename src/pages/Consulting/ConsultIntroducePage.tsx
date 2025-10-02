import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images
const consultingImages = import.meta.glob('../assets/consulting/*', { eager: true, query: '?url', import: 'default' })
const imageUrls = Object.values(consultingImages) as string[]

export default function ConsultIntroducePage() {
    const services = [
        {
            title: "CFD 시뮬레이션을 통한 최적설계",
            description: "CFD(Computational Fluid Dynamics)는 유체의 흐름, 열전달, 화학반응 등을 컴퓨터 시뮬레이션으로 분석하는 기술입니다. 눈에 보이지 않는 현상을 가시화하고 분석하여 최적화된 설계를 가능하게 하며, 개발 기간과 비용을 절감할 수 있는 강력한 도구입니다.",
            details: [
                "CFD 시뮬레이션에 필요한 인력과 경험이 부족하여 직접 수행하기 어려운 분들께, 전문 기술력을 바탕으로 컨설팅 서비스를 제공합니다.",
                "다양한 조건에 대한 데이터베이스 구축, 인공지능 학습자료 생성 등을 위한 대규모 계산이 필요한 경우, 실험계획법, 민감도분석, 대리모델 등의 방법을 이용해 빠른 시간에 정확한 데이터를 제공해 드립니다.",
                "저희는 직접 개발한 공개소스 코드(BARAM, NextFOAM)를 사용하며, 고객이 원하시면 시뮬레이션에 사용된 소스코드 제공과 함께 사용법 교육 서비스를 제공합니다."
            ]
        },
        {
            title: "CFD 해석 프로세스 자동화",
            description: "DIY(Do It Yourself)는 가구를 만들 때만 쓰는 것이 아닙니다. CFD 프로세스를 직접 설계해 보세요.",
            details: [
                "형상 및 격자 생성, 솔버 설정, 후처리 과정의 표준화/자동화는 시간절감, 인적오류(human error) 방지, 결과물 수준의 보장 등의 많은 장점이 있습니다.",
                "개발은 [솔버개발 및 검증] – [격자 시스템/수치 기법/후처리 표준화] – [프로세스 자동화] – [UX 개발] – [테스트 및 보완] – [교육]의 각 단계 별로 고객과의 협업으로 이루어집니다.",
                "하나의 CFD 프로그램에 국한되지 않고 설계/최적화 프레임워크, 여러 종류의 해석 프로그램 등을 통합하는 인터페이스로 개발할 수도 있습니다."
            ]
        },
        {
            title: "AI를 이용한 실시간 시뮬레이터 개발",
            description: "반복적인 CFD 해석 문제에 대해 데이터마이닝과 인공지능 기술을 이용하여 해석하지 않은 조건의 결과를 즉시 예측하는 실시간 시뮬레이터를 제공합니다.",
            details: [
                "샘플 조건에서의 해석 데이터들을 이용해 적합직교분해(POD) 기법으로 기저함수를 추출하고 인공신경망 기반의 내삽법을 통해 차수축소모델(ROM)을 만듭니다.",
                "축소모델을 이용해 새로운 형상 및 유동조건에 대한 고정밀도 데이터를 수초의 시간에 예측하고 가시화할 수 있습니다.",
                "데이터 생성을 위한 CFD 코드와 유동장 재건 및 가시화의 전 과정을 공개소스 코드를 사용하여, 라이선스 비용이 없고 효율적인 업그레이드가 가능한 솔루션을 제공합니다."
            ]
        },
        {
            title: "영상계측 시스템 개발",
            description: "영상측량기술은 광학식 카메라를 이용해 목표물의 3차원 위치를 측정하고, 나아가 3차원 자세까지 측정할 수 있는 기술이며, 비접촉식 계측을 수행하고자 하는 전분야에서 활용될 수 있는 기술입니다.",
            details: [
                "일반적으로 광학카메라를 이용한 영상측량기술의 경우 상대 위치 측정에만 초점을 두고 다른 상태정보(ex. 자세, 속도, 각속도) 등의 운동성분 해석은 불가능한 경우가 많습니다.",
                "하지만 본사는 영상측량기술과 상태추정필터 기술을 결합함으로써 6자유도 운동성분분석이 동시에 가능하게 합니다.",
                "3차원 측량기술의 경우 일반적으로 스테레오 카메라, 즉 2대 이상의 카메라를 동시에 촬영하여 3차원 측량을 수행합니다. 하지만 본사는 단안 카메라(1대의 카메라)를 이용한 3차원 영상측량기술을 보유하고 있습니다."
            ]
        },
        {
            title: "HPC/Cloud 컨설팅",
            description: "CFD는 많은 계산량 때문에 HPC(High Performance Computing) 장비가 필요한 경우가 많이 있습니다.",
            details: [
                "계산용 클러스터를 구축할 때 해석 문제의 규모, 현재 전산장비의 개발 동향, 가격 변동 등을 고려하여 최적의 시스템을 제안해 드립니다.",
                "클라우드에서 CFD 시뮬레이션을 사용하고자 할 때, 어떤 클라우드를 쓰는게 좋은지, 클라우드에 시스템을 어떻게 구성해야 하는지, 해석 코드는 어떻게 설치해야 하는지 등의 여러가지 어려움에 부딪히게 됩니다.",
                "이런 문제들에 대해 최적의 솔루션을 제안해 드립니다."
            ]
        }
    ]

    const fields = [
        {
            category: "항공우주",
            items: ["항공기/유도무기 공력 DB 구축", "항공기 외장분리", "무장창 음향하중", "우주발사체 배기 플룸", "발사대 화염유도로", "터보펌프", "로켓 단분리", "초음속 흡입구", "그리드 핀"]
        },
        {
            category: "자동차/철도차량",
            items: ["헤드램프", "라디에이터", "실내 공조", "제상", "주행 저항", "교행", "측풍", "열차풍", "미기압파", "형상 최적화", "융설", "하이퍼튜브", "스크린도어 풍압", "터널 화재", "배터리"]
        },
        {
            category: "조선해양",
            items: ["선박 저항/자항", "부가물", "프로펠러 성능/캐비테이션", "선박 운동", "슬로싱", "배가스 확산", "공장 환기", "선박 배관시스템", "파랑 생성", "해양플랜트 라이저", "FPSO", "파랑저감장치", "사고 분석"]
        },
        {
            category: "건설/토목",
            items: ["건축물 풍압", "풍환경", "연돌 현상", "교량", "댐 여수로", "빗물 터널", "환기"]
        },
        {
            category: "전기/전자",
            items: ["클린룸", "변압기", "차단기", "전동기", "인버터", "디스펜싱", "MLCC", "냉장고", "오븐", "에어컨", "코팅"]
        },
        {
            category: "에너지/환경",
            items: ["풍력터빈", "태양광 발전", "조류발전", "보일러", "엔진", "PPS", "HRSG", "SCR", "스크러버", "건조기"]
        },
        {
            category: "기타",
            items: ["정수장", "혼합기", "열교환기", "팬", "압축기", "터빈", "펌프", "온수롤", "화재"]
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
                        CONSULTING SERVICES
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

                {/* Services Section - SpaceX Style Layout */}
                <div className="py-[8rem] px-[8rem] bg-neutral-900">
                    <div className="max-w-[90rem] mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className="mb-[12rem]">
                                <div className="flex items-start">
                                    {/* Left Side - Text Content (2/3) */}
                                    <div className="w-2/3 pr-[4rem]">
                                        {/* Service Header */}
                                        <div className="mb-[3rem]">
                                            <div className="flex items-center mb-[2rem]">
                                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">SERVICE {String(index + 1).padStart(2, '0')}</span>
                                            </div>
                                            <h2 className="text-[2.5rem] font-[600] mb-[2rem] leading-tight">
                                                {service.title}
                                            </h2>
                                        </div>

                                        {/* Service Details */}
                                        <div className="space-y-[1rem]">
                                            {service.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="border-l border-gray-800 max-w-[30rem] gap-[0rem]">
                                                    <p className="text-[1.125rem] text-gray-300 leading-relaxed font-[400] ">
                                                        {detail}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Right Side - Real Image (1/3) */}
                                    <div className="w-2/3">
                                        <div className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-800">
                                            <img 
                                                src={imageUrls[index % imageUrls.length] || imageUrls[0]} 
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fields Section - Minimal Grid */}
                <div className="py-[8rem] px-[8rem] bg-gray-950">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">EXPERTISE</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                주요 컨설팅 수행 분야
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                            {fields.map((field, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300">
                                        <h3 className="text-[1.5rem] font-[600] mb-[1.5rem] text-white group-hover:text-gray-300 transition-colors">
                                            {field.category}
                                        </h3>
                                        <div className="space-y-[0.75rem]">
                                            {field.items.map((item, itemIndex) => (
                                                <div key={itemIndex} className="text-gray-400 text-[1rem] font-[400]">
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section - SpaceX Style */}
                {/* <div className="py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto text-center">
                        <div className="mb-[5rem]">
                            <div className="flex items-center justify-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">LAUNCH</span>
                                <div className="w-[4rem] h-px bg-white ml-[2rem]"></div>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                Launch BARAM on Azure
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400]">
                                클라우드 기반 CFD 시뮬레이션 솔루션을 경험해보세요
                            </p>
                        </div>
                        
                        <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-black bg-white hover:bg-gray-200 transition-colors duration-300">
                            <span className="relative z-10">지금 시작하기</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div> */}
            </div>
        </Layout>
    );
}