// "use client"

// import type React from "react"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { ArrowLeft, CreditCard, LockIcon } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Separator } from "@/components/ui/separator"
// import { useToast } from "@/components/ui/use-toast"

// // Mock cart data
// const cartItems = [
//   {
//     id: 1,
//     name: "Brazilian Straight Hair",
//     price: 129.99,
//     image: "/placeholder.svg?height=100&width=100",
//     quantity: 1,
//     options: {
//       length: "18-20 inches",
//       color: "Natural Black",
//     },
//   },
//   {
//     id: 2,
//     name: "Peruvian Body Wave",
//     price: 149.99,
//     image: "/placeholder.svg?height=100&width=100",
//     quantity: 2,
//     options: {
//       length: "22-24 inches",
//       color: "Dark Brown",
//     },
//   },
// ]

// export default function CheckoutPage() {
//   const { toast } = useToast()
//   const [loading, setLoading] = useState(false)

//   const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
//   const shipping = subtotal > 100 ? 0 : 15
//   const total = subtotal + shipping

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)

//     // Simulate API call
//     setTimeout(() => {
//       toast({
//         title: "Order placed successfully!",
//         description: "Thank you for your purchase. Your order has been placed.",
//       })
//       setLoading(false)
//       // In a real app, you would redirect to a success page
//     }, 2000)
//   }

//   return (
//     <div className="container px-4 py-12 mx-auto">
//       <Link href="/cart" className="inline-flex items-center mb-8 text-sm font-medium">
//         <ArrowLeft className="w-4 h-4 mr-2" />
//         Back to Cart
//       </Link>

//       <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

//       <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//         <div className="lg:col-span-2">
//           <form onSubmit={handleSubmit}>
//             <div className="p-6 mb-8 border rounded-lg">
//               <h2 className="mb-4 text-lg font-semibold">Contact Information</h2>

//               <div className="grid gap-4">
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   <div>
//                     <Label htmlFor="firstName">First Name</Label>
//                     <Input id="firstName" required />
//                   </div>
//                   <div>
//                     <Label htmlFor="lastName">Last Name</Label>
//                     <Input id="lastName" required />
//                   </div>
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email</Label>
//                   <Input id="email" type="email" required />
//                 </div>
//                 <div>
//                   <Label htmlFor="phone">Phone</Label>
//                   <Input id="phone" type="tel" required />
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 mb-8 border rounded-lg">
//               <h2 className="mb-4 text-lg font-semibold">Shipping Address</h2>

//               <div className="grid gap-4">
//                 <div>
//                   <Label htmlFor="address">Address</Label>
//                   <Input id="address" required />
//                 </div>
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   <div>
//                     <Label htmlFor="city">City</Label>
//                     <Input id="city" required />
//                   </div>
//                   <div>
//                     <Label htmlFor="state">State</Label>
//                     <Input id="state" required />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   <div>
//                     <Label htmlFor="zip">ZIP Code</Label>
//                     <Input id="zip" required />
//                   </div>
//                   <div>
//                     <Label htmlFor="country">Country</Label>
//                     <Input id="country" required />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 mb-8 border rounded-lg">
//               <h2 className="mb-4 text-lg font-semibold">Payment Method</h2>

//               <RadioGroup defaultValue="card">
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="card" id="card" />
//                   <Label htmlFor="card" className="flex items-center">
//                     <CreditCard className="w-4 h-4 mr-2" />
//                     Credit Card
//                   </Label>
//                 </div>
//                 <Separator className="my-4" />
//                 <div className="grid gap-4">
//                   <div>
//                     <Label htmlFor="cardName">Name on Card</Label>
//                     <Input id="cardName" required />
//                   </div>
//                   <div>
//                     <Label htmlFor="cardNumber">Card Number</Label>
//                     <Input id="cardNumber" required />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="expiry">Expiry Date</Label>
//                       <Input id="expiry" placeholder="MM/YY" required />
//                     </div>
//                     <div>
//                       <Label htmlFor="cvc">CVC</Label>
//                       <Input id="cvc" required />
//                     </div>
//                   </div>
//                 </div>
//               </RadioGroup>
//             </div>

//             <Button type="submit" className="w-full" size="lg" disabled={loading}>
//               {loading ? (
//                 <span className="flex items-center">
//                   <span className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                   Processing...
//                 </span>
//               ) : (
//                 <span className="flex items-center">
//                   <LockIcon className="w-4 h-4 mr-2" />
//                   Place Order
//                 </span>
//               )}
//             </Button>
//           </form>
//         </div>

//         <div>
//           <div className="p-6 border rounded-lg">
//             <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex space-x-4">
//                   <div className="relative w-16 h-16 overflow-hidden rounded-md">
//                     <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-medium">{item.name}</h3>
//                     <p className="text-sm text-gray-500">
//                       {item.options.length}, {item.options.color}
//                     </p>
//                     <div className="flex justify-between mt-1">
//                       <span className="text-sm">Qty: {item.quantity}</span>
//                       <span>${(item.price * item.quantity).toFixed(2)}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <Separator className="my-4" />

//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Subtotal</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Shipping</span>
//                 <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
//               </div>
//               <div className="pt-2 mt-2 border-t">
//                 <div className="flex justify-between font-semibold">
//                   <span>Total</span>
//                   <span>${total.toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CreditCard, LockIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"
import { Separator } from "@/src/components/ui/separator"

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "Brazilian Straight Hair",
    price: 129.99,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
    options: {
      length: "18-20 inches",
      color: "Natural Black",
    },
  },
  {
    id: 2,
    name: "Peruvian Body Wave",
    price: 149.99,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 2,
    options: {
      length: "22-24 inches",
      color: "Dark Brown",
    },
  },
]

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 15
  const total = subtotal + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast.success("Order placed successfully!", {
        description: "Thank you for your purchase. Your order has been placed.",
      })
      setLoading(false)
      // In a real app, you would redirect to a success page
    }, 2000)
  }

  return (
    <div className="container px-4 py-12 mx-auto">
      <Link href="/cart" className="inline-flex items-center mb-8 text-sm font-medium">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Cart
      </Link>

      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="p-6 mb-8 border rounded-lg">
              <h2 className="mb-4 text-lg font-semibold">Contact Information</h2>

              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>
            </div>

            <div className="p-6 mb-8 border rounded-lg">
              <h2 className="mb-4 text-lg font-semibold">Shipping Address</h2>

              <div className="grid gap-4">
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" required />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" required />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" required />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 mb-8 border rounded-lg">
              <h2 className="mb-4 text-lg font-semibold">Payment Method</h2>

              <RadioGroup defaultValue="card">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Credit Card
                  </Label>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" required />
                  </div>
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" required />
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? (
                <span className="flex items-center">
                  <span className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  <LockIcon className="w-4 h-4 mr-2" />
                  Place Order
                </span>
              )}
            </Button>
          </form>
        </div>

        <div>
          <div className="p-6 border rounded-lg">
            <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex space-x-4">
                  <div className="relative w-16 h-16 overflow-hidden rounded-md">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.options.length}, {item.options.color}
                    </p>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm">Qty: {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="pt-2 mt-2 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
