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
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 149,
    category: "Electronics",
    image: "https://plus.unsplash.com/premium_photo-1679865289918-b21aae5a9559?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    rating: 4,
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    category: "Home",
    image: "https://images.unsplash.com/photo-1642375352634-ad952121fdb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fEJhY2twYWNrfGVufDB8fDB8fHww",
    rating: 3,
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
    rating: 5,
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1615854215399-02ca34f414cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D",
    rating: 2,
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1603208234872-619ffa1209cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5,
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1621951753015-740c699ab970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHx0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
    rating: 4,
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1470350576089-539d5a852bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]
