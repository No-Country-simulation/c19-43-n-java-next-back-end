"use client";
import form_countries from "@/data/countries.json";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as actions from "@/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FormCountries } from "@/types/countries";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { searchDoctorRedirect } from "@/actions";
import { useFormState } from "react-dom";

export default function LocationSelector({ ...props }) {
  const countries_data: FormCountries = form_countries;

  useEffect(() => {
    const country_local: string = localStorage.getItem("country") || "";
    setCountry(country_local);
  }, []);

  const formSchema = z.object({
    provincia: z.string(),
    localidad: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provincia: "",
      localidad: "",
    },
  });

  const [country, setCountry] = useState("Peru");
  const [province, setProvince] = useState("");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const queryParamString = new URLSearchParams({
      country: country,
      province: province,
      localidad: values.localidad,
    }).toString();
    let url = `/user/doctors/${queryParamString}`;
    console.log("Submit location:", url);
    redirect(url);
  }
  const [formState, action] = useFormState(actions.searchDoctorRedirect,{ errors: "" })

  return (
    <Form {...form}>
      <form action={action}>
        <Card>
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
                        field.onChange(value);
                        setProvince(value);
                      }}
                      value={field.value}
                      disabled={!country}
                      name="provincia"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu provincia" />
                      </SelectTrigger>
                      <SelectContent>
                        {country &&
                          Object.keys(countries_data[country] || {}).map(
                            (province: string) => (
                              <SelectItem key={province} value={province}>
                                {province}
                              </SelectItem>
                            )
                          )}
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
                      name="localidad"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu localidad" />
                      </SelectTrigger>
                      <SelectContent>
                        {province &&
                          (countries_data[country][province]?.map(
                            (town: string) => (
                              <SelectItem key={town} value={town}>
                                {town}
                              </SelectItem>
                            )
                          ) ||
                            [])}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            { formState && formState.errors ? <div className="my-2 p-2 bg-red-200 border rounded border-red-400"> {formState.errors} </div> : null }
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button type="submit">Buscar</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
