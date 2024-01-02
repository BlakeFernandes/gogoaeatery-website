import Image from "next/image";
import Catering1 from "@/images/catering-1.png";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const Catering = () => {
    return (
        <>
            <section>
                <div className="mx-auto px-4 sm:px-6">
                    <div className="py-8 md:py-12">
                        <div className="max-w-6xl mx-auto text-center" data-aos-id-tabs="">
                            <div className="w-16 mx-auto border-t-2 border-[#C7A17A] pb-2"></div>
                            <h2 className="h3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
                                CATERING
                            </h2>
                            <div className="space-y-8">
                                <p>
                                    Promote your events with Go Goa Eatery&apos;s catering services, designed to accommodate any occasion in Devonport or Auckland.
                                </p>
                                <p>
                                    Whether you&apos;re organizing a quick business lunch, an elegant dinner party, or anything in between, we offer a versatile menu tailored to your specific needs. With many satisfied customers, and an experienced team that excels in event planning and providing delicious food paired with impeccable service we ensure that the food at your event not just a meal, but a memorable part of the experience.
                                </p>
                                <div className="flex justify-center space-x-2">
                                    <Image src={Catering1} alt="" />
                                </div>
                                <Link className={buttonVariants({ variant: "default" })} target="_blank" href="/menu/catering-menu.pdf">VIEW CATERING MENU</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Catering;