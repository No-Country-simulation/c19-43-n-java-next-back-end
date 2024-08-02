export const runtime = 'edge'

import { getDoctor, getSchedule } from '@/api/doctors'
import Booking from './../../../components/Booking';
import { ConsultType } from '@/types/consult'
import Doctor from '@/types/doctor';

export default async function doctor({ params }: { params: { slug: string } }) {
  const data: Doctor = await getDoctor(params.slug)
  const consults: ConsultType[] = await getSchedule(params.slug)

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"
              alt="background image"
              className="w-full h-64 md:h-full object-center object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Booking
              doctor={data}
              consults={consults}
            />
          </div>
        </div>
      </div>
    </>
  )
}
