'use client'
import { BsFiletypeXlsx } from 'react-icons/bs'
import { PiFileCsvLight } from 'react-icons/pi'

const Title = () => {
  return (
    <h1 className="flex items-center justify-center gap-2 text-center text-sm text-blue-50 sm:text-2xl">
      <PiFileCsvLight className="h-8 w-8" />
      Converter arquivo .CSV para .XLSX
      <BsFiletypeXlsx className="h-6 w-6" />
    </h1>
  )
}

export default Title
