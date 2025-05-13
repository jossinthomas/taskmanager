"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export default function SettingsPage() {
  const [user, setUser] = useState({
    name: "Lisa",
    surname: "Kim",
    email: "Lisa1234@gmail.com",
    password: "************",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would update the user profile
    console.log("User updated:", user)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">User settings</h1>

      <div className="mx-auto max-w-md">
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={user.name} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="surname">Surname</Label>
                <Input id="surname" name="surname" value={user.surname} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={user.email} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Change password</Label>
                <Input id="password" name="password" type="password" value={user.password} onChange={handleChange} />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
