import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample book data
const books = [
  {
    id: 1,
    title: "Silverborn: The Mystery of Morrigan Crow",
    author: "Jessica Townsend",
    price: 29.99,
  },
  {
    id: 2,
    title: "The Let Them Theory",
    author: "Mei Robbins",
    price: 32.99,
  },
  {
    id: 3,
    title: "The Unquiet Grave",
    author: "Dervla McTiernan",
    price: 27.99,
  },
  {
    id: 4,
    title: "Sunrise on the Reading",
    author: "Suzanne Collins",
    price: 34.99,
  },
  {
    id: 5,
    title: "Great Big Beautiful Life",
    author: "Emily Henry",
    price: 34.99,
  },
  {
    id: 6,
    title: "King of Envy",
    author: "Ana Huang",
    price: 31.99,
  },
]

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {books.map((book) => (
          <Link key={book.id} href={`/books/${book.id}`} className="group">
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <div className="flex h-[400px] w-full items-center justify-center bg-gray-100 p-4 text-center transition-colors duration-300 group-hover:bg-gray-200">
                <div>
                  <p className="font-bold text-xl mb-2">{book.title}</p>
                  <p className="text-gray-600 mb-4">by {book.author}</p>
                  <p className="text-lg font-semibold">${book.price}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center gap-2">
        <Button variant="outline" size="icon" disabled>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>
        <Button variant="outline" size="sm" className="bg-[#1e1e1e] text-white hover:bg-[#333] hover:text-white">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <span>...</span>
        <Button variant="outline" size="sm">
          67
        </Button>
        <Button variant="outline" size="sm">
          68
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
    </div>
  )
}
