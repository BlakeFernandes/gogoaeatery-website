import Image, { StaticImageData } from "next/image"
import React from "react"

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

export default MenuCard