import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Weave-On Store</h3>
            <p className="text-sm text-gray-500">Premium quality hair extensions for every style and occasion.</p>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-500 hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories/straight-extensions" className="text-gray-500 hover:text-primary">
                  Straight Extensions
                </Link>
              </li>
              <li>
                <Link href="/categories/curly-extensions" className="text-gray-500 hover:text-primary">
                  Curly Extensions
                </Link>
              </li>
              <li>
                <Link href="/categories/wavy-extensions" className="text-gray-500 hover:text-primary">
                  Wavy Extensions
                </Link>
              </li>
              <li>
                <Link href="/categories/clip-ins" className="text-gray-500 hover:text-primary">
                  Clip-ins
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-500 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-500 hover:text-primary">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-500 hover:text-primary">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Weave-On Store. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
