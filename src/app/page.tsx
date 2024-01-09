import AboutUs from "~/components/frontend/sections/AboutUs";
import Footer from "~/components/frontend/Footer";
import Header from "~/components/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Speciality from "~/components/frontend/sections/Speciality";
import Cakes from "~/components/frontend/sections/Cakes";
import Catering from "~/components/frontend/sections/Catering";

import Hero from "@/images/hero-1.jpg";

const Index = () => {
    return (
        <>
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