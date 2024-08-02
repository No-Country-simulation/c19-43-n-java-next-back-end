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
    const [selectedConsult, setSelectedConsult] = useState<ConsultType | null>(null)

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
            console.log("Selected date is in the past")
        }
    }

    const handleTimeClick = (selectedConsultNow: ConsultType) => {
        setSelectedConsult(selectedConsultNow)
    }

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal",
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
            <ScrollArea className="h-72 w-full rounded-md border mt-4">
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Consultas</h4>
                    {filteredConsults.length > 0 ? (
                        filteredConsults.map((consult) => (
                            <Fragment key={consult.id}>
                                <Button 
                                    className="mb-2 text-sm p-4 w-full text-left bg-gray-100 hover:bg-gray-200 rounded" 
                                    onClick={() => handleTimeClick(consult)}
                                >
                                    <div className="font-medium text-gray-900">
                                        {format(new Date(consult.inicio), "HH:mm")} - {format(new Date(consult.fin), "HH:mm")}
                                    </div>
                                    <div className="text-gray-600 text-xs">
                                        {format(new Date(consult.inicio), "PPP")}
                                    </div>
                                </Button>
                                <Separator className="my-2" />
                            </Fragment>
                        ))
                    ) : (
                        <p>No consultations for the selected date</p>
                    )}
                </div>
            </ScrollArea>
            <div className="mt-4 p-4 bg-gray-50 border rounded">
                <h5 className="text-sm font-medium">Selected Time</h5>
                {selectedConsult === null ? (
                    <p>No appointment selected</p>
                ) : (
                    <p>Consulta: {JSON.stringify(selectedConsult)}</p>
                )}
            </div>
        </div>
    )
}
