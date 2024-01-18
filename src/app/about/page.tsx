import Footer from "~/components/frontend/Footer";
import Header, { MiniHeader } from "~/components/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Head from "next/head";
import Image from "next/image";

import FoodMenuImg from "@/images/menu-food.png";
import DrinksMenuImg from "@/images/menu-drinks.png";
import CateringMenuImg from "@/images/menu-catering.png";
import MenuCard, { Menu } from "~/components/frontend/MenuCard";

import Hero from "@/images/hero-1.jpg";
import AboutUs from "~/components/frontend/sections/AboutUs";

export const metadata = {
    title: "Go Goa Eatery - Menu",
    description: "Nestled in the heart of Devonport, Go Goa Eatery is a cherished destinations for locals and visitors. Offering a unique fusion of Goan and European cuisine.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Catering = () => {
    return (
        <>
            <MiniHeader heroImg={Hero} />

            <AboutUs />

            <CafeMap />
            <Footer />
        </>
    );
}

export default Catering;