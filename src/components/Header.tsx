export default function Header() {
  return (
    <div className="relative inset-x-0 top-0 z-20 snap-none pointer-events-none">
      <div className="absolute w-full h-[4.5rem] py-[1rem] flex items-center justify-evenly pointer-events-auto">
        <HeaderTitle/>
        <HeaderLink name="CONSULTING"/>
        <HeaderLink name="PRODUCT"/>
        <HeaderLink name="EDUCATION"/>
        <HeaderLink name="ABOUT US"/>
        <HeaderLink name="CONTACT US"/>
        <HeaderLink name="COMMUNITY"/>
        <UpcomingEvents/>
      </div>
    </div>
  )
}

function HeaderTitle() {
  return (
    <div className="text-white text-[1.25rem] font-[900]">
      NEXTFOAM
    </div>
  )
}

function HeaderLink({ name }: { name: string }) {
  return (
    <div className="text-medium text-[.8rem] font-[600] text-white/80 hover:text-white transition-colors">
      {name}
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
