export const runtime = 'edge'

import {
  Card,
  CardContent,
  CardDescription, CardHeader,
  CardTitle
} from "@/components/ui/card"

import { getDoctor, getSchedule } from '@/api/doctors'
import { ConsultType } from '@/types/consult'
import Schedule from "@/components/Schedule"
import Image from "next/image"

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getDoctor(params.slug)
  // console.log("docts slug doctor data:",data);
  
  const consults: ConsultType[] = await getSchedule(params.slug)
  // console.log("docts slug schedule:",consults);
  let { nombre, apellido,especialidad,localidad,pais,id } = data

  console.log(consults)
  return (
    <>
      <div className="container">
        <div className="flex flex-row"> 
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
            <Image src={"/img/imgdr.jpeg"} alt="dr" className="w-full h-64 md:h-full object-center object-cover" width={500} height={500}/>
          </div>
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  {/* {`${nombre} ${apellido}`} */}
                  Gustavo Sanchez
                </CardTitle>
                <CardDescription>Especializado en Fisioterapia</CardDescription>
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