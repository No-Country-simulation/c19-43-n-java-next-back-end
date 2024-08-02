import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Schedule from '@/components/Schedule'
import { ConsultType } from '@/types/consult'
import Doctor from "@/types/doctor"

interface BookingProps {
  doctor: Doctor
  consults: ConsultType[]
}

export default function Booking({ doctor, consults }: BookingProps) {
  return (
    <>
        <Card className="w-full h-full">
            <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold">{doctor.nombre}</CardTitle>
                <CardDescription className="text-lg text-gray-600">{doctor.especialidad}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Schedule consults={consults} />
            </CardContent>
        </Card>
    </>
  )
}
