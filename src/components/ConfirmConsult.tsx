"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ConsultType } from "@/types/consult";
import Doctor from "@/types/doctor";
import { Separator } from "@/components/ui/separator";
import { UserType } from "@/types/users";
import Register from "./Register";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { setAppointment } from '@/api/appointments'
interface ConfirmConsultProps {
  doctor: Doctor;
  consult: ConsultType | null;
  user: UserType | null | { error: string; [key: string]: any };
  token: string | null;
}

interface ConsultaValue {
  idMedico: number;
  motivoConsulta: string;
}

export default function ConfirmConsult({ doctor, consult, user, token }: ConfirmConsultProps) {
  const [motivoConsulta, setMotivoConsulta] = useState<string>("");

  // Check if user is an error object
  if (user && typeof user === 'object' && 'error' in user) {
    return (
      <div className="mt-4 p-4 bg-gray-50 border rounded w-full h-20 flex flex-row justify-center items-center">
        <Register />
      </div>
    );
  }

  // Check if user is null or undefined
  if (!user) {
    return <Register />;
  }

  if (consult === null) {
    return (
      <div className="mt-4 p-4 bg-gray-50 border rounded w-full h-20">
        No appointment selected
      </div>
    );
  }

  function submit() {
    const idMedico: number = doctor.id !== null ? doctor.id : 100000;
    
    const value: ConsultaValue = {
      idMedico: idMedico,
      motivoConsulta: motivoConsulta
    };
  
    if (token !== null && consult !== null) {
      setAppointment(value.idMedico, token, consult.id);
    } else {
      console.log("Nada");
    }
  }

  // Calculate duration
  const start = new Date(consult.inicio);
  const end = new Date(consult.fin);
  const duration = Math.round((end.getTime() - start.getTime()) / (1000 * 60)); // duration in minutes

  return (
    <div className="mt-4 p-4 bg-gray-50 border rounded w-full h-20">
      <div className="flex flex-row justify-between w-full items-center">
        <div className="mb-4">
          <h5 className="text-sm font-medium">Horario seleccionado</h5>
          <p>
            <strong>Hora de inicio:</strong> {start.toLocaleTimeString()} &nbsp; | &nbsp;
            <strong>Duración:</strong> {duration} minutos
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Revisar Cita</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>¿Estás listo para tu consulta?</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Revisa la información de la cita antes de continuar:
            </DialogDescription>
            <div className="flex flex-col space-y-2 mt-2">
              <Separator className="my-2" />
              <p><strong>Doctor:</strong> {doctor.nombre} {doctor.apellido}</p>
              <Separator className="my-2" />
              <p><strong>Fecha:</strong> {start.toLocaleDateString()}</p>
              <Separator className="my-2" />
              <p><strong>Hora de inicio:</strong> {start.toLocaleTimeString()}</p>
              <Separator className="my-2" />
              <p><strong>Hora de fin:</strong> {end.toLocaleTimeString()}</p>
              <Separator className="my-2" />
              <p><strong>Disponibilidad:</strong> {consult.disponible ? "Disponible" : "No disponible"}</p>
              <Separator className="my-2" />
            </div>
            <Input />
            <div className="flex justify-end mt-4 space-x-2">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancelar
                </Button>
              </DialogClose>
              <Button onClick={() => submit()}>Confirmar</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
