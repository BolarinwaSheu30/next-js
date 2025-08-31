"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/src/components/ui/button"
import { Toaster } from "@/src/components/ui/sonner"
// import { Toaster } from "@/components/ui/sonner";
// Mock related products data
const relatedProducts = [
  {
    id: 2,
    name: "Peruvian Body Wave",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "peruvian-body-wave",
  },
  {
    id: 3,
    name: "Malaysian Curly Hair",
    price: 159.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "malaysian-curly-hair",
  },
  {
    id: 4,
    name: "Indian Deep Wave",
    price: 139.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "indian-deep-wave",
  },
  {
    id: 5,
    name: "Cambodian Silky Straight",
    price: 169.99,
    image: "/assets/silky-straight.png",
    slug: "cambodian-silky-straight",
  },
]

interface RelatedProductsProps {
  currentProductId: number
}

export default function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState<number | null>(null)

  const handleAddToCart = (productId: number) => {
    setLoading(productId)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Added to cart",
        description: "Product has been added to your cart",
      })
      setLoading(null)
    }, 1000)
  }

  // Filter out the current product
  const filteredProducts = relatedProducts.filter((product) => product.id !== currentProductId)

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden transition-all duration-300 border rounded-lg group hover:shadow-lg"
        >
          <Link href={`/products/${product.slug}`} className="block overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover w-full transition-transform duration-300 aspect-square group-hover:scale-105"
            />
          </Link>
          <div className="p-4">
            <Link href={`/products/${product.slug}`}>
              <h3 className="font-medium">{product.name}</h3>
            </Link>
            <p className="mt-1 text-lg font-bold">${product.price.toFixed(2)}</p>
            <Button
              className="w-full mt-4"
              size="sm"
              onClick={() => handleAddToCart(product.id)}
              disabled={loading === product.id}
            >
              {loading === product.id ? (
                <span className="flex items-center">
                  <span className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Adding...
                </span>
              ) : (
                <span className="flex items-center">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </span>
              )}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
function useToast(): { toast: any } {
  throw new Error("Function not implemented.")
}

