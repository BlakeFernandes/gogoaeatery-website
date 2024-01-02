import Image from "next/image";
import Img1 from "@/images/1.png";
import Img2 from "@/images/2.png";
import Img3 from "@/images/3.png";
import Img4 from "@/images/4.png";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const Speciality = () => {
    return (
        <>
            <section>
                <div className="mx-auto px-4 sm:px-6">
                    <div className="py-8 md:py-12">
                        <div className="mx-auto text-center" data-aos-id-tabs="">
                            <div className="w-16 mx-auto border-t-2 border-[#C7A17A] pb-2"></div>
                            <h2 className="h3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
                                CHEF&apos;S SPECIALITIES
                            </h2>
                            <div className="space-y-8">
                                <p>
                                    We take immense pride in presenting our specialty dishes, each a recipe honed over generations of family tradition and expertise. These recipes, passed down through our family, have been perfected over time, capturing the true spirit and flavors of Goa.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 mx-auto max-w-4xl justify-center items-center sm:gap-x-2">
                                    <Image src={Img1} alt="" className="w-full max-w-[300px]" />
                                    <Image src={Img2} alt="" className="w-full max-w-[300px]" />
                                    <Image src={Img3} alt="" className="w-full max-w-[300px]" />
                                    <Image src={Img4} alt="" className="w-full max-w-[300px]" />
                                </div>
                                <Link className={buttonVariants({ variant: "default" })} target="_blank" href="/menu/menu.pdf">VIEW MENU</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Speciality;