// Respuesta Literal a un request de backend
export type ResponseLit = {
  r:boolean
  data:any
  error:string|null
}

export type RegDoctor = {
  id: number
  nombre: string | null
  apellido: string | null
  documento: string | null
  pais: string | null
  localidad: string | null
  provincia: string | null
  telefono: string | null
  username: string | null
  password: string | null
  role: string | null
  fecha_Registro: string | null
  estado: boolean | null
  especialidad: string | null
  n_licencia: string | null
  anios_experiencia: number | null
  num_contacto: number | null
  consultorio: string | null
  slug: string | null
}