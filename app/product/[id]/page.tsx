import { AddToCartButton } from "@/components/addToCartButton"
import { products } from "../../../data/products"
import { Star } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id.toString() === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">

        <Link href="/" className="text-blue-700 hover:underline mb-6 inline-block font-semibold">
          ← Back to Products
        </Link>

        <div className="bg-white rounded-lg overflow-hidden p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center bg-gray-100 rounded-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full max-h-96 object-contain"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
                <p className="text-4xl font-bold text-gray-900 mb-4">${product.price}</p>
              </div>

              {product.rating && (
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{product.rating.toFixed(1)}</span>
                </div>
              )}

              {product.description && <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>}

              {product.category && (
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Category:</span> {product.category}
                  </p>
                </div>
              )}

              <div className="space-y-4">
                {/* <div className="flex items-center gap-4">
                  <label className="font-semibold text-gray-700">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div> */}
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
