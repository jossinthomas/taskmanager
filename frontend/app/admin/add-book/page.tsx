"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen } from "lucide-react"

export default function AddBookPage() {
  const router = useRouter()
  const [book, setBook] = useState({
    title: "The Mademoiselle Alliance: Inspired by a stunning true story",
    author: "Natasha Lester",
    price: "34.99",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBook((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save the book to a database
    console.log("Book saved:", book)
    router.push("/")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Add New Book</h1>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="flex h-[450px] w-[300px] flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-6 text-center">
            <BookOpen className="h-16 w-16 mb-4 text-gray-400" />
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">by {book.author}</p>
            <p className="text-sm text-gray-500">Book cover image will be added later</p>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={book.title} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input id="author" name="author" value={book.author} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" name="price" value={book.price} onChange={handleChange} required />
            </div>

            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                Save
              </Button>
              <Button type="button" variant="outline" className="flex-1" onClick={() => router.back()}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
