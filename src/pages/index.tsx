import AboutUs from "~/components/frontend/sections/AboutUs";
import Footer from "~/components/frontend/Footer";
import Reservations from "~/components/frontend/Reservations";
import Header from "~/components/frontend/header/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Speciality from "~/components/frontend/sections/Speciality";
import Cakes from "~/components/frontend/sections/Cakes";
import Catering from "~/components/frontend/sections/Catering";
import Head from "next/head";

import Hero from "@/images/hero-1.jpg";

const Index = () => {
    return (
        <>
            <Head>
                <title>Go Goa Eatery - Best in Devonport | Cafe</title>
                <meta name='description' content='Nestled in the heart of Devonport, Go Goa Eatery is more than just a café. Dive into our diverse menu, featuring a fusion of traditional Goan curries, European-inspired salads, and homemade pastries.' />
            </Head>

            <Header heroImg={Hero} />
            {/* <Reservations /> */}
            <AboutUs />
            <Speciality />
            <Cakes />
            <Catering />
            <CafeMap />
            <Footer />
        </>
    );
}

export default Index;