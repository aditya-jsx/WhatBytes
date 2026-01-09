import { products } from "../data/products"
import { Filters } from "../components/filters"
import { ProductCard } from "../components/productCard"
import { SpecialProduct } from "../components/specialProduct"

interface HomePageProps {
  searchParams: Promise<{ category?: string; maxPrice?: string }>
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams
  const selectedCategory = params.category
  const maxPrice = Number.parseInt(params.maxPrice || "1000")

  let filteredProducts = products

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter((p) => p.category === selectedCategory)
  }

  filteredProducts = filteredProducts.filter((p) => p.price <= maxPrice)

  const specialProduct = filteredProducts.find((p) => p.id === 8)
  const regularProducts = filteredProducts.filter((p) => p.id !== 8)

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="grow max-w-7xl mx-auto w-full px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <Filters />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Product Listing</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
                {specialProduct && (
                  <div className="sm:col-span-2 lg:col-span-2">
                    <SpecialProduct
                      id={specialProduct.id}
                      title={specialProduct.title}
                      price={specialProduct.price}
                      image={specialProduct.image}
                      rating={specialProduct.rating}
                      description={specialProduct.description}
                      category={specialProduct.category}
                    />
                  </div>
                )}
              </div>
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
