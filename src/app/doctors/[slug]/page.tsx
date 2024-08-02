
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { getDoctor, getSchedule } from '@/api/doctors'
import Image from 'next/image';
import Schedule from './../../../components/Schedule';
import { ConsultType } from '@/types/consult'

export default async function doctor({ params }: { params: { slug: string } }) {
  const data = await getDoctor(params.slug)
  const consults: ConsultType[] = await getSchedule(params.slug)

  console.log(consults)
  return (
    <>
      <div className="container">
        <div className="flex flex-row"> 
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
            <img
              src="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"
              alt="background image"
              className="w-full h-64 md:h-full object-center object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Emanuel Torres</CardTitle>
              <CardDescription>Especializado en Psicologia</CardDescription>
            </CardHeader>
            <CardContent>
              <Schedule consults={consults}/>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </>
  )
}