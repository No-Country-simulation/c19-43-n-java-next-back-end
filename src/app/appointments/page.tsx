import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function page() {
  const appointments = [
    {
      doctor: "Dr. House",
      date: "2022-12-12",
      time: "09:00",
      status: "Visited",
      price: "$100",
    },
  ]
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
          appointments.map((appointment) => (
            <TableRow key={appointment.date}>
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
