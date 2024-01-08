import AboutUs from "~/components/frontend/sections/AboutUs";
import Footer from "~/components/frontend/Footer";
import Reservations from "~/components/frontend/Reservations";
import Header from "~/components/frontend/header/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Speciality from "~/components/frontend/sections/Speciality";
import Cakes from "~/components/frontend/sections/Cakes";
import Head from "next/head";

import Hero from "@/images/hero-4.jpg";
import CateringAbout from "~/components/frontend/sections/catering/CateringAbout";

import FoodMenuImg from "@/images/menu-food.png";
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
                <MenuCard image={FoodMenuImg} text="VIEW CATERING MENU" href="/menu/food-menu.pdf" />
            </div>

            <CafeMap />
            <Footer />
        </>
    );
}

export default Catering;