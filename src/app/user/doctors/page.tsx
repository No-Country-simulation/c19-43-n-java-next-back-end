'use client'
// export const runtime = 'edge'

import { userGetDoctors } from '@/api/data'
import LocationSelector from '@/components/LocationSelector'
import DoctList from '@/components/user/doctors/DoctList'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function Page() {
  const searchParams = useSearchParams()
  // console.log("user/doctors/page srcparams:",searchParams);
  return (
    <div className="bg-white p-4 rounded">
      <h1>Listado de doctores</h1>
      <LocationSelector />
      <DoctList params={{srcpars:searchParams}} />
    </div>
  )
}
