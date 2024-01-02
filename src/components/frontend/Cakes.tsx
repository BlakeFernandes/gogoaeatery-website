import Image from "next/image";
import Cake1 from "@/images/cake-1.png";
import Cake2 from "@/images/cake-2.png";
import { Button } from "./ui/button";

const Cakes = () => {
    return (
        <>
            <section>
                <div className="mx-auto px-4 sm:px-6">
                    <div className="py-8 md:py-12">
                        <div className="max-w-6xl mx-auto text-center" data-aos-id-tabs="">
                            <div className="w-16 mx-auto border-t-2 border-[#C7A17A] pb-2"></div>
                            <h2 className="h3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
                                CAKES
                            </h2>
                            <div className="space-y-8">
                                <p>
                                    With over 25 years of experience, and a former leading pastry chef of the disney cruiseliner. We take pride in offering a wide variety of cakes and pastries that are made from scratch with the finest ingredients. Our cakes are made with love and care, and we use only the best ingredients to ensure that they taste as good as they look.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 mx-auto max-w-4xl justify-center items-center sm:gap-x-2">
                                    <Image src={Cake1} alt="" className="w-full max-w-[300px]" />
                                    <Image src={Cake2} alt="" className="w-full max-w-[300px]" />
                                </div>
                                {/* <Button variant={"default"}>VIEW CAKE INFO</Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cakes;