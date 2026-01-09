import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 mb-8">

          <div>
            <h3 className="text-lg font-bold mb-4">Filters</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  All
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Electronics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <div className="flex items-center justify-center rounded-full h-8 w-8 bg-blue-600">
                <a href="#" className="hover:text-blue-400 transition">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <div className="flex items-center justify-center rounded-full h-8 w-8 bg-blue-600">
                <a href="#" className="hover:text-blue-400 transition">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
              <div className="flex items-center justify-center rounded-full h-8 w-8 bg-blue-600">
                <a href="#" className="hover:text-blue-400 transition">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 text-sm text-gray-400">
          © 2026 American. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
