export const runtime = 'edge'

import { getAllDoctors } from '@/api/doctors'
import { DoctorCard } from '@/components/DoctorCard'

export default async function ListDoctor() {
    const data: { nombre: string; apellido: string }[] = await getAllDoctors()

    
    return (
        <div className="">
            {data.map((doctor, index) => (
                <DoctorCard 
                    key={index}
                    name={doctor.nombre} 
                    lastname={doctor.apellido} 
                    description="algo" 
                    price="S./100" 
                    image="https://img.freepik.com/foto-gratis/hermosa-joven-doctora-mirando-camara-oficina_1301-7807.jpg"
                />
            ))}
        </div>
    )
}
