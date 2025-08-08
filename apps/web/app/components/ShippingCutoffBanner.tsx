'use client'
import { useEffect, useState } from 'react'

function nextBusinessDay(date: Date) {
  const d = new Date(date)
  const day = d.getDay()
  if (day === 6) d.setDate(d.getDate() + 2) // Sat -> Mon
  else if (day === 0) d.setDate(d.getDate() + 1) // Sun -> Mon
  return d
}

export default function ShippingCutoffBanner() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const tz = 'America/Boise'
    function tick() {
      const now = new Date()
      const nowTz = new Date(new Intl.DateTimeFormat('en-US', { timeZone: tz, hour12: false,
        year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit', second:'2-digit' })
        .formatToParts(now).reduce((acc, p) => {
          acc[p.type] = p.value; return acc
        }, {} as any))
      // Cutoff 12:00 local Mon–Fri
      const cutoff = new Date(nowTz)
      cutoff.setHours(12,0,0,0)
      const day = nowTz.getDay()
      const isBiz = day >= 1 && day <= 5

      if (isBiz && nowTz <= cutoff) {
        const ms = cutoff.getTime() - nowTz.getTime()
        const h = Math.floor(ms/3600000), m = Math.floor((ms%3600000)/60000)
        setMessage(`Order within ${h}h ${m}m for same‑day shipping.`)
      } else {
        const nbd = nextBusinessDay(nowTz)
        nbd.setHours(12,0,0,0)
        setMessage(`Orders ship next business day. Cutoff 12:00 PM MST.`)
      }
    }
    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [])

  return <div className="rounded-xl border p-3 text-sm">{message}</div>
}
