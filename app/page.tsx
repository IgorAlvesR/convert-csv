'use client'
import { read, write } from 'xlsx'
import React, { useState } from 'react'
import Button from './Components/Button'
import Title from './Components/Title'
import SelectFile from './Components/SelectFile'

const Home = () => {
  const [file, setFile] = useState<File>()
  const [loading, setLoading] = useState<boolean>(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const reader = new FileReader()

    if (file) {
      reader.onloadend = (e) => {
        setLoading(true)
        const csvData = e.target?.result
        const workbook = read(csvData, {
          type: 'binary',
        })
        const wbout = write(workbook, { bookType: 'xlsx', type: 'array' })
        const blob = new Blob([new Uint8Array(wbout)], {
          type: 'application/octet-stream',
        })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.download = 'SheetJSXPort.xlsx'
        a.href = url
        document.body.appendChild(a)
        setTimeout(() => {
          a.click()
          setLoading(false)
        }, 300)
      }
      reader.readAsText(file)
    }
  }

  return (
    <main className="flex h-screen w-screen  flex-col  items-center justify-center bg-blue-950 antialiased">
      <div className="flex w-full max-w-[500px] flex-col gap-4">
        <Title />
        <section className="flex h-[500px] items-center justify-center bg-blue-50 shadow-sm shadow-zinc-300">
          <form
            onSubmit={handleSubmit}
            className="mx-4 w-full space-y-6 md:mx-12"
          >
            <SelectFile
              file={file}
              onChange={(e) => setFile(e.target.files?.[0])}
            />
            <Button loading={loading} disabled={!file} label="Converter" />
          </form>
        </section>
      </div>
    </main>
  )
}

export default Home
