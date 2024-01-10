import Image, { StaticImageData } from "next/image"
import React from "react"

import FoodMenuImg from "@/images/menu-food.png";
import DrinksMenuImg from "@/images/menu-drinks.png";
import CateringMenuImg from "@/images/menu-catering.png";
import { TextSection } from "./ui/section";

const MenuCard = (props: { image: StaticImageData, text: string, href: string }) => {
    return (
        <section>
            <div className="mx-auto px-4 sm:px-6">
                <div className="pb-8 md:pb-12">
                    <div className="max-w-6xl mx-auto text-center" data-aos-id-tabs="">
                        <a href={props.href} target="_blank" >
                            <div className="relative h-96 w-72 overflow-hidden p-4 border-2 border-gray-300">
                                <Image
                                    src={props.image}
                                    alt="Background"
                                    layout="fill"
                                    objectFit="cover"
                                    className="z-0 transition-transform duration-700 delay-75 hover:scale-105"
                                />

                                <div className="absolute inset-0 m-2 border-2 border-white z-10 pointer-events-none"></div>

                                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                    <p className="text-white font-bold text-xl text-center">{props.text}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Menu = () => {
    return (
        <>
            <TextSection
                title="View Our Menu"
                description={[
                    "We take immense pride in presenting our dishes, each a recipe honed over generations of family tradition and expertise. These recipes, passed down through our family, have been perfected over time, capturing the true spirit and flavors of Goa."
                ]}
                footer={
                    <>

                        <div className="grid md:grid-cols-3 mx-auto max-w-4xl justify-center items-center sm:gap-x-2 pb-12">
                            <MenuCard image={FoodMenuImg} text="FOOD MENU" href="/menu/food-menu.pdf" />
                            <MenuCard image={DrinksMenuImg} text="DRINKS MENU" href="/menu/drinks-menu.pdf" />
                            <MenuCard image={CateringMenuImg} text="CATERING MENU" href="/menu/catering-menu.pdf" />
                        </div>
                    </>
                }
            />
        </>
    )
}

export default MenuCard