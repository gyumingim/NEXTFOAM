export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Vertical Line */}
      <div className="w-px h-[4rem] bg-white mx-auto"></div>
      
      {/* Contact Information */}
      <div className="text-center py-[4rem] px-[4rem]">
        <p className="text-[1rem] text-gray-300 max-w-[48rem] mx-auto">
          CFD 시뮬레이션 및 엔지니어링 솔루션에 대한 문의사항이 있으시면 
          <a href="mailto:info@nextfoam.com" className="text-white hover:text-gray-300 transition-colors">
            info@nextfoam.com
          </a>
          으로 연락해주세요
        </p>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-800">
        <div className="max-w-[90rem] mx-auto px-[4rem] py-[2rem]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Close Button */}
            <div className="w-[2rem] h-[2rem] bg-gray-800 rounded-full flex items-center justify-center mb-[1rem] md:mb-0">
              <svg className="w-[1rem] h-[1rem] text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-[2rem] mb-[1rem] md:mb-0">
              <a href="#" className="text-[0.875rem] text-white hover:text-gray-300 transition-colors tracking-widest">
                CAREERS
              </a>
              <a href="#" className="text-[0.875rem] text-white hover:text-gray-300 transition-colors tracking-widest">
                UPDATES
              </a>
              <a href="#" className="text-[0.875rem] text-white hover:text-gray-300 transition-colors tracking-widest">
                PRIVACY POLICY
              </a>
              <a href="#" className="text-[0.875rem] text-white hover:text-gray-300 transition-colors tracking-widest">
                SUPPLIERS
              </a>
            </div>

            {/* Copyright */}
            <div className="text-[0.875rem] text-white tracking-widest">
              ©2025 NEXTFOAM
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}