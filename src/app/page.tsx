import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"

import { Button } from "@/src/components/ui/button"
import HeroSection from "../components/hero-section"
import CategoryGrid from "../components/category-grid"
import FeaturedProducts from "../components/featured-products"
import TestimonialSection from "../components/testimonial-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Shop Premium Hair Extensions</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Discover our collection of high-quality weave-ons and hair extensions for every style and occasion.
          </p>
        </div>

        <CategoryGrid />

        <div className="my-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Products</h2>
            <Link href="/products" className="flex items-center text-sm font-medium">
              View all products
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <FeaturedProducts />
        </div>

        <div className="py-12 my-12 bg-gray-50 rounded-xl">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center justify-center mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our Extensions?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Premium quality hair extensions that look and feel natural.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Premium Quality</h3>
                <p className="text-gray-500 mt-2">
                  Our extensions are made from 100% human hair for a natural look and feel.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Wide Selection</h3>
                <p className="text-gray-500 mt-2">
                  Choose from various lengths, colors, and styles to match your desired look.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Expert Advice</h3>
                <p className="text-gray-500 mt-2">
                  Our team provides guidance to help you find the perfect extensions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <TestimonialSection />

        <div className="flex flex-col items-center justify-center py-12 mt-12 text-center bg-primary/5 rounded-xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Look?</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 mb-6">
            Browse our collection and find the perfect hair extensions for your style.
          </p>
          <Button size="lg" asChild>
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
