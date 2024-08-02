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
    especialidad: string;
    n_licencia: string;
    anios_experiencia: number;
    num_contacto: number;
    consultorio: string;
    slug: string | null;
  }
  