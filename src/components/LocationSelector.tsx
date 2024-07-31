'use client'
import form_countries from "@/data/countries.json"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FormCountries } from "@/types/countries";
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function LocationSelector() {
    const countries_data : FormCountries = form_countries

    useEffect(()=>{
        const country_local : string = localStorage.getItem('country') || ""
        setCountry(country_local)
    }, [])

    const formSchema = z.object({
        provincia: z.string(),
        localidad: z.string()
      })
    
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            provincia: "",
            localidad: ""
        },
      })
    
    const [country, setCountry] = useState("Peru")
    const [province, setProvince] = useState("")

    async function onSubmit(values: z.infer<typeof formSchema>) {
        redirect(`/doctors/${country}/${province}/${values.localidad}`)
    }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} >
    <Card >
      <CardHeader>
        <CardTitle>Busca ahora!</CardTitle>
        <CardDescription>Encuentra a tu doctor ideal.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col w-full gap-4 ">
            <FormField
                control={form.control}
                name="provincia"
                render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5 w-full">
                    <FormLabel>Provincia</FormLabel>
                    <FormControl>
                    <Select
                        onValueChange={(value) => {
                            field.onChange(value)
                            setProvince(value)
                        }}
                        value={field.value}
                        disabled={!country}
                    >
                        <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu provincia" />
                        </SelectTrigger>
                        <SelectContent>
                        {country &&
                            Object.keys(countries_data[country] || {}).map((province: string) => (
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
                <FormItem className="flex flex-col space-y-1.5 w-full">
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
                        {province && (countries_data[country][province]?.map((town: string) => (
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
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button type="submit">Buscar</Button>
      </CardFooter>
    </Card>
    </form>
    </Form>
    
  )
}
