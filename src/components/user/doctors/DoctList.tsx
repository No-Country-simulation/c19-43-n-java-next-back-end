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
        <div className="grid grid-cols-2 grid-flow-col gap-4">
            {/* Formulario de Filtros */}
            {/* Listado de Doctores en Tarjetas */}
            {data.map((doctor, index) => (
                <DoctCard params={{doctdata:data[index]}} key={index} />
            ))}
        </div>
    )
}
