"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "../context/cartContext"
import { useState } from "react"
import { toast } from "sonner"

interface AddToCartButtonProps {
  product: {
    id: number
    title: string
    price: number
    image: string
  }
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleAdd = () => {
    for(let i=0; i<quantity; i++) {
        addToCart(product)
      }
      toast.success(`${product.title} added to cart!`)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label className="font-semibold text-gray-700">Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button 
        onClick={handleAdd}
        className="w-full bg-blue-700 text-white py-3 px-6 cursor-pointer rounded-md font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2 text-lg"
      >
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </button>
    </div>
  )
}