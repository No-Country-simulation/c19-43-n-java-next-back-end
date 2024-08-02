import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getAppointments } from "@/api/appointments"

import { getUser } from '@/api/auth'
import { cookies } from 'next/headers';

export default async function page() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const appointments = await getAppointments(token)

  return (
    <div className="container">
    <Table>
      <TableCaption>Lista de citas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Doctor</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Hora</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          /*
          !!appointments && appointments.map((appointment) => (
            <TableRow key={appointment.date}>
              <TableCell>{appointment.doctor}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.price}</TableCell>
              <TableCell>{appointment.status}</TableCell>
            </TableRow>
          ))
            */
        }
      </TableBody>
    </Table>
    </div>

  )
}
