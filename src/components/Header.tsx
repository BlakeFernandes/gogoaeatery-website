"use server";

import Image, { StaticImageData } from "next/image";

import PaperSvg from "@/paper.svg";
import LogoIcon from "@/images/logo-icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import { Button, buttonVariants } from "./frontend/ui/button";
import NavBar from "./Navbar";
import NavCart from "./NavCart";

export const MiniHeader = (props: { title?: string, heroImg: StaticImageData }) => {
    return (
        <>
            <div className="bg-[#171717] text-white text-xs px-16 py-3 flex justify-between">
                <div className="flex space-x-8">
                    <Link className="items-center flex hover:text-[#C7A17A]" href="https://maps.app.goo.gl/aDk2A5ntDKVtAzSH9" target="_blank">
                        <span className="material-symbols-filled pr-2">
                            location_on
                        </span>
                        3/18 Clarence St, Devonport, Auckland
                    </Link>
                    <Link className="items-center flex hover:text-[#C7A17A]" href="tel:+094454173">
                        <span className="material-symbols-filled pr-2">
                            phone_iphone
                        </span>
                        09 445 4173
                    </Link>
                    <Link className="items-center hover:text-[#C7A17A] hidden xl:flex" href="mailto:eat@gogoaeatery.co.nz">
                        <span className="material-symbols-filled pr-2">
                            mail
                        </span>
                        eat@gogoaeatery.co.nz
                    </Link>
                </div>
                <div className="space-x-4 flex text-[1rem] items-center">
                    <NavCart />
                    <Link href="https://www.facebook.com/gogoaeatery/" className="hidden xl:block"><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link href="https://www.instagram.com/gogoaeatery/" className="hidden xl:block"><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>
            </div>

            <header
                className="relative overflow-hidden bg-cover bg-no-repeat block"
            >
                <NavBar className="bg-black"/>
            </header>
        </>
    );
}

const Header = (props: { title?: string, heroImg: StaticImageData }) => {
    return (
        <>
            <div className="bg-[#1A191B] text-white text-xs px-16 py-3 flex justify-between">
                <div className="flex space-x-8">
                    <Link className="items-center flex hover:text-[#C7A17A]" href="https://maps.app.goo.gl/aDk2A5ntDKVtAzSH9" target="_blank">
                        <span className="material-symbols-filled pr-2">
                            location_on
                        </span>
                        3/18 Clarence St, Devonport, Auckland
                    </Link>
                    <Link className="items-center flex hover:text-[#C7A17A]" href="tel:+094454173">
                        <span className="material-symbols-filled pr-2">
                            phone_iphone
                        </span>
                        09 445 4173
                    </Link>
                    <Link className="items-center hover:text-[#C7A17A] hidden xl:flex" href="mailto:eat@gogoaeatery.co.nz">
                        <span className="material-symbols-filled pr-2">
                            mail
                        </span>
                        eat@gogoaeatery.co.nz
                    </Link>
                </div>
                <div className="space-x-4 flex text-[1rem] items-center">
                    <NavCart />
                    <Link href="https://www.facebook.com/gogoaeatery/" className="hidden xl:block"><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link href="https://www.instagram.com/gogoaeatery/" className="hidden xl:block"><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>
            </div>

            <header
                className="relative overflow-hidden bg-cover bg-no-repeat block"
            >
                <Image
                    src={props.heroImg}
                    alt="Description of the image"
                    // objectPosition="50% 50%"
                    className="block w-full h-[100vh] object-cover"
                />

                <NavBar primary={true} />

                <nav className="absolute left-0 top-0 z-10 h-full w-full flex flex-col space-y-8 justify-center items-center">
                    <div className="w-full flex flex-col justify-center items-center text-center text-white">
                        <Image
                            src={LogoIcon}
                            alt="Logo Icon"
                            height={180}
                        />
                        <h1 className="text-[80px] w-full font-playlist pb-6">{props.title ? props.title : "Go Goa Eatery"}</h1>
                        <div className="space-x-6">
                            <Link className={buttonVariants({ variant: "outline", size:"lg"  })} href="/menu">SEE MENU</Link>
                            {/* <Link className={buttonVariants({ variant: "outline", size: "lg" })} href="/reservations">BOOK YOUR TABLE</Link> */}
                        </div>
                    </div>
                </nav>
            </header>

            <div className="relative z-10">  
                <div className="absolute bottom-0 left-0 w-full">
                    <Image
                        priority
                        src={PaperSvg}
                        className="w-full"
                        alt="Header Transition"
                    />
                </div>
            </div>
        </>
    );
}


{/* <div className="absolute left-0 top-0 z-20 p-4">
                    <Suspense fallback={<OpenCart />}>
                        <Cart />
                    </Suspense>
                </div> */}

export default Header;