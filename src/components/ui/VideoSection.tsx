import { WhiteTitle, WhiteSubTitle } from './Text'

interface VideoSectionProps {
  videoSrc: string
  title: string
  subtitle: string
  buttonText: string
  overlay?: boolean
  objectPosition?: string
  className?: string
}

export function VideoSection({ 
  videoSrc, 
  title, 
  subtitle, 
  buttonText,
  overlay = true,
  objectPosition = "center",
  className = ""
}: VideoSectionProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        autoPlay 
        muted 
        loop 
        playsInline
        style={{ objectPosition }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {overlay && <div className="absolute inset-0 bg-black/30" />}
      <div className="relative z-10 h-full flex items-center px-[7rem]">
        <div className="flex flex-col gap-[1rem] max-w-[720px]">
          <WhiteTitle>{title}</WhiteTitle>
          <WhiteSubTitle>{subtitle}</WhiteSubTitle>
          <div className="text-white text-[.875rem] mt-[2rem] py-[0.5rem] px-[1rem] border-[0.01rem] border-white rounded-[0.2rem] w-fit">
            {buttonText}
          </div>
        </div>
      </div>
    </div>
  )
}

interface VideoSectionContainedProps {
  videoSrc: string
  title: string
  subtitle: string
  buttonText: string
  className?: string
}

export function VideoSectionContained({ 
  videoSrc, 
  title, 
  subtitle, 
  buttonText,
  className = ""
}: VideoSectionContainedProps) {
  return (
    <div className={`relative w-full h-full ${className} my-[4rem]`}>
      <video 
        className="absolute inset-0 w-full h-full object-contain bg-black" 
        style={{ objectPosition: '100% center' }} 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center">
        <div className="flex flex-col gap-[1rem] max-w-[720px]">
          <WhiteTitle>{title}</WhiteTitle>
          <WhiteSubTitle>{subtitle}</WhiteSubTitle>
          <div className="text-white text-[.875rem] mt-[2rem] py-[0.5rem] px-[1rem] border-[0.01rem] border-white rounded-[0.2rem] w-fit">
            {buttonText}
          </div>
        </div>
      </div>
    </div>
  )
}
