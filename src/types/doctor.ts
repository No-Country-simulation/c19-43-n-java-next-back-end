export default interface Doctor {
    id: number;
    nombre: string;
    apellido: string;
    documento: number;
    pais: string;
    localidad: string;
    provincia: string;
    telefono: number;
    username: string;
    password: string;
    role: "PACIENTE" | "MEDICO";
    fecha_Registro: string;
    estado: boolean;
    genero: string | null;
    especialidad: string | null;
    n_licencia: string | null;
    anios_experiencia: number | null;
    num_contacto: number | null;
    consultorio: string | null;
    slug: string | null;
    imagen: string | null;
  }
  