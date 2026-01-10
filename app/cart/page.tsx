"use client"

import { useCart } from "../../context/cartContext"
import { Trash2, Plus, Minus } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCart()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
        <Link href="/" className="text-blue-700 hover:underline mb-6 inline-block font-semibold">
          ← Back to Products
        </Link>

        <h1 className="text-3xl font-bold mb-8 text-gray-900">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
            <Link href="/" className="text-blue-700 hover:underline font-semibold">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-6 flex gap-4 items-start">
                  
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg bg-gray-100"
                  />
                  
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-xl font-bold text-gray-900 mb-4">${item.price}</p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded transition cursor-pointer"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded transition cursor-pointer"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-700 transition cursor-pointer"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            
            <div className="bg-white rounded-lg p-6 h-fit sticky top-4">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Order Summary</h2>
              <div className="space-y-3 mb-6 border-b border-gray-200 pb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-blue-700 text-white py-3 rounded-md cursor-pointer font-semibold hover:bg-blue-800 transition mb-3">
                Proceed to Checkout
              </button>
              <Link href="/" className="block text-center text-blue-700 cursor-pointer hover:underline font-semibold">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
