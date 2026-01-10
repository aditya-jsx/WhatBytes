"use client"

import { ShoppingCart, Search } from "lucide-react"
import Link from "next/link"
import { useCart } from "../context/cartContext"

export function Header() {
  const { items } = useCart()

  return (
    <nav className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">

        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>

        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-blue-200" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 pl-10 rounded-md border border-white bg-blue-600 text-white placeholder-white focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        <Link
          href="/cart"
          className="relative flex items-center gap-2 px-6 py-3 bg-blue-950 rounded-md hover:bg-blue-800 transition"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="text-sm">Cart</span>
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Link>

      </div>
    </nav>
  )
}
