export const runtime = 'edge'

import { userGetDoctors } from '@/api/data'
import { RegDoctor } from '@/api/dtypes'
import ListDoctor from '@/components/ListDoctor'
import DoctList from '@/components/user/doctors/DoctList'
import TestButton from '@/components/user/TestButton'

export default async function page() {
  
  let {data} = await userGetDoctors()

  return (
    <div className="">
      <h1>Listado de doctores</h1>
      <DoctList params={{lstdocts:data}} />
    </div>
  )
}
