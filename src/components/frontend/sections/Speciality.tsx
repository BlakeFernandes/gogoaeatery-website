import Image from "next/image";
import Img1 from "@/images/1.png";
import Img2 from "@/images/2.png";
import Img3 from "@/images/3.png";
import Img4 from "@/images/4.png";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { ImageTextSection } from "../ui/section";

const Speciality = () => {
    return (
        <>
            <ImageTextSection
                title="CHEF&apos;S SPECIALITIES"
                description={[
                    "We take immense pride in presenting our specialty dishes, each a recipe honed over generations of family tradition and expertise. These recipes, passed down through our family, have been perfected over time, capturing the true spirit and flavors of Goa."
                ]}
                images={[Img1, Img2, Img3, Img4]}
                footer={
                    <>
                        <Link className={buttonVariants({ variant: "default" })} target="_blank" href="/menu/menu.pdf">VIEW MENU</Link>
                    </>
                }
            />
        </>
    );
}

export default Speciality;