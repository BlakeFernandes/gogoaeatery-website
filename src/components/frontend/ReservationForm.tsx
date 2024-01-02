import { zodResolver } from "@hookform/resolvers/zod"
import { createTimeSlots } from "~/utils/utils";
import { Button } from "./ui/button";
import { DatePicker } from "./ui/datepicker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import * as React from "react"
import validator from "validator";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "~/components/frontend/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/frontend/ui/popover"
import { cn } from "~/utils/utils"
import { useEffect, useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./Form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./Input";
import { api } from "~/utils/api";

const FormSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    phone_number: z.string().refine(validator.isMobilePhone),
    email: z.string({
        required_error: "Please select an email to display.",
    }).email(),
    ocassion: z.string(),
})

export const ReservationForm = ({ 
    selectedDate,
    selectedTime,
    selectedPeople,
    setSelectedPeople,
    setSelectedTime,
    setSelectedDate,
    setIsModalOpen
}: {
    selectedDate?: Date,
    selectedTime?: string,
    selectedPeople?: string,
    setSelectedPeople: (value: string) => void,
    setSelectedTime: (value: string) => void,
    setSelectedDate: (value: Date | undefined) => void
    setIsModalOpen: (value: boolean) => void
}) => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        mode: 'onChange'
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        
        console.log('here')
        
        const fullData = {
            ...data,
            selectedPeople,
            selectedTime,
            selectedDate: selectedDate ? format(selectedDate, "PPP") : undefined
        };
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="bg-white p-4 space-y-6">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-semibold">Reservation at Go Goa Eatery</p>
                        <button onClick={() => setIsModalOpen(false)}>
                            <i className="la la-lg la-close" />
                        </button>
                    </div>
                    <div className="border-b flex space-x-4">
                        <p className={cn("pb-2 font-semibold", !selectedPeople || !selectedTime || !selectedDate ? "border-blue-500 text-blue-500" : "")}>1. Find a Table</p>
                        <p className={cn("pb-2 font-semibold", selectedPeople && selectedTime && selectedDate ? "border-blue-500 text-blue-500" : "")}>2. Your Details</p>
                    </div>
                    {selectedPeople && selectedTime && selectedDate ? (
                        <>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="sm:flex sm:flex-col sm:items-start space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormControl>
                                                    <Input placeholder="First Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormControl>
                                                    <Input placeholder="Last Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone_number"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormControl>
                                                    <Input placeholder="Phone Number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormControl>
                                                    <Input placeholder="Email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex-col flex w-full">
                                    <p className="text-lg font-semibold pb-2">Reservation Details</p>
                                    <div className="w-full flex items-center space-x-1">
                                        <span className="!text-[20px] !font-semibold material-symbols-outlined">
                                            calendar_today
                                        </span>
                                        <span>{selectedDate ? format(selectedDate, 'PPP') : 'Select a date'}</span>
                                    </div>
                                    <div className="w-full flex items-center space-x-1">
                                        <span className="!text-[20px] !font-semibold material-symbols-outlined">
                                            schedule
                                        </span>
                                        <span>{selectedTime || 'Select a time'}</span>
                                    </div>
                                    <div className="w-full flex items-center space-x-1">
                                        <span className="!text-[20px] !font-semibold material-symbols-outlined">
                                            group
                                        </span>
                                        <span>{selectedPeople || 'Select people'}</span>
                                    </div>
                                    <div className="w-full flex space-x-1">
                                        <span className="!text-[20px] !font-semibold material-symbols-outlined">
                                            location_on
                                        </span>
                                        <span>3/18 Clarence Street, Devonport, Auckland 0624</span> {/* Assuming this is static */}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="sm:flex space-x-4 text-center items-center">
                            <ReservationSelection
                                selectedPeople={selectedPeople}
                                selectedTime={selectedTime}
                                selectedDate={selectedDate}
                                setSelectedPeople={setSelectedPeople}
                                setSelectedTime={setSelectedTime}
                                setSelectedDate={setSelectedDate}
                            />
                        </div>
                    )}
                </div >
                <div className="bg-gray-50 px-4 py-3 w-full">
                    <Button
                        type="submit"
                        // disabled={!form.formState.isValid} // Disable button based on form validity
                        className="w-full"
                    >
                        Confirm Reservation
                    </Button>
                </div>
            </form >
        </Form >
    );
}

export const ReservationSelection = ({ 
    selectedPeople,
    selectedTime,
    selectedDate,
    setSelectedPeople,
    setSelectedTime,
    setSelectedDate
}: {
    selectedPeople?: string,
    selectedTime?: string,
    selectedDate?: Date,
    setSelectedPeople: (value: string) => void,
    setSelectedTime: (value: string) => void,
    setSelectedDate: (value: Date | undefined) => void
}) => {
    const [timeSlots, setTimeSlots] = useState<string[]>([]);

    const PEOPLE = [
        "1 Person",
        "2 People",
        "3 People",
        "4 People",
        "5 People",
        "6 People",
        "7 People",
        "8 People",
        "9 People",
        "10+ People",
    ]

    const WEEKDAY_OPEN_TIMES = createTimeSlots([645, 1630]);
    const SATURDAY_OPEN_TIMES = createTimeSlots([730, 1530]);
    const SUNDAY_OPEN_TIMES = createTimeSlots([800, 1530]);

    useEffect(() => {
        let availableSlots = selectedDate ? getSlotsForDay(selectedDate) : [];
        setTimeSlots(availableSlots);
    }, [selectedDate]);

    function getSlotsForDay(date: Date): string[] {
        const day = date.getDay(); // 0 is Sunday, 6 is Saturday
        if (day === 0) return SUNDAY_OPEN_TIMES;
        if (day === 6) return SATURDAY_OPEN_TIMES;
        return WEEKDAY_OPEN_TIMES;
    }

    return (
        <>
            <Select onValueChange={(value) => setSelectedPeople(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select People" />
                </SelectTrigger>
                <SelectContent>
                    {PEOPLE.map((person, index) => (
                        <SelectItem key={index} value={person}>{person}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <span className="font-bold">FOR</span>
            <Popover>
                <PopoverTrigger asChild>
                    <button
                        className={cn(
                            "flex h-9 items-center whitespace-nowrap rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-[280px] justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={{ before: new Date(Date.now() + 86400000) }}
                    />
                </PopoverContent>
            </Popover>
            <span className="font-bold">AT</span>
            <Select onValueChange={(value) => setSelectedTime(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                    {timeSlots.map((time, index) => (
                        <SelectItem key={index} value={time}>{time}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    )
}