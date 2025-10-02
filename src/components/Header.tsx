export default function Header() {
  return (
    <div className="relative inset-x-0 top-0 z-20 snap-none pointer-events-none">
      <div className="absolute w-full h-[4.5rem] py-[1rem] flex items-center justify-evenly pointer-events-auto">
        <HeaderTitle/>
        <DropdownMenu 
          name="CONSULTING" 
          items={[
            { name: "INTRODUCE", href: "/consulting/introduce" },
            { name: "PORTFOLIO", href: "/consulting/portfolio" },
            { name: "PERFORMANCE", href: "/consulting/performance" }
          ]}
        />
        <DropdownMenu 
          name="PRODUCT" 
          items={[
            { name: "BARAM", href: "/product/baram" },
            { name: "FAMUS", href: "/product/famus" }
          ]}
        />
        <DropdownMenu 
          name="EDUCATION" 
          items={[
            { name: "CONTENT", href: "/education/content" },
            { name: "SCHEDULE AND APPLY", href: "/education/schedule" }
          ]}
        />
        <DropdownMenu 
          name="ABOUT US" 
          items={[
            { name: "INTRODUCE", href: "/about/introduce" },
            { name: "ACADEMIC RESOURCES", href: "/about/academic" },
            { name: "TECHNICAL DOCUMENTATION", href: "/about/technical" },
            { name: "NEWS RELEASE", href: "/about/news-release" },
            { name: "COMPANY NEWS", href: "/about/company-news" }
          ]}
        />
        <HeaderLink name="CONTACT US" href="/contact"/>
        <DropdownMenu 
          name="COMMUNITY" 
          items={[
            { name: "OKUCC", href: "/community/okucc" }
          ]}
        />
        <UpcomingEvents/>
      </div>
    </div>
  )
}

function HeaderTitle() {
  return (
    <a 
      href="/" 
      className="text-white text-[1.25rem] font-[800] cursor-pointer"
    >
      NEXTFOAM
    </a>
  )
}

function HeaderLink({ name, href }: { name: string; href?: string }) {
  return (
    <a 
      href={href || "#"} 
      className="text-medium text-[.8rem] font-[600] text-white/80 hover:text-white transition-colors cursor-pointer"
    >
      {name}
    </a>
  )
}

function DropdownMenu({ name, items }: { name: string; items: { name: string; href: string }[] }) {
  return (
    <div className="relative group bg-none">
      <div className="text-medium text-[.8rem] font-[600] text-white/80 hover:text-white cursor-pointer relative">
        {name}
        <span className="absolute -right-5 top-0 group-hover:block hidden">▼</span>
      </div>
      <div className="absolute bg-none top-full left-0 w-48 vopacity-0 invisible group-hover:opacity-100 group-hover:visible z-50">
        <div className="py-2">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function UpcomingEvents() {
  return (
    <div className="text-white text-[.625rem] p-2 border-[0.01rem] border-white/60 rounded-[0.2rem] ml-[5rem] font-[500] backdrop-blur-[2px] bg-white/0">
      <span className="mr-[4rem]">
      UPCOMING EVENTS
      </span>
      <span>
        FEBRUARY 24, 2025
      </span>
    </div>
  )
}
