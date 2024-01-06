import AboutUs from "~/components/frontend/AboutUs";
import Footer from "~/components/frontend/Footer";
import Reservations from "~/components/frontend/Reservations";
import Header from "~/components/frontend/header/Header";
import CafeMap from "~/components/frontend/GoogleMap";
import Speciality from "~/components/frontend/Speciality";
import Cakes from "~/components/frontend/Cakes";
import Head from "next/head";

const Catering = () => {
    return (
        <>
            <Head>
                <title>Go Goa Eatery - Corporate, BBQ, Party Catering Service Auckland</title>
                <meta name='description' content="Brining India's tastes to Auckland's festives. Auckland's best authentic Indian catering service." />
            </Head>

            <Header />
            {/* <Reservations /> */}
            <AboutUs />
            <Speciality />
            <Cakes />
            <CafeMap />
            <Footer />
        </>
    );
}

export default Catering;