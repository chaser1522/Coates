export default function TeamPage() {
  return (
    <section className="space-y-2">
      <h1 className="text-xl font-semibold">Our Team</h1>
      <p className="text-gray-600 text-sm">This page is CMS-editable in production.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <li className="border rounded-xl p-4"><div className="font-medium">Jane Doe</div><div className="text-sm text-gray-600">Parts Lead</div></li>
        <li className="border rounded-xl p-4"><div className="font-medium">John Smith</div><div className="text-sm text-gray-600">Dealer Manager</div></li>
        <li className="border rounded-xl p-4"><div className="font-medium">Alex Johnson</div><div className="text-sm text-gray-600">Fulfillment</div></li>
      </ul>
    </section>
  )
}
