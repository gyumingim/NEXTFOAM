import Layout from "../../components/Layout"
import Header from "../../components/Header"

// Import consulting images
export default function ContactUsPage() {
    const contactInfo = {
        address: "서울 금천구 디지털로9길 32 갑을그레이트밸리 A-1106호",
        email: "marketing@nextfoam.co.kr",
        phone: "+82-70-8796-3019",
        website: "blog.nextfoam.co.kr",
        naverBlog: "blog.naver.com/nextfoam7"
    }

    const socialLinks = [
        { name: "GitHub", icon: "💻", url: "#" },
        { name: "YouTube", icon: "📺", url: "#" },
        { name: "LinkedIn", icon: "💼", url: "#" },
        { name: "Instagram", icon: "📷", url: "#" },
        { name: "X", icon: "🐦", url: "#" },
        { name: "Facebook", icon: "📘", url: "#" }
    ]

    const services = [
        {
            title: "CFD 컨설팅",
            description: "전문적인 CFD 해석 및 설계 최적화 서비스",
            icon: "🌊"
        },
        {
            title: "솔버 개발",
            description: "BARAM, FAMUS 등 자체 개발 솔버 기술 지원",
            icon: "⚙️"
        },
        {
            title: "교육 서비스",
            description: "CFD 기초부터 고급 과정까지 체계적인 교육",
            icon: "🎓"
        },
        {
            title: "기술 지원",
            description: "24/7 기술 지원 및 문제 해결 서비스",
            icon: "🛠️"
        }
    ]

    const inquiryTypes = [
        { type: "일반 문의", description: "서비스 및 제품에 대한 일반적인 문의" },
        { type: "기술 지원", description: "CFD 해석 및 솔버 사용 관련 기술 지원" },
        { type: "교육 신청", description: "CFD 교육 과정 및 워크샵 신청" },
        { type: "컨설팅 문의", description: "프로젝트 기반 CFD 컨설팅 서비스 문의" },
        { type: "파트너십", description: "기술 파트너십 및 협력 방안 문의" },
        { type: "기타", description: "기타 문의사항" }
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
                        CONTACT US
                    </div>

                    {/* Hero Description */}
                    <div className="absolute w-full flex text-center items-center h-full justify-center mt-[8rem] text-[1.5rem] font-[400] text-gray-300 z-0 pointer-events-none">
                        상담이 필요한 내용과 연락처를 남겨 주시면 최대한 빨리 연락 드리겠습니다
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">GET IN TOUCH</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                함께 성장하는 파트너
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] leading-relaxed">
                                CFD 기술의 새로운 가능성을 함께 탐구하고 혁신적인 솔루션을 만들어가세요. 
                                전문가 팀이 최고의 서비스를 제공하겠습니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">CONTACT INFORMATION</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                연락처 정보
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-[4rem]">
                            {/* Contact Details */}
                            <div className="space-y-[2rem]">
                                <div className="border border-gray-800 rounded-lg p-[2rem]">
                                    <h3 className="text-[1.5rem] font-[600] text-white mb-[1rem]">
                                        주소
                                    </h3>
                                    <p className="text-[1rem] text-gray-300 leading-relaxed">
                                        {contactInfo.address}
                                    </p>
                                </div>
                                
                                <div className="border border-gray-800 rounded-lg p-[2rem]">
                                    <h3 className="text-[1.5rem] font-[600] text-white mb-[1rem]">
                                        이메일
                                    </h3>
                                    <a href={`mailto:${contactInfo.email}`} className="text-[1rem] text-gray-300 hover:text-white transition-colors">
                                        {contactInfo.email}
                                    </a>
                                </div>
                                
                                <div className="border border-gray-800 rounded-lg p-[2rem]">
                                    <h3 className="text-[1.5rem] font-[600] text-white mb-[1rem]">
                                        전화번호
                                    </h3>
                                    <a href={`tel:${contactInfo.phone}`} className="text-[1rem] text-gray-300 hover:text-white transition-colors">
                                        {contactInfo.phone}
                                    </a>
                                </div>
                                
                                <div className="border border-gray-800 rounded-lg p-[2rem]">
                                    <h3 className="text-[1.5rem] font-[600] text-white mb-[1rem]">
                                        웹사이트
                                    </h3>
                                    <div className="space-y-[0.5rem]">
                                        <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="block text-[1rem] text-gray-300 hover:text-white transition-colors">
                                            {contactInfo.website}
                                        </a>
                                        <a href={`https://${contactInfo.naverBlog}`} target="_blank" rel="noopener noreferrer" className="block text-[1rem] text-gray-300 hover:text-white transition-colors">
                                            {contactInfo.naverBlog}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Social Links */}
                            <div>
                                <h3 className="text-[1.5rem] font-[600] text-white mb-[2rem]">
                                    소셜 미디어
                                </h3>
                                <div className="grid grid-cols-2 gap-[1rem]">
                                    {socialLinks.map((social, index) => (
                                        <a key={index} href={social.url} className="group">
                                            <div className="border border-gray-800 rounded-lg p-[1.5rem] hover:border-gray-700 transition-colors duration-300">
                                                <div className="flex items-center">
                                                    <span className="text-[1.5rem] mr-[1rem]">{social.icon}</span>
                                                    <span className="text-[1rem] font-[600] text-white group-hover:text-gray-300 transition-colors">
                                                        {social.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="bg-gray-950 py-[8rem] px-[8rem]">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">OUR SERVICES</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                제공 서비스
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                            {services.map((service, index) => (
                                <div key={index} className="group">
                                    <div className="border border-gray-800 rounded-lg p-[2rem] hover:border-gray-700 transition-colors duration-300 h-full">
                                        <div className="flex items-center mb-[1.5rem]">
                                            <span className="text-[2rem] mr-[1rem]">{service.icon}</span>
                                            <h3 className="text-[1.25rem] font-[600] text-white group-hover:text-gray-300 transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <div className="text-gray-400 text-[0.875rem] font-[400] leading-relaxed">
                                            {service.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="bg-black py-[8rem] px-[8rem]">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="mb-[5rem]">
                            <div className="flex items-center mb-[2rem]">
                                <div className="w-[4rem] h-px bg-white mr-[2rem]"></div>
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">SEND MESSAGE</span>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                문의하기
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-[4rem]">
                            {/* Inquiry Types */}
                            <div>
                                <h3 className="text-[1.5rem] font-[600] text-white mb-[2rem]">
                                    문의 유형
                                </h3>
                                <div className="space-y-[1rem]">
                                    {inquiryTypes.map((inquiry, index) => (
                                        <div key={index} className="border border-gray-800 rounded-lg p-[1.5rem] hover:border-gray-700 transition-colors duration-300">
                                            <h4 className="text-[1rem] font-[600] text-white mb-[0.5rem]">
                                                {inquiry.type}
                                            </h4>
                                            <p className="text-[0.875rem] text-gray-400">
                                                {inquiry.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Contact Form */}
                            <div>
                                <form className="space-y-[2rem]">
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
                                            직위/과정
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-[1rem] py-[0.75rem] bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                                            placeholder="직위 또는 과정을 입력하세요"
                                        />
                                    </div>
                                    
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
                                    
                                    <div>
                                        <label className="block text-[1rem] font-[600] text-white mb-[0.5rem]">
                                            문의 사항 <span className="text-red-500">*</span>
                                        </label>
                                        <textarea 
                                            required
                                            rows={4}
                                            className="w-full px-[1rem] py-[0.75rem] bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors resize-none"
                                            placeholder="문의하실 내용을 자세히 입력해 주세요"
                                        ></textarea>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <input 
                                            type="checkbox" 
                                            required
                                            className="mt-[0.25rem] mr-[0.75rem] w-[1rem] h-[1rem] bg-gray-900 border border-gray-700 rounded text-white focus:ring-white focus:ring-2"
                                        />
                                        <label className="text-[0.875rem] text-gray-300">
                                            개인정보 취급 방침에 동의합니다 <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                    
                                    <button 
                                        type="submit"
                                        className="w-full py-[1rem] px-[2rem] bg-white text-black font-[600] text-[1rem] rounded-lg hover:bg-gray-200 transition-colors duration-300"
                                    >
                                        보내기
                                    </button>
                                </form>
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
                                <span className="text-[0.875rem] font-[600] text-gray-400 tracking-widest">READY TO START</span>
                                <div className="w-[4rem] h-px bg-white ml-[2rem]"></div>
                            </div>
                            <h2 className="text-[3rem] font-[600] mb-[2rem]">
                                지금 바로 시작하세요
                            </h2>
                            <p className="text-[1.25rem] text-gray-400 mb-[4rem] font-[400] max-w-[64rem] mx-auto">
                                CFD 기술의 새로운 가능성을 함께 탐구하고 혁신적인 솔루션을 만들어가세요
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-[2rem]">
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-black bg-white hover:bg-gray-200 transition-colors duration-300">
                                <span className="relative z-10">바로 문의하기</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative inline-flex items-center justify-center px-[3rem] py-[1rem] text-[1.125rem] font-[600] text-white border border-gray-600 hover:border-white transition-colors duration-300">
                                <span className="relative z-10">서비스 소개</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}