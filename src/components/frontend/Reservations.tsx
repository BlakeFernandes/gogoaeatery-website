import { Button } from "./ui/button";
import * as React from "react"
import validator from "validator";
import { useState } from "react";
import { z } from "zod";
import Modal from "./Modal";
import { ReservationForm, ReservationSelection } from "./ReservationForm";

const Reservations = () => {
    const [selectedPeople, setSelectedPeople] = useState<string>("1 Person");
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => { }}>
                <ReservationForm
                    selectedPeople={selectedPeople}
                    selectedTime={selectedTime}
                    selectedDate={selectedDate}
                    setSelectedPeople={setSelectedPeople}
                    setSelectedTime={setSelectedTime}
                    setSelectedDate={setSelectedDate}
                    setIsModalOpen={setIsModalOpen}
                />
            </Modal >
            <section>
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="py-8 md:py-12">
                        <div className="max-w-4xl mx-auto text-center" data-aos-id-tabs="">
                            <div className="w-16 mx-auto border-t-2 border-[#C7A17A] pb-2"></div>
                            <h2 className="h3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
                                RESERVATIONS
                            </h2>
                            <div className="flex justify-center items-center space-x-4">
                                <ReservationSelection
                                    selectedPeople={selectedPeople}
                                    selectedTime={selectedTime}
                                    selectedDate={selectedDate}
                                    setSelectedPeople={setSelectedPeople}
                                    setSelectedTime={setSelectedTime}
                                    setSelectedDate={setSelectedDate}
                                />
                                <Button onClick={() => setIsModalOpen(true)}>BOOK A TABLE</Button>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
}


export default Reservations;