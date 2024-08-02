"use client"

import { useEffect, useState, Fragment } from "react"
import { format, startOfDay } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { ConsultType } from '@/types/consult'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function Schedule({ consults }: { consults: ConsultType[] | null | undefined }) {
    const [date, setDate] = useState<Date>(new Date())
    const [filteredConsults, setFilteredConsults] = useState<ConsultType[]>([])

    useEffect(() => {
        if (consults && date) {
            const selectedDate = format(date, "yyyy-MM-dd")
            const filtered = consults.filter((consult) => {
                const consultDate = new Date(consult.inicio).toISOString().split('T')[0]
                return consultDate === selectedDate
            })
            console.log(filtered)
            setFilteredConsults(filtered)
        } else {
            setFilteredConsults([])
        }
    }, [date, consults])

    const handleDateChange = (newDate: Date | undefined) => {
        if (newDate && startOfDay(newDate) >= startOfDay(new Date())) {
            setDate(newDate)
        } else {
            // Optionally, you could set date to null or show an error
            console.log("Selected date is in the past")
        }
    }

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateChange}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <ScrollArea className="h-72 w-full rounded-md border">
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Consultas</h4>
                    {filteredConsults.length > 0 ? (
                        filteredConsults.map((consult) => (
                            <Fragment key={consult.id}>
                                <div className="text-sm mb-2">
                                    <p>Inicio: {format(new Date(consult.inicio), "PPPpp")}</p>
                                    <p>Fin: {format(new Date(consult.fin), "PPPpp")}</p>
                                    <p>Disponible: {consult.disponible ? "Sí" : "No"}</p>
                                </div>
                                <Separator className="my-2" />
                            </Fragment>
                        ))
                    ) : (
                        <p>No consultations for the selected date</p>
                    )}
                </div>
            </ScrollArea>
        </div>
    )
}
