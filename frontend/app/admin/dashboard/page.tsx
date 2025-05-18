"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// Sample book data
const books = [
  {
    id: 1,
    title: "The Mademo/selle Alliance",
    author: "Natasha Lester",
    price: 34.99,
  },
  {
    id: 2,
    title: "Great Big Beautiful Life",
    author: "Emily Henry",
    price: 34.99,
  },
  {
    id: 3,
    title: "Silverthorn: The Mystery of Margan Crow",
    author: "Suzanne Collins",
    price: 34.99,
  },
]

// Sample user data
const users = [
  {
    id: 1,
    name: "Alice Johnsson",
    email: "alice@gmail.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "JR Smith",
    email: "JR@gmail.com",
    role: "Staff",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@gmail.com",
    role: "Staff",
  },
]

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-12 text-center text-4xl font-bold">Admin Dashboard</h1>

      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <h2 className="text-xl font-semibold">Total books</h2>
            <p className="text-4xl font-bold">1,234</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <h2 className="text-xl font-semibold">Active Users</h2>
            <p className="text-4xl font-bold">4</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <h2 className="text-xl font-semibold">Notifications</h2>
            <p className="text-4xl font-bold">8</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Manage books</h2>
          <Link href="/admin/add-book">
            <Button>Add New Book</Button>
          </Link>
        </div>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Author</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Price</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {books.map((book) => (
                <tr key={book.id}>
                  <td className="whitespace-nowrap px-6 py-4">{book.title}</td>
                  <td className="whitespace-nowrap px-6 py-4">{book.author}</td>
                  <td className="whitespace-nowrap px-6 py-4">${book.price}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Button variant="secondary" className="mr-2">
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Manage Users</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Role</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                  <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                  <td className="whitespace-nowrap px-6 py-4">{user.role}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Button variant="destructive">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
