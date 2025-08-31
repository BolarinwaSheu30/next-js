import { Star } from "lucide-react"

// Mock review data
const reviews = [
  {
    id: 1,
    name: "Jennifer Smith",
    rating: 5,
    date: "August 12, 2023",
    comment:
      "I absolutely love these extensions! They blend perfectly with my natural hair and feel so soft. Will definitely purchase again.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Ashley Johnson",
    rating: 4,
    date: "July 28, 2023",
    comment:
      "Great quality hair, minimal shedding. The only reason I'm giving 4 stars instead of 5 is because the color was slightly different than what I expected, but it still looks good.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "Tiffany Williams",
    rating: 5,
    date: "June 15, 2023",
    comment:
      "These extensions are amazing! They hold curls well and the quality is outstanding. I've received so many compliments.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

interface ProductReviewsProps {
  productId: number
}

export default function ProductReviews({ productId }: ProductReviewsProps) {
  return (
    <div className="mt-16">
      <h2 className="mb-8 text-2xl font-bold">Customer Reviews</h2>

      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="p-6 border rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-100">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="mt-4 text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
