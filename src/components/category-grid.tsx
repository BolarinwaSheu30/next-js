import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: 1,
    name: "Straight Extensions",
    image: "/assets/bone-straight.png",
    slug: "straight-extensions",
  },
  {
    id: 2,
    name: "Curly Extensions",
    image: "/assets/curly.png",
    slug: "curly-extensions",
  },
  {
    id: 3,
    name: "Wavy Extensions",
    image: "/assets/wavy.png",
    slug: "wavy-extensions",
  },
  {
    id: 4,
    name: "Clip-ins",
    image: "/placeholder.svg?height=300&width=300",
    slug: "clip-ins",
  },
]

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="relative overflow-hidden transition-transform duration-300 rounded-lg group hover:scale-105"
        >
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            width={300}
            height={300}
            className="object-cover w-full aspect-square"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h3 className="text-lg font-bold text-white md:text-xl">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
