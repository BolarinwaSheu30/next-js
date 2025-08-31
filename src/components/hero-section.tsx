import Link from "next/link"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="container flex flex-col items-center justify-center px-4 py-16 mx-auto md:flex-row md:py-24">
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 md:pr-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Premium Hair <span className="text-primary">Extensions</span>
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 mb-6">
            Transform your look with our high-quality weave-ons and hair extensions. Natural-looking, comfortable, and
            long-lasting.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/assets/aa.png"
            alt="Beautiful hair extensions"
            width={600}
            height={600}
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  )
}
