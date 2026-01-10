"use client"

import { Star } from "lucide-react"
import Link from "next/link"
import { useCart } from "../context/cartContext"
import Image from "next/image"

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
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({ id, title, price, image })
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition h-full">
      <Link href={`/product/${id}`} className="flex flex-col md:flex-row h-full">
        
        <div className="w-full md:w-5/12 relative bg-gray-100 h-64 md:h-auto shrink-0">
          <Image
            src={image || "/placeholder.svg"} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover" 
            width={500}
            height={500}
          />
        </div>

        <div className="p-6 flex flex-col justify-between w-full md:w-7/12">
          <div className="space-y-3">
            <div className="flex flex-col justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                
              </div>
              <p className="text-2xl font-bold text-gray-900">${price}</p>
            </div>

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
                <span className="text-xs text-gray-500">({rating}.0)</span>
              </div>
            )}

            {description && <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{description}</p>}
            {category && <p className="font-semibold">Category</p>}
            {category && <span className=" ">{category}</span>}
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-3 rounded-lg cursor-pointer px-4 font-semibold hover:bg-blue-700 transition mt-6 shadow-sm"
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  )
}