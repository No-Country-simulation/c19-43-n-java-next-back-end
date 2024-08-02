import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { RegDoctor } from "@/api/dtypes";

interface DoctProps{
  params:{
    doctdata:RegDoctor
  }
}

export function DoctCard({params}:DoctProps) {
  let { doctdata } = params //Extraer doct de los parámetros
  let { nombre, apellido,especialidad,localidad,pais } = doctdata
  return (
    <Card className="max-w-md md:max-w-2xl px-2 shadow-md p-4">
      <CardTitle className="font-bold text-xl md:text-2xl capitalize">{`${nombre} ${apellido}`}</CardTitle>
      <CardDescription className="text-gray-900 font-bold capitalize">{especialidad}</CardDescription>
      <CardContent className="flex flex-row">
        <div className="bg-cover bg-bottom h-56 md:h-auto md:w-56">
          {/* Imagen referencial */}
          <Image src={"/img/imgdr.jpeg"} alt="dr" className="size-60 rounded-full" width={400} height={400} />
        </div>
        <div>
          {`${pais}, ${localidad}`}
        </div>
      </CardContent>
    </Card>
  );
}
