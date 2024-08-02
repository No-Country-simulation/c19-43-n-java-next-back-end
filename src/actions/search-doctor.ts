'use server'

import { redirect } from "next/navigation";
import { z } from "zod"

const formSchema = z.object({
  provincia: z.string(),
  localidad: z.string()
})
export async function searchDoctorRedirect(formState: {errors:string}, formData: FormData) {
  const provincia = formData.get('provincia')
  const localidad = formData.get('localidad')
  // console.log("searchDoctorRedirect",provincia,localidad);
  
  if(typeof provincia !== 'string' || provincia.length < 3)
    return {errors: 'Tiene que seleccionar una provincia'}
  if(typeof localidad !== 'string' || localidad.length < 3)
    return {errors: 'Tiene que seleccionar una localidad'}

  const data = {
    country:"Peru",
    province:provincia,
    localidad:localidad,
  }
  const queryParamString = new URLSearchParams(data).toString();
  let url = `/user/doctors?${queryParamString}`
  redirect(url)
}