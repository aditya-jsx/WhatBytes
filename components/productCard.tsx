"use client"

import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useCart } from "../context/cartContext"
import { toast } from "sonner"

interface ProductCardProps {
  id: number
  title: string
  price: number
  image: string
  rating?: number
}

export function ProductCard({ id, title, price, image, rating }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({ id, title, price, image })
    toast.success(`${title} added to cart!`)
  }

  return (
    <Link href={`/product/${id}`}>
      <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer h-full flex flex-col">
        
        <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>


        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-lg font-bold text-gray-900">${price}</span>
            {rating && (
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
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-700 text-white py-2 px-4 font-semibold rounded-lg cursor-pointer hover:bg-blue-800 transition flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>

      </div>
    </Link>
  )
}
