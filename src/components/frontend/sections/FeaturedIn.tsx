import AboutUsImg from "@/images/about-us.png";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

import SundayTimes from "@/images/sunday_times.png"

const FeaturedIn = () => {
    return (
        <>
            <section>
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="py-8 md:py-12">
                        <div className="max-w-4xl mx-auto text-center" data-aos-id-tabs="">
                            <div className="w-16 mx-auto border-t-2 border-[#C7A17A] pb-2"></div>
                            <h2 className="h3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
                                FEATURED IN
                            </h2>
                            <div className="flex justify-center items-center space-x-4">
                                <a href="https://www.thepost.co.nz/culture/350124850/goa-we-are-all-catholic-so-we-eat-everything-except-chairs-andtables" title="Sunday Times - Go Goa Eatery" rel="noopener" target="_blank">
                                    <Image
                                        src={SundayTimes}
                                        alt="Sunday Times Logo"
                                        width={200}
                                        className="grayscale hover:grayscale-0 transition duration-300"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
}

export default FeaturedIn;
