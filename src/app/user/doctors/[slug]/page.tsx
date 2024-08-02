export const runtime = 'edge'

import { getDoctor, getSchedule } from '@/api/doctors'
import Booking from '@/components/Booking';
import { ConsultType } from '@/types/consult'
import Doctor from '@/types/doctor';
import { getUser } from '@/api/auth'
import { cookies } from 'next/headers';
import Navbar from '@/components/Navbar';

export default async function doctor({ params }: { params: { slug: string } }) {
  const doctor_data: Doctor = await getDoctor(params.slug);
  const consults: ConsultType[] = await getSchedule(params.slug)
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get('token');
  const token: string = tokenCookie?.value ?? ""; 

  const user_data = await getUser(token);
  return (
    <>
      <div className="container mx-auto px-4 py-8 h-full flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <img src={`${doctor_data.imagen}`} alt="background image" className="w-full h-64 md:h-full object-center object-cover"/>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Booking
              doctor={doctor_data}
              consults={consults}
              user={user_data}
              token={token}
            />
          </div>
        </div>
      </div>
    </>
  )
}
