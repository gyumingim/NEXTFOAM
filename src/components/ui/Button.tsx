import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'link'
  size?: 'small' | 'medium' | 'large'
  className?: string
  onClick?: () => void
}

export function Button({ 
  children, 
  variant = 'outline', 
  size = 'medium',
  className = "",
  onClick
}: ButtonProps) {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-[0.01rem] border-white text-white hover:bg-white hover:text-black",
    link: "text-red-500 hover:text-red-600 underline"
  }

  const sizes = {
    small: "text-xs py-1 px-2",
    medium: "text-[.875rem] py-[0.5rem] px-[1rem]",
    large: "text-base py-3 px-6"
  }

  return (
    <div 
      className={`${variants[variant]} ${sizes[size]} rounded-[0.2rem] w-fit transition-colors duration-200 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

interface ActionButtonProps {
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
  onClick?: () => void
}

export function ActionButton({ children, icon, className = "", onClick }: ActionButtonProps) {
  return (
    <div 
      className={`flex items-center text-red-500 text-[0.875rem] font-[600] cursor-pointer hover:text-red-600 transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
      {icon}
    </div>
  )
}
