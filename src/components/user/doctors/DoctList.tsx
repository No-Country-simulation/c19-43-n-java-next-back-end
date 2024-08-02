import { RegDoctor } from '@/api/dtypes'
import { DoctorCard } from '@/components/DoctorCard'
import { DoctCard } from './DoctCard'

interface DoctListProps{
    params:{
        lstdocts:RegDoctor[]
    }
}

export default async function DoctList({params}:DoctListProps) {
    // Asegúrate de definir el tipo correcto para data
    const {lstdocts} = params
    const data:RegDoctor[] = lstdocts
    return (
        <div className="">
            {data.map((doctor, index) => (
                <DoctCard key={doctor.id} params={{doctdata:data[index]}} />
            ))}
        </div>
    )
}
