import Footer from "~/components/frontend/Footer";
import Header from "~/components/frontend/header/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Head from "next/head";
import Image from "next/image";

import FoodMenuImg from "@/images/menu-food.png";
import DrinksMenuImg from "@/images/menu-drinks.png";
import CateringMenuImg from "@/images/menu-catering.png";
import MenuCard from "~/components/frontend/MenuCard";

import Hero from "@/images/hero-2.jpg";

const Catering = () => {
    return (
        <>
            <Head>
                <title>Go Goa Eatery - Menu</title>
                <meta name='description' content="Brining India's tastes to Auckland's festives. Auckland's best authentic Indian catering service." />
            </Head>

            <Header heroImg={Hero} />

            <div className="text-center">
                <div className="w-16 mx-auto border-t-2 border-[#C7A17A] pb-2"></div>
                <h2 className="h3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
                    VIEW OUR MENU
                </h2>
            </div>

            <div className="grid md:grid-cols-3 mx-auto max-w-4xl justify-center items-center sm:gap-x-2 pb-12">
                <MenuCard image={FoodMenuImg} text="FOOD MENU" href="/menu/food-menu.pdf" />
                <MenuCard image={DrinksMenuImg} text="DRINKS MENU" href="/menu/drinks-menu.pdf" />
                <MenuCard image={CateringMenuImg} text="CATERING MENU" href="/menu/catering-menu.pdf" />
            </div>

            <CafeMap />
            <Footer />
        </>
    );
}

export default Catering;