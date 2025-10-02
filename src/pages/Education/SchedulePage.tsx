import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images

export default function EducationSchedulePage() {
    const educationSchedule = {
        year: "2025",
        description: "넥스트폼 교육강좌를 찾아 주셔서 감사합니다. 현장에 대한 경험이 풍부한 컨설턴트와 엔지니어가 전문적인 교육을 통해 여러분을 도와드리고 있으니 많은 참여 부탁드립니다.",
        courses: [
            {
                name: "CFD 실전교육 BARAM & OpenFOAM",
                schedule: [
                    { month: "1월", date: "20~23" },
                    { month: "3월", date: "25~28" },
                    { month: "4월", date: "22~25" },
                    { month: "6월", date: "24~27" },
                    { month: "8월", date: "19~22" },
                    { month: "11월", date: "18~21" }
                ],
                price: "150만원",
                features: [
                    "CLI를 이용한 OpenFOAM 사용법과 GUI를 이용한 BARAM CFD 실습",
                    "4일 과정으로 진행",
                    "이제 누구나 어디서든 CFD 활용이 가능",
                    "이틀간의 OpenFOAM 교육 혹은 BARAM 교육만을 수강 가능",
                    "모든 교육과정은 학생할인 30% 적용 (박사과정까지)",
                    "교육시간: 오전 10시 - 오후 5시"
                ]
            }
        ],
        onSiteEducation: {
            description: "교육을 희망하시는 개인이나 단체에서 신청이 가능합니다.",
            price: "200만원 (부가세포함) / 1일",
            requirements: [
                "교육장 제공 필요",
                "실습 PC 제공 필요"
            ],
            contact: {
                name: "오광호",
                phone: "070-8796-3019",
                mobile: "010-4602-0316",
                email: "gwangeo@nextfoam.co.kr"
            }
        }
    }

    const educationInfo = {
        time: "오전 10:00 ~ 오후 5:00",
        location: {
            name: "넥스트폼 교육장",
            address: "서울특별시 금천구 디지털로9길 32, A동 1106호",
            mapUrl: "http://www.nextfoam.co.kr/map.php",
            parking: "주차지원이 되지 않습니다. 대중 교통 이용을 부탁드립니다."
        },
        requirements: [
            "실습용 노트북",
            "운영체제(OS)는 상관없습니다",
            "OpenFOAM을 미리 설치해 오셔도 상관없습니다"
        ],
        application: {
            deadline: "교육일 1주 전까지",
            methods: ["온라인", "전화", "메일"],
            confirmation: [
                "교육 접수 확인 이메일 송부",
                "해당 교육 확정 (교육 시작일 약 10일 전이나 4인이상 참가 신청) 시 참가안내문 이메일 송부"
            ],
            cancellation: "각 교육 시작 3일 전까지 연락바랍니다",
            contact: {
                name: "이혜진 부장",
                email: "hjlee@nextfoam.co.kr",
                phone: "070-8796-3025"
            },
            note: "각 교육은 선착순 마감됩니다"
        },
        payment: {
            methods: ["세금계산서", "카드결제 가능"],
            invoice: "세금계산서가 필요하신 분은 사업자등록증/세금계산서 수령 담당자의 e-mail 송부 필요",
            contact: "hjlee@nextfoam.co.kr",
            includes: ["교재", "중식 제공"]
        }
    }

    const scheduleStats = [
        { label: "교육 과정", value: "1", unit: "개" },
        { label: "교육 일정", value: "6", unit: "회" },
        { label: "교육 기간", value: "4", unit: "일" },
        { label: "교육비", value: "150만원", unit: "VAT포함" }
    ]

    const benefits = [
        {
            title: "전문 강사진",
            description: "현장 경험이 풍부한 컨설턴트와 엔지니어",
            icon: "👨‍🏫"
        },
        {
            title: "실습 중심",
            description: "CLI와 GUI를 모두 활용한 종합적인 교육",
            icon: "💻"
        },
        {
            title: "학생 할인",
            description: "박사과정까지 학생할인 30% 적용",
            icon: "🎓"
        },
        {
            title: "유연한 수강",
            description: "OpenFOAM 또는 BARAM 교육만 선택 수강 가능",
            icon: "⚡"
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
                        EDUCATION SCHEDULE
                    </div>

                    {/* Hero Description */}
                    <div className="absolute w-full flex text-center items-center h-full justify-center mt-[8rem] text-[1.5rem] font-[400] text-gray-300 z-0 pointer-events-none">
                        2025년 년간 교육 일정 및 신청
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
                                {educationSchedule.year}년 년간 교육 일정
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                {educationSchedule.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Schedule Stats Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">SCHEDULE STATS</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                교육 일정 현황
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
                            {scheduleStats.map((stat, index) => (
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

                {/* Education Schedule Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">EDUCATION SCHEDULE</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                교육 일정
                            </h2>
                        </div>
                        
                        <div className="space-y-[4rem]">
                            {educationSchedule.courses.map((course, index) => (
                                <div key={index} className="border border-gray-800 rounded-lg p-[3rem] hover:border-gray-700 transition-colors duration-300">
                                    {/* Course Header */}
                                    <div className="mb-[3rem]">
                                        <div className="flex items-start justify-between mb-[2rem]">
                                            <div className="flex-1">
                                                <div className="flex items-center mb-[1rem]">
                                                    <span className="px-[1rem] py-[0.5rem] bg-gray-800 text-gray-300 text-[0.75rem] rounded mr-[1rem]">
                                                        4일 과정
                                                    </span>
                                                    <span className="text-[1.5rem] font-[800] text-white mr-[1rem]">
                                                        {course.price}
                                                    </span>
                                                    <span className="text-[0.875rem] text-gray-400">
                                                        VAT포함
                                                    </span>
                                                </div>
                                                <h3 className="text-[2rem] font-[600] text-white mb-[1rem] leading-tight">
                                                    {course.name}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Course Features */}
                                        <div className="mb-[2rem]">
                                            <h4 className="text-[1.25rem] font-[600] text-white mb-[1rem]">
                                                교육 특징
                                            </h4>
                                            <div className="grid md:grid-cols-2 gap-[1rem]">
                                                {course.features.map((feature, featureIndex) => (
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

                                    {/* Schedule */}
                                    <div>
                                        <h4 className="text-[1.25rem] font-[600] text-white mb-[2rem]">
                                            교육 일정
                                        </h4>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1rem]">
                                            {course.schedule.map((schedule, scheduleIndex) => (
                                                <div key={scheduleIndex} className="border border-gray-700 rounded-lg p-[1.5rem] text-center">
                                                    <div className="text-[1rem] font-[600] text-white mb-[0.5rem]">
                                                        {schedule.month}
                                                    </div>
                                                    <div className="text-[0.875rem] text-gray-300">
                                                        {schedule.date}
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

                {/* On-Site Education Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">ON-SITE EDUCATION</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                On-Site 교육
                            </h2>
                        </div>
                        
                        <div className="border border-gray-800 rounded-lg p-[3rem]">
                            <div className="mb-[2rem]">
                                <p className="text-[1rem] text-gray-300 leading-relaxed mb-[2rem]">
                                    {educationSchedule.onSiteEducation.description}
                                </p>
                                <div className="flex items-center mb-[2rem]">
                                    <span className="text-[1.5rem] font-[800] text-white mr-[1rem]">
                                        {educationSchedule.onSiteEducation.price}
                                    </span>
                                </div>
                            </div>

                            <div className="mb-[2rem]">
                                <h4 className="text-[1.25rem] font-[600] text-white mb-[1rem]">
                                    필요 사항
                                </h4>
                                <div className="space-y-[0.5rem]">
                                    {educationSchedule.onSiteEducation.requirements.map((requirement, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="w-[0.5rem] h-[0.5rem] bg-white rounded-full mt-[0.5rem] mr-[1rem] flex-shrink-0"></div>
                                            <p className="text-[0.875rem] text-gray-300 leading-relaxed">
                                                {requirement}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[1.25rem] font-[600] text-white mb-[1rem]">
                                    상담 문의
                                </h4>
                                <div className="space-y-[0.5rem]">
                                    <p className="text-[1rem] text-white font-[600]">
                                        {educationSchedule.onSiteEducation.contact.name}
                                    </p>
                                    <p className="text-[0.875rem] text-gray-300">
                                        {educationSchedule.onSiteEducation.contact.phone}
                                    </p>
                                    <p className="text-[0.875rem] text-gray-300">
                                        {educationSchedule.onSiteEducation.contact.mobile}
                                    </p>
                                    <a href={`mailto:${educationSchedule.onSiteEducation.contact.email}`} className="text-[0.875rem] text-gray-300 hover:text-white transition-colors">
                                        {educationSchedule.onSiteEducation.contact.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education Information Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">EDUCATION INFORMATION</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                교육 안내
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-[4rem]">
                            {/* Education Time & Location */}
                            <div>
                                <h3 className="text-[1.5rem] font-[600] text-white mb-[2rem]">
                                    교육 시간 및 교육 장소
                                </h3>
                                <div className="space-y-[2rem]">
                                    <div className="border border-gray-800 rounded-lg p-[2rem]">
                                        <h4 className="text-[1rem] font-[600] text-white mb-[1rem]">
                                            교육 시간
                                        </h4>
                                        <p className="text-[0.875rem] text-gray-300">
                                            {educationInfo.time}
                                        </p>
                                    </div>
                                    
                                    <div className="border border-gray-800 rounded-lg p-[2rem]">
                                        <h4 className="text-[1rem] font-[600] text-white mb-[1rem]">
                                            교육 장소
                                        </h4>
                                        <p className="text-[0.875rem] text-gray-300 mb-[0.5rem]">
                                            {educationInfo.location.name}
                                        </p>
                                        <p className="text-[0.875rem] text-gray-300 mb-[0.5rem]">
                                            {educationInfo.location.address}
                                        </p>
                                        <a href={educationInfo.location.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[0.875rem] text-gray-300 hover:text-white transition-colors">
                                            찾아오시는 길 안내
                                        </a>
                                        <p className="text-[0.875rem] text-gray-400 mt-[0.5rem]">
                                            {educationInfo.location.parking}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Education Requirements */}
                            <div>
                                <h3 className="text-[1.5rem] font-[600] text-white mb-[2rem]">
                                    교육 준비물
                                </h3>
                                <div className="border border-gray-800 rounded-lg p-[2rem]">
                                <div className="space-y-[1rem]">
                                        {educationInfo.requirements.map((requirement, index) => (
                                            <div key={index} className="flex items-start">
                                                <div className="w-[0.5rem] h-[0.5rem] bg-white rounded-full mt-[0.5rem] mr-[1rem] flex-shrink-0"></div>
                                                <p className="text-[0.875rem] text-gray-300 leading-relaxed">
                                                    {requirement}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Application & Payment Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">APPLICATION & PAYMENT</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                교육 신청 및 결제
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-[4rem]">
                            {/* Application Information */}
                            <div>
                                <h3 className="text-[1.5rem] font-[600] text-white mb-[2rem]">
                                    교육 신청 및 문의
                                </h3>
                                <div className="space-y-[2rem]">
                                    <div className="border border-gray-800 rounded-lg p-[2rem]">
                                        <h4 className="text-[1rem] font-[600] text-white mb-[1rem]">
                                            신청 방법
                                            </h4>
                                        <p className="text-[0.875rem] text-gray-300 mb-[0.5rem]">
                                            신청: {educationInfo.application.deadline}
                                        </p>
                                        <div className="flex flex-wrap gap-[0.5rem]">
                                            {educationInfo.application.methods.map((method, index) => (
                                                <span key={index} className="px-[0.75rem] py-[0.25rem] bg-gray-800 text-gray-300 text-[0.75rem] rounded">
                                                    {method}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="border border-gray-800 rounded-lg p-[2rem]">
                                        <h4 className="text-[1rem] font-[600] text-white mb-[1rem]">
                                            접수 & 등록 확인
                                        </h4>
                                        <div className="space-y-[0.5rem]">
                                            {educationInfo.application.confirmation.map((confirm, index) => (
                                                <div key={index} className="flex items-start">
                                                    <div className="w-[0.5rem] h-[0.5rem] bg-white rounded-full mt-[0.5rem] mr-[1rem] flex-shrink-0"></div>
                                                    <p className="text-[0.875rem] text-gray-300 leading-relaxed">
                                                        {confirm}
                                            </p>
                                        </div>
                                    ))}
                                        </div>
                                    </div>
                                    
                                    <div className="border border-gray-800 rounded-lg p-[2rem]">
                                        <h4 className="text-[1rem] font-[600] text-white mb-[1rem]">
                                            담당자
                                        </h4>
                                        <p className="text-[0.875rem] text-white font-[600] mb-[0.5rem]">
                                            {educationInfo.application.contact.name}
                                        </p>
                                        <p className="text-[0.875rem] text-gray-300 mb-[0.5rem]">
                                            {educationInfo.application.contact.email}
                                        </p>
                                        <p className="text-[0.875rem] text-gray-300">
                                            {educationInfo.application.contact.phone}
                                        </p>
                                        <p className="text-[0.75rem] text-gray-400 mt-[1rem]">
                                            {educationInfo.application.note}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Payment Information */}
                            <div>
                                <h3 className="text-[1.5rem] font-[600] text-white mb-[2rem]">
                                    교육비 결제
                                </h3>
                                <div className="space-y-[2rem]">
                                    <div className="border border-gray-800 rounded-lg p-[2rem]">
                                        <h4 className="text-[1rem] font-[600] text-white mb-[1rem]">
                                            결제 방법
                                        </h4>
                                        <div className="flex flex-wrap gap-[0.5rem] mb-[1rem]">
                                            {educationInfo.payment.methods.map((method, index) => (
                                                <span key={index} className="px-[0.75rem] py-[0.25rem] bg-gray-800 text-gray-300 text-[0.75rem] rounded">
                                                    {method}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-[0.875rem] text-gray-300">
                                            {educationInfo.payment.invoice}
                                        </p>
                                        <p className="text-[0.875rem] text-gray-300 mt-[0.5rem]">
                                            {educationInfo.payment.contact}
                                        </p>
                                    </div>
                                    
                                    <div className="border border-gray-800 rounded-lg p-[2rem]">
                                        <h4 className="text-[1rem] font-[600] text-white mb-[1rem]">
                                            포함 사항
                                        </h4>
                                        <div className="flex flex-wrap gap-[0.5rem]">
                                            {educationInfo.payment.includes.map((item, index) => (
                                                <span key={index} className="px-[0.75rem] py-[0.25rem] bg-gray-800 text-gray-300 text-[0.75rem] rounded">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education Application Form Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">EDUCATION APPLICATION</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                교육 신청
                            </h2>
                        </div>
                        
                        <div className="border border-gray-800 rounded-lg p-[3rem]">
                                <form className="space-y-[2rem]">
                                <div className="grid md:grid-cols-2 gap-[2rem]">
                                    <div>
                                        <label className="block text-[1rem] font-[600] text-white mb-[0.5rem]">
                                            교육 과정 <span className="text-red-500">*</span>
                                        </label>
                                        <select 
                                            required
                                            className="w-full px-[1rem] py-[0.75rem] bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none transition-colors"
                                        >
                                            <option value="">교육 과정을 선택하세요</option>
                                            <option value="baram-openfoam">BARAM/OpenFOAM 활용 교육</option>
                                            <option value="hpc">CAE/AI 엔지니어를 위한 HPC 교육</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-[1rem] font-[600] text-white mb-[0.5rem]">
                                            교육 일정 <span className="text-red-500">*</span>
                                        </label>
                                        <select 
                                            required
                                            className="w-full px-[1rem] py-[0.75rem] bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none transition-colors"
                                        >
                                            <option value="">교육 일정을 선택해 주세요</option>
                                            <option value="june">6월 24~27 BARAM/OpenFOAM 활용 교육</option>
                                            <option value="august">8월 19~22 BARAM/OpenFOAM 활용 교육</option>
                                            <option value="november">11월 18~21 BARAM/OpenFOAM 활용 교육</option>
                                            <option value="onsite">On-Site 교육(일정은 저희가 연락 드리겠습니다)</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-[2rem]">
                                    <div>
                                        <label className="block text-[1rem] font-[600] text-white mb-[0.5rem]">
                                            이름 <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            required
                                            className="w-full px-[1rem] py-[0.75rem] bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                                            placeholder="이름을 입력하세요"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-[1rem] font-[600] text-white mb-[0.5rem]">
                                            기관/부서 <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            required
                                            className="w-full px-[1rem] py-[0.75rem] bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                                            placeholder="기관명 또는 부서명을 입력하세요"
                                        />
                                    </div>
                                    </div>
                                    
                                <div className="grid md:grid-cols-2 gap-[2rem]">
                                    <div>
                                        <label className="block text-[1rem] font-[600] text-white mb-[0.5rem]">
                                            이메일 <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="email" 
                                            required
                                            className="w-full px-[1rem] py-[0.75rem] bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                                            placeholder="이메일 주소를 입력하세요"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-[1rem] font-[600] text-white mb-[0.5rem]">
                                            전화번호 <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="tel" 
                                            required
                                            className="w-full px-[1rem] py-[0.75rem] bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                                            placeholder="전화번호를 입력하세요"
                                        />
                                    </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-[1rem] font-[600] text-white mb-[0.5rem]">
                                        연구분야/코멘트
                                        </label>
                                        <textarea 
                                            rows={4}
                                            className="w-full px-[1rem] py-[0.75rem] bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors resize-none"
                                        placeholder="연구분야나 특별한 요청사항이 있으시면 입력해 주세요"
                                        ></textarea>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <input 
                                            type="checkbox" 
                                            required
                                            className="mt-[0.25rem] mr-[0.75rem] w-[1rem] h-[1rem] bg-gray-900 border border-gray-700 rounded text-white focus:ring-white focus:ring-2"
                                        />
                                        <label className="text-[0.875rem] text-gray-300">
                                        개인정보 취급방침에 동의합니다 <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                    
                                    <button 
                                        type="submit"
                                        className="w-full py-[1rem] px-[2rem] bg-white text-black font-[600] text-[1rem] rounded-lg hover:bg-gray-200 transition-colors duration-300"
                                    >
                                    교육 신청
                                    </button>
                                </form>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-900 py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto text-center">
                        <div className="mb-[5rem]">
                            <div className="flex items-center justify-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">READY TO APPLY</span>
                                <div className="w-[4rem] h-px bg-white ml-[2rem]"></div>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                지금 바로 신청하세요
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