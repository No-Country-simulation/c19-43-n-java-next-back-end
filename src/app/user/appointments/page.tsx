export const runtime = 'edge'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { cookies } from 'next/headers';

export default async function page() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const appointments = [
    {
      doctor: "Dr. Ana López",
      date: "2024-08-10",
      time: "10:00 AM",
      price: "$50",
      status: "Confirmada"
    },
    {
      doctor: "Dr. Juan Pérez",
      date: "2024-08-11",
      time: "02:00 PM",
      price: "$60",
      status: "Pendiente"
    },
    {
      doctor: "Dr. Marta Gómez",
      date: "2024-08-12",
      time: "09:00 AM",
      price: "$55",
      status: "Confirmada"
    },
    {
      doctor: "Dr. Luis Fernández",
      date: "2024-08-13",
      time: "03:00 PM",
      price: "$70",
      status: "Cancelada"
    },
  ];

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
            appointments.map((appointment, index) => (
              <TableRow key={index}>
                <TableCell>{appointment.doctor}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.price}</TableCell>
                <TableCell>{appointment.status}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}