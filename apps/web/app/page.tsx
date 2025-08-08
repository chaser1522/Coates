import ShippingCutoffBanner from '../components/ShippingCutoffBanner'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border p-6">
        <h1 className="text-2xl font-bold">Get the right parts—fast.</h1>
        <p className="text-gray-600 mt-2">
          Order by 12:00 PM MST (Mon–Fri) for same‑day shipping, or choose in‑store pickup.
        </p>
        <div className="mt-4 flex gap-3">
          <Link href="/parts" className="rounded-xl border px-4 py-2">Search by Serial</Link>
          <Link href="/products" className="rounded-xl border px-4 py-2">Browse Products</Link>
        </div>
      </div>
      <ShippingCutoffBanner />
    </section>
  )
}
