import AboutUsImg from "@/images/about-us.png";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const AboutUs = () => {
    return (
        <>
            <section>
                <div className="mx-auto px-4 sm:px-6">
                    <div className="py-8 md:py-12">
                        <div className="max-w-6xl mx-auto text-center" data-aos-id-tabs="">
                            <div className="flex flex-col md:flex-row items-center space-x-4">
                                <Image src={AboutUsImg} className="object-contain w-full max-w-[250px]" alt="Jose & Doreen" />
                                <div className="space-y-8 shrink">
                                    <div>
                                        <div className="w-16 mx-auto border-t-2 border-[#C7A17A] pb-2"></div>
                                        <h2 className="h3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
                                            JOSE & DOREEN
                                        </h2>
                                    </div>
                                    <p>
                                        Nestled in the heart of Devonport, Go Goa Eatery is more than just a café; it&apos;s a journey of flavors and a celebration of community. As a husband-and-wife team, we infuse our shared love for culinary adventures and heartfelt hospitality into every aspect of our family eatery.
                                    </p>
                                    <p>
                                        Our journey began with a simple dream: to blend the vibrant tastes of Goa with the rustic charm of European cuisine, right here in New Zealand. Each dish we serve is a reflection of our passion for culinary diversity, crafted with the freshest local produce to ensure a dining experience that is both wholesome and flavorful.
                                    </p>
                                    <p>
                                        Dive into our diverse menu, featuring a fusion of traditional Goan curries, European-inspired salads, and homemade pastries. Every bite tells a story, whether it&apos;s the spice-infused aromas of Goa or the delicate finesse of European cuisine. Our commitment to healthy, satisfying meals means there&apos;s something delightful for every palate.
                                    </p>
                                    <p>
                                        At Go Goa Eatery, we’re not just serving meals; Our dedication to personalized service ensures that every visit is unique. We strive to craft a space where comfort meets elegance, where every guest can unwind and savor not just great food, but also the joy of togetherness.
                                    </p>
                                    <p>
                                        We warmly invite you to step into our world, where every meal is a celebration, and every guest is part of our family. Whether you&apos;re seeking a quick, savory bite, a leisurely brunch, or an intimate dinner, Go Goa Eatery is your destination. We&apos;re excited to welcome you and share the flavors and stories that make our café a home away from home.
                                    </p>
                                    <div className="space-x-2">
                                        <p className="pb-2">Follow us on Instagram and Facebook to stay up to date with news and events.</p>
                                        <Link href='https://www.instagram.com/gogoaeatery/' target="_blank" className={buttonVariants({ variant: "default" })}>Instagram</Link>
                                        <Link href='https://www.facebook.com/gogoaeatery/' target="_blank" className={buttonVariants({ variant: "default" })}>Facebook</Link>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;