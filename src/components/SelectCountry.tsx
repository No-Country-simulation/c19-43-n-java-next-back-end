"use client"

import form_countries from "@/data/countries.json"

import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState, useEffect } from "react";

export default function SelectCountry() {
  const countries_data = Object.keys(form_countries);

  const [country, setCountry] = useState("Peru");
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");
    if (!!savedCountry) {
      setCountry(savedCountry)
    } else {
      setShowDialog(true)
    }
  }, [])

  function submitForm() {
    localStorage.setItem("country", country)
    setShowDialog(false)
    window.location.reload()
  }
  

  return (
    <Dialog open={showDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Elige tu país</DialogTitle>
          <DialogDescription>
            Tenemos una experiencia más personalizada para ti.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row gap-2 w-full">
          {countries_data.map((item: string) => (
            <div className="flex flex-col justify-center w-full items-center my-3" key={item}>
              <button
                onClick={() => {
                  setCountry(item)
                }}
              >
                <img
                  className={`shadow-sm w-24 ${country === item ? "bg-slate-300 rounded-xl" : ""}`}
                  src={`/countries/${item}.svg`} alt={item} />
                <p className="text-center w-full">{item}</p>
              </button>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={submitForm}>
            Aceptar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
