'use client'
import { useState } from 'react'

export default function PartsPage() {
  const [serial, setSerial] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [messages, setMessages] = useState<string[]>([])

  const search = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/parts/lookup?serial=' + encodeURIComponent(serial))
    const data = await res.json()
    setMessages(m => [...m, `Found ${data.results?.length ?? 0} candidates for ${serial}`])
  }

  const upload = async () => {
    if (!image) return
    const form = new FormData()
    form.append('file', image)
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/uploads/serial-plate', { method: 'POST', body: form })
    const data = await res.json()
    setSerial(data.serial || '')
    setMessages(m => [...m, 'OCR detected serial: ' + (data.serial || 'N/A')])
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Parts Lookup</h1>
      <div className="space-y-2">
        <input className="border rounded-lg px-3 py-2 w-full" placeholder="Enter serial/model…" value={serial} onChange={e => setSerial(e.target.value)} />
        <div className="flex gap-2">
          <button className="border rounded-lg px-3 py-2" onClick={search}>Search</button>
          <label className="border rounded-lg px-3 py-2 cursor-pointer">
            Scan Serial Plate
            <input type="file" accept="image/*" capture="environment" className="hidden" onChange={e => setImage(e.target.files?.[0] || null)} />
          </label>
          <button className="border rounded-lg px-3 py-2" onClick={upload} disabled={!image}>Upload</button>
        </div>
      </div>
      <div className="border rounded-xl p-3 min-h-24">
        {messages.map((m, i) => <div key={i} className="text-sm">{m}</div>)}
      </div>
    </div>
  )
}
