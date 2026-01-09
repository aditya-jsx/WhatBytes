"use client"

import { Star } from "lucide-react"
import Link from "next/link"

interface SpecialProductProps {
  id: number
  title: string
  price: number
  image: string
  rating?: number
  description?: string
  category?: string
}

export function SpecialProduct({ id, title, price, image, rating, description, category }: SpecialProductProps) {

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition h-full flex flex-col">
      <Link href={`/product/${id}`} className="flex-grow">
        <div className="">
          <div className="relative w-full md:h-32 bg-gray-100 overflow-hidden">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>

          <div className="p-4 space-y-3">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-3xl font-bold text-gray-900">${price}</p>

            {rating && (
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {description && <p className="text-sm text-gray-600 line-clamp-3">{description}</p>}

            {category && (
              <div className="text-sm">
                <span className="font-semibold text-gray-700">Category</span>
                <p className="text-gray-600">{category}</p>
              </div>
            )}
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-700 text-white py-3 rounded-lg cursor-pointer px-4 font-semibold hover:bg-blue-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

    </div>
  )
}
