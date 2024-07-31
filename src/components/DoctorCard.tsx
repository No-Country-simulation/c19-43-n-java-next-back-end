import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function DoctorCard({name, description, price, image} : {name: string, description: string, price: string, image: string}) {
  return (
    <Card className="flex flex-row justify-start items-center gap-5 bg-white shadow-lg px-2 py-4 rounded w-full max-w-sm overflow-hidden">
      <Avatar>
          <AvatarImage src={image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      <CardContent className="p-0">
        <div>
          <CardTitle className="font-bold text-xl">{name}</CardTitle>
          <CardDescription className="text-base text-gray-700">{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}
