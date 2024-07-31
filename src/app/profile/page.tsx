"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { register } from "@/api/auth";

import form_countries from "@/data/countries.json";
import { FormCountries } from "@/types/countries";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const countries_data : FormCountries = form_countries;

const formSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  nombre: z.string().min(3),
  apellido: z.string().min(3),
  telefono: z.string().min(8),
  documento: z.string().min(8),
  pais: z.string().min(3),
  provincia: z.string().min(3),
  localidad: z.string().min(3),
  role: z.string().min(3),
});

export default function Register() {
  const [country, setCountry] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      nombre: "",
      apellido: "",
      telefono: "",
      documento: "",
      pais: "",
      provincia: "",
      localidad: "",
      role: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const sesion = await register(values);
    if (sesion) {
      window.location.reload();
    }
  }
  return (
    <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="container">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="apellido"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel>Apellido</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="documento"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel>Documento</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pais"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel>País</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setCountry(value);
                        setProvince(""); // Clear province and locality when country changes
                      }}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu país de residencia" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(countries_data).map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="provincia"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel>Provincia</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setProvince(value);
                      }}
                      value={field.value}
                      disabled={!country}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu provincia" />
                      </SelectTrigger>
                      <SelectContent>
                        {country &&
                          Object.keys(countries_data[country] || {}).map((province : string) => (
                            <SelectItem key={province} value={province}>
                              {province}
                            </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="localidad"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel>Localidad</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                      disabled={!province}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu localidad" />
                      </SelectTrigger>
                      <SelectContent>
                        {province && (countries_data[country][province]?.map((town : string) => (
                          <SelectItem key={town} value={town}>
                            {town}
                          </SelectItem>
                        )) || [])}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel>Rol</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Únete como" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MEDICO">MEDICO</SelectItem>
                        <SelectItem value="PACIENTE">PACIENTE</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
                
              )}
            />


            <DialogFooter>
              <Button type="submit">Registrarse</Button>
            </DialogFooter>
          </form>
        </Form>
  );
}


