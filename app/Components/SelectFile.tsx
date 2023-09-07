'use client'
import { AiOutlineCloudUpload } from 'react-icons/ai'

interface SelectFileProps {
  file?: File
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectFile: React.FC<SelectFileProps> = ({ file, onChange }) => {
  return (
    <label htmlFor="input-file">
      <div className=" flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-blue-500 bg-blue-100 px-12 py-4 text-blue-900 hover:bg-blue-200">
        {file && <p className="text-sm">{file.name}</p>}
        <span className="flex gap-2">
          <AiOutlineCloudUpload className="h-6 w-6" />
          Selecionar Arquivo
        </span>
      </div>
      <input
        className="sr-only"
        id="input-file"
        alt="Entrada de arquivos"
        type="file"
        accept=".csv"
        onChange={onChange}
      />
    </label>
  )
}

export default SelectFile
