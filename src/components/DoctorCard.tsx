import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function DoctorCard({name, lastname, description, price, image} : {name: string, lastname: string, description: string, price: string, image: string}) {
  return (
    <Card className="max-w-md md:max-w-2xl px-2">
      <div className="bg-cover bg-bottom h-56 md:h-auto md:w-56">
        <img src={image}/>
      </div>
      <CardContent className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-row">
        <CardTitle className="font-bold text-xl md:text-2xl">{name}</CardTitle>
    <CardDescription className="text-gray-900 font-bold">{price}</CardDescription>
      </CardContent>
    </Card>
  )
}
