import { RegDoctor } from '@/api/dtypes'
import { DoctCard } from './DoctCard'
import { userGetDoctors } from '@/api/data'

interface DoctListProps{
    params:{
        srcpars:any
    }
}

export default async function DoctList({params}:DoctListProps) {
    // Asegúrate de definir el tipo correcto para data
    const {srcpars} = params
    let {data} = await userGetDoctors()
    return (
        <div className="grid grid-cols-2 grid-flow-col gap-4">
            {/* Listado de Doctores en Tarjetas */}
            {data.map((doctor:RegDoctor, index:number) => (
                <DoctCard params={{doctdata:doctor}} key={index} />
            ))}
        </div>
    )
}
