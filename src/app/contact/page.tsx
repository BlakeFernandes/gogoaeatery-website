import Footer from "~/components/frontend/Footer";
import Header from "~/components/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Head from "next/head";
import Image from "next/image";

import FoodMenuImg from "@/images/menu-food.png";
import DrinksMenuImg from "@/images/menu-drinks.png";
import CateringMenuImg from "@/images/menu-catering.png";
import MenuCard, { Menu } from "~/components/frontend/MenuCard";

import Hero from "@/images/hero-5.jpg";

export const metadata = {
    title: "Go Goa Eatery | Contact Us",
    description: "Nestled in the heart of Devonport, Go Goa Eatery is a cherished destinations for locals and visitors. Offering a unique fusion of Goan and European cuisine.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Catering = () => {
    return (
        <>
            <Header heroImg={Hero} />

            <CafeMap />
            <Footer />
        </>
    );
}

export default Catering;