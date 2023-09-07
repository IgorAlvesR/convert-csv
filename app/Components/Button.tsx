'use client'

import Loading from './Loading'

interface ButtonProps {
  label: string
  loading: boolean
  disabled: boolean
}

const Button: React.FC<ButtonProps> = ({ loading, label, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="
        flex                 
        min-h-[50px]                
        w-full 
        items-center 
        justify-center 
        rounded-md 
        bg-blue-800                
        font-bold                
        uppercase
        tracking-widest
        text-white                
        transition
        hover:bg-blue-900
        disabled:cursor-not-allowed
        disabled:opacity-70
        hover:disabled:bg-blue-800
      "
    >
      {loading ? <Loading /> : label}
    </button>
  )
}

export default Button
