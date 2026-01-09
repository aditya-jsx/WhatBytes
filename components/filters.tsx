"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export function Filters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get("category") || "All"
  const maxPrice = Number.parseInt(searchParams.get("maxPrice") || "1000")

  const [priceValue, setPriceValue] = useState(maxPrice)

  const categories = ["All", "Electronics", "Clothing", "Home"]

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams)
    if (category === "All") {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    router.replace(`/?${params.toString()}`)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    setPriceValue(value)

    const params = new URLSearchParams(searchParams)
    params.set("maxPrice", value.toString())
    router.replace(`/?${params.toString()}`)
  }

  return (
    <aside className="w-full md:w-64">
      <div className="bg-blue-700 text-white rounded-t-lg pl-4 pr-4 pt-4">
        <h3 className="text-lg font-bold">Filters</h3>
      </div>

      <div className="bg-blue-700 text-white p-4 rounded-b-lg space-y-3 mb-6">
        <div className="font-semibold">Category</div>
        {categories.map((category) => (
          <label key={category} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => handleCategoryChange(category)}
              className="w-4 h-4"
            />
            <span className="text-sm">{category}</span>
          </label>
        ))}
        <div className="bg-blue-700 text-white p-4 rounded-lg space-y-3">
          <div className="font-semibold">Price</div>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceValue}
              onChange={handlePriceChange}
              className="w-full h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between text-sm">
              <span>$0</span>
              <span>${priceValue}</span>
            </div>
          </div>
        </div>
    </aside>
  )
}
