"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [user, setUser] = useState({
    name: "Lisa",
  })

  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1e1e1e] text-white">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="font-bold text-lg">BookHaven</span>
        </Link>

        <div className="relative flex w-full max-w-md items-center mx-4">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <Input
            type="search"
            placeholder="Search by keywords"
            className="pl-10 bg-[#f5f5f5] border-none rounded-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 bg-gray-200">
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-2 text-sm">
                  <p className="text-gray-500">welcome back</p>
                  <p className="font-medium">,{user.name}</p>
                </div>
              </div>
              <Link href="/admin/dashboard">
                <Button variant="outline" className="bg-[#1e1e1e] text-white hover:bg-[#333] hover:text-white mr-2">
                  Admin
                </Button>
              </Link>
              <Link href="/logout">
                <Button variant="outline" className="bg-[#1e1e1e] text-white hover:bg-[#333] hover:text-white">
                  LogOut
                </Button>
              </Link>
            </div>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
