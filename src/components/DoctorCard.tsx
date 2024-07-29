import * as React from "react"

import { Button } from "@/components/ui/button"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DoctorCard() {
  const product = {
    name: "Luisa Fernandez",
    description: "Psicologia",
    price: 100,
    image: "https://via.placeholder.com/300x200",
  }
  
  return (
    <Card className="flex flex-row justify-start items-center gap-5 bg-white shadow-lg px-2 py-4 rounded w-full max-w-sm overflow-hidden">
      <Avatar>
          <AvatarImage src={product.image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      <CardContent className="p-0">
        <div>
          <CardTitle className="font-bold text-xl">{product.name}</CardTitle>
          <CardDescription className="text-base text-gray-700">{product.description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}
