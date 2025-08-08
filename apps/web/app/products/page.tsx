'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

type Product = { sku: string, title: string, price: number, inStock: boolean }

export default function ProductsPage() {
  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/products')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData([]))
  }, [])

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(p => (
          <li key={p.sku} className="border rounded-xl p-4">
            <div className="font-medium">{p.title}</div>
            <div className="text-sm text-gray-600">{p.sku}</div>
            <div className="mt-2">${'{'}p.price.toFixed(2){'}'}</div>
            <div className="text-xs mt-1">{p.inStock ? 'In Stock' : 'Backorder'}</div>
            <Link href={'/products/' + p.sku} className="inline-block mt-3 border rounded-lg px-3 py-1 text-sm">View</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
