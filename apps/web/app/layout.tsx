import './globals.css'
import Link from 'next/link'

export const metadata = { title: 'Coates Landscape Supply', description: 'Dealer portal & parts' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold">Coates Landscape Supply</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/products">Products</Link>
              <Link href="/parts">Parts Lookup</Link>
              <Link href="/team">Team</Link>
              <Link href="/about">About</Link>
              <Link href="/cart">Cart</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <footer className="border-t mt-12">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Coates Landscape Supply
          </div>
        </footer>
      </body>
    </html>
  )
}
