"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { RegDoctor } from "@/api/dtypes";
import { StarRating } from "./StarRating";
import { Button } from "@tremor/react";
import Link from "next/link";

interface DoctProps{
  params:{
    doctdata:RegDoctor
  }
}

export function DoctCard({params}:DoctProps) {  
  let { doctdata } = params //Extraer doct de los parámetros
  let { nombre, apellido,especialidad,localidad,pais,id } = doctdata
  return (
    <Card className="max-w-md md:max-w-2xl px-2 shadow-md p-4 bg-secondary">
      <CardContent className="flex flex-row gap-4">
        <div className="bg-cover bg-bottom h-40 md:h-auto md:w-56">
          {/* Imagen referencial */}
          <Image src={"/img/imgdr.jpeg"} alt="dr" className="size-60 rounded-full" width={400} height={400} />
        </div>
        <div>
          <CardTitle className="font-bold text-xl md:text-2xl capitalize">{`${nombre} ${apellido}`}</CardTitle>
          <CardDescription className="text-gray-900 font-bold capitalize">{especialidad}</CardDescription>
          <p className="capitalize">{`${pais}, ${localidad}`}</p>
          <StarRating params={{stars:5,reviews:15}} />
          <Button variant="primary">
            <Link href={`doctors/${id}`}>
              Separar Cita
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
