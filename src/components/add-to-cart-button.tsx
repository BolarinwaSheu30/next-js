"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/src/components/ui/button"

interface AddToCartButtonProps {
  productId: number
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleAddToCart = () => {
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast.success("Added to cart", {
        description: "Product has been added to your cart",
      })
      setLoading(false)
    }, 1000)
  }

  return (
    <Button className="w-full" size="lg" onClick={handleAddToCart} disabled={loading}>
      {loading ? (
        <span className="flex items-center">
          <span className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Adding to Cart...
        </span>
      ) : (
        <span className="flex items-center">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </span>
      )}
    </Button>
  )
}
