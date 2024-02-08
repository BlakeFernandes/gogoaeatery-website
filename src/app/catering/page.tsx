import Footer from "~/components/frontend/Footer";
import Header from "~/components/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Head from "next/head";

import Hero from "@/images/hero-4.jpg";
import CateringAbout from "~/components/frontend/sections/catering/CateringAbout";

import CateringMenuImg from "@/images/menu-catering.png";
import MenuCard from "~/components/frontend/MenuCard";
import Link from "next/link";
import { buttonVariants } from "~/components/frontend/ui/button";

export const metadata = {
    title: "Go Goa Eatery | Corporate, BBQ, Party Catering Service Auckland",
    description: "Brining India's tastes to Auckland's festives. Auckland's best authentic Indian catering service.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Catering = () => {
    return (
        <>
            <Header title="Go Goa Eatery Catering" heroImg={Hero}/>
            
            <CateringAbout />

            <div className="w-full flex justify-center items-center pb-12 space-x-2">
                <Link href='/menu/catering-menu.pdf' target="_blank" className={buttonVariants({ variant: "default", size: "sm" })}>VIEW INDIAN CATERING MENU</Link>
                <Link href='/menu/continental-catering-menu.pdf' target="_blank" className={buttonVariants({ variant: "default", size: "sm" })}>VIEW CONTINENTAL CATERING MENU</Link>
            </div>

            <CafeMap />
            <Footer />
        </>
    );
}

export default Catering;