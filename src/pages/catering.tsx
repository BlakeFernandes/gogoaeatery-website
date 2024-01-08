import Footer from "~/components/frontend/Footer";
import Header from "~/components/frontend/header/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Head from "next/head";

import Hero from "@/images/hero-4.jpg";
import CateringAbout from "~/components/frontend/sections/catering/CateringAbout";

import CateringMenuImg from "@/images/menu-catering.png";
import MenuCard from "~/components/frontend/MenuCard";

const Catering = () => {
    return (
        <>
            <Head>
                <title>Go Goa Eatery - Corporate, BBQ, Party Catering Service Auckland</title>
                <meta name='description' content="Brining India's tastes to Auckland's festives. Auckland's best authentic Indian catering service." />
            </Head>

            <Header  heroImg={Hero}/>
            
            <CateringAbout />


            <div className="w-full flex justify-center items-center pb-12">
                <MenuCard image={CateringMenuImg} text="VIEW CATERING MENU" href="/menu/catering-menu.pdf" />
            </div>

            <CafeMap />
            <Footer />
        </>
    );
}

export default Catering;