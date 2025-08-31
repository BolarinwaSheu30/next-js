import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Hair Stylist",
    content:
      "These are the best hair extensions I've ever used. The quality is exceptional and my clients love how natural they look.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michelle Davis",
    role: "Customer",
    content:
      "I've been using these extensions for over a year now and they still look amazing. Definitely worth the investment!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Beauty Influencer",
    content:
      "The variety of styles and colors is impressive. I can always find exactly what I need for any look I want to create.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSection() {
  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          Don't just take our word for it - hear from our satisfied customers.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col p-6 space-y-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600 italic">"{testimonial.content}"</p>
            <div className="flex items-center space-x-4">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
