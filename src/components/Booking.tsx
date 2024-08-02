"use client"
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
import ConfirmConsult from './ConfirmConsult';
import { useState } from 'react'
import { UserType } from "@/types/users"


interface BookingProps {
  doctor: Doctor
  consults: ConsultType[]
  user: UserType
  token: string | null
}

export default function Booking({ doctor, consults, user, token }: BookingProps) {
    const [selectedConsult, setSelectedConsult] = useState<ConsultType | null>(null)
    const handleSelectConsult = (consult: ConsultType | null) => {
      setSelectedConsult(consult)
    }
    console.log(user)
  return (
    <>
        <Card className="w-full h-full p-0">
            <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold">{doctor.nombre}</CardTitle>
                <CardDescription className="text-lg text-gray-600">{doctor.especialidad}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Schedule consults={consults} selectedConsult={selectedConsult}  onSelectConsult={handleSelectConsult} />
            </CardContent>
            <CardFooter>
                <ConfirmConsult doctor={doctor} consult={selectedConsult} user={user} token={token}/>
            </CardFooter>
        </Card>
    </>
  )
}
