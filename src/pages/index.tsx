import AboutUs from "~/components/frontend/AboutUs";
import Footer from "~/components/frontend/Footer";
import Reservations from "~/components/frontend/Reservations";
import Header from "~/components/frontend/header/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Speciality from "~/components/frontend/Speciality";
import Cakes from "~/components/frontend/Cakes";
import Catering from "~/components/frontend/Catering";

const Index = () => {
    return (
        <>
            <Header />
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