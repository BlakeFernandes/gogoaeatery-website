import Footer from "~/components/frontend/Footer";
import Header, { MiniHeader } from "~/components/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Head from "next/head";
import Image from "next/image";

import FoodMenuImg from "@/images/devonport.png";
import DrinksMenuImg from "@/images/menu-drinks.png";
import CateringMenuImg from "@/images/menu-catering.png";
import MenuCard, { Menu } from "~/components/frontend/MenuCard";

import Hero from "@/images/devonport-hero.png";
import { TextSection } from "~/components/frontend/ui/section";

export const metadata = {
    title: "Go Goa Eatery - Menu",
    description: "Nestled in the heart of Devonport, Go Goa Eatery is a cherished destinations for locals and visitors. Offering a unique fusion of Goan and European cuisine.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Catering = () => {
    return (
        <>
            <Header title="Go Goa Eatery Events" heroImg={Hero} />

            <TextSection
                title="We Host Events"
                subtitle="We are proud to host many events at Go Goa Eatery."
                description={[
                    "For more information about hosting your event at Go Goa Eatery, please contact us at eat@gogoaeatery.co.nz",
                ]}
                footer={
                    <>
                        <div className="grid md:grid-cols-3 mx-auto max-w-4xl justify-center items-center sm:gap-x-2">
                            <div></div>
                            <MenuCard image={FoodMenuImg} text="DEVONPORT ROTARY" href="/events/rotary-sam-1.pdf" />
                        </div>
                    </>
                }
            />

            <CafeMap />
            <Footer />
        </>
    );
}

export default Catering;