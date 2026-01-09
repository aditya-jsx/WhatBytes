export interface Product {
  id: number
  title: string
  price: number
  category: "Electronics" | "Clothing" | "Home"
  image: string
  rating?: number
  description?: string
}

export const products: Product[] = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    category: "Clothing",
    image: "/",
    rating: 4,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 149,
    category: "Electronics",
    image: "/",
    rating: 4,
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    category: "Home",
    image: "/",
    rating: 3,
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    category: "Electronics",
    image: "/",
    rating: 5,
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    category: "Clothing",
    image: "/",
    rating: 2,
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    category: "Electronics",
    image: "/",
    rating: 1,
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    category: "Clothing",
    image: "/",
    rating: 4,
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    category: "Electronics",
    image: "/",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]
