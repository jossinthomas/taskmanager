"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react"

// This would normally come from an API or database
const book = {
  id: 5,
  title: "Great Big Beautiful Life",
  author: "Emily Henry",
  price: 34.99,
  description:
    "A dazzling and sweeping new novel from #1 Sunday Times bestselling author Emily Henry! When Margaret Ives, the famously reclusive heiress, invites eternal optimist Alice Scott to the balmy Little Crescent Island, Alice knows this is it-...",
}

export default function BookPage() {
  const [quantity, setQuantity] = useState("1")
  const [isOverviewOpen, setIsOverviewOpen] = useState(true)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="flex h-[600px] w-[400px] flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-6 text-center">
            <BookOpen className="h-16 w-16 mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">by {book.author}</p>
            <p className="text-sm text-gray-500">Book cover image will be added later</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <div className="mt-2 inline-block rounded-md bg-green-100 px-2 py-1 text-sm">Tag</div>
          </div>

          <div>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">${book.price}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Select value={quantity} onValueChange={setQuantity}>
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

          <Button className="w-full bg-[#1e1e1e] hover:bg-[#333]">Add to car</Button>

          <div className="rounded-md border">
            <button
              className="flex w-full items-center justify-between p-4"
              onClick={() => setIsOverviewOpen(!isOverviewOpen)}
            >
              <span className="text-lg font-medium">Overview</span>
              {isOverviewOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>

            {isOverviewOpen && (
              <div className="p-4 pt-0">
                <p>{book.description}</p>
                <button className="mt-2 text-blue-600 hover:underline">... Read more</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
