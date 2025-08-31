import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import RelatedProducts from "@/src/components/related-products"
import ProductReviews from "@/src/components/product-reviews"
import AddToCartButton from "@/src/components/add-to-cart-button"


// In a real app, this would fetch from an API based on the slug
const getProductBySlug = (slug: string) => {
  return {
    id: 1,
    name: "Brazilian Straight Hair",
    price: 129.99,
    description:
      "Premium quality Brazilian straight hair extensions. These 100% human hair extensions are silky smooth, tangle-free, and can be styled, dyed, and washed just like your natural hair. Our extensions are ethically sourced and undergo a thorough quality control process to ensure you receive only the best product.",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    features: [
      "100% human hair",
      "Tangle-free and silky smooth",
      "Can be styled, dyed, and washed",
      "Double weft for added volume",
      "Minimal shedding",
      "Long-lasting (6-12 months with proper care)",
    ],
    rating: 4.8,
    reviewCount: 124,
    slug: "brazilian-straight-hair",
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)

  return (
    <div className="container px-4 py-12 mx-auto">
      <Link href="/products" className="inline-flex items-center mb-8 text-sm font-medium">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover w-full aspect-square"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  width={150}
                  height={150}
                  className="object-cover w-full aspect-square"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2 space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Free shipping on orders over $100</p>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div>
              <label htmlFor="length" className="block mb-2 text-sm font-medium">
                Length
              </label>
              <Select defaultValue="18-20">
                <SelectTrigger id="length" className="w-full">
                  <SelectValue placeholder="Select length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10-12">10-12 inches</SelectItem>
                  <SelectItem value="14-16">14-16 inches</SelectItem>
                  <SelectItem value="18-20">18-20 inches</SelectItem>
                  <SelectItem value="22-24">22-24 inches</SelectItem>
                  <SelectItem value="26-30">26-30 inches</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="color" className="block mb-2 text-sm font-medium">
                Color
              </label>
              <Select defaultValue="natural-black">
                <SelectTrigger id="color" className="w-full">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="natural-black">Natural Black</SelectItem>
                  <SelectItem value="dark-brown">Dark Brown</SelectItem>
                  <SelectItem value="medium-brown">Medium Brown</SelectItem>
                  <SelectItem value="light-brown">Light Brown</SelectItem>
                  <SelectItem value="blonde">Blonde</SelectItem>
                  <SelectItem value="ombre">Ombre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="quantity" className="block mb-2 text-sm font-medium">
                Quantity
              </label>
              <Select defaultValue="1">
                <SelectTrigger id="quantity" className="w-full">
                  <SelectValue placeholder="Select quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <AddToCartButton productId={product.id} />

          <div className="p-4 border rounded-lg">
            <h3 className="mb-2 font-semibold">Product Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ProductReviews productId={product.id} />

      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">You May Also Like</h2>
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  )
}
