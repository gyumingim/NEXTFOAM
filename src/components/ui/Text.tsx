import React from 'react'

interface TextProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

// 기본 텍스트 컴포넌트
export function Text({ children, className = "", onClick }: TextProps) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}

// 날짜 텍스트 (작은 회색 텍스트)
export function DateText({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-[0.875rem] font-[600] text-white uppercase tracking-wide mb-2 ${className}`}>
      {children}
    </Text>
  )
}

// 메인 제목 (큰 굵은 텍스트)
export function MainTitle({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-[4rem] font-[600] text-white mb-4 leading-tight ${className}`}>
      {children}
    </Text>
  )
}

// 섹션 제목 (중간 크기 굵은 텍스트)
export function SectionTitle({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-[2.5rem] font-[700] text-white mb-[4rem] ${className}`}>
      {children}
    </Text>
  )
}

// 뉴스 제목 (큰 뉴스 헤더)
export function NewsTitle({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-[3rem] font-[600] text-white ${className}`}>
      {children}
    </Text>
  )
}

// 부제목 (중간 크기 텍스트)
export function SubTitle({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-[1.5rem] font-[700] text-white mb-4 ${className}`}>
      {children}
    </Text>
  )
}

// 본문 텍스트
export function BodyText({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-[1rem] font-normal text-white mb-6 leading-relaxed w-[80%] ${className}`}>
      {children}
    </Text>
  )
}

// 흰색 제목 (비디오 섹션용)
export function WhiteTitle({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-[3rem] font-[600] text-white ${className}`}>
      {children}
    </Text>
  )
}

// 흰색 부제목 (비디오 섹션용)
export function WhiteSubTitle({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-[1.125rem] font-normal text-white ${className}`}>
      {children}
    </Text>
  )
}

// 큰 흰색 제목 (이미지 오버레이용)
export function LargeWhiteTitle({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-white text-[4rem] font-[600] mb-[1.5rem] mt-[10rem] drop-shadow-lg leading-[5rem] ml-[4.5rem] ${className}`}>
      {children}
    </Text>
  )
}

// 큰 흰색 부제목 (이미지 오버레이용)
export function LargeWhiteSubTitle({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-white text-[1rem] font-normal max-w-4xl leading-relaxed drop-shadow-lg ml-[4.5rem] mb-[2rem] ${className}`}>
      {children}
    </Text>
  )
}

// 버튼 텍스트 (흰색 테두리)
export function ButtonText({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-white text-[1.5rem] font-[700] w-fit leading-relaxed drop-shadow-lg ml-[4.5rem] border-[0.01rem] border-white rounded-[0.2rem] px-[1rem] py-[0.5rem] ${className}`}>
      {children}
    </Text>
  )
}

// 파트너 섹션 제목
export function PartnerTitle({ children, className = "" }: TextProps) {
  return (
    <Text className={`text-[2.5rem] font-[600] text-white mb-[3rem] mt-[12rem] ${className}`}>
      {children}
    </Text>
  )
}
