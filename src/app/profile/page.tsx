"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
const formSchema = z.object({
  username: z.string().email({
    message: "El correo no tiene un formato valido."
  }),
})


export default function Profile() {
  return (
    <div>Miraesto
        <div>Miraesto</div>
        <div>Miraesto</div>
        <div>Miraesto</div>
        <div>Miraesto</div>
        <div>Miraesto</div>
        <div>Miraesto</div>
        <div>Miraesto</div>
    </div>
  )
}


