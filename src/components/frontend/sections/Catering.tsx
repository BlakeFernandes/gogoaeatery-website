import Image from "next/image";
import Catering1 from "@/images/catering-1.png";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { ImageTextSection } from "../ui/section";

const Catering = () => {
    return (
        <>
            <ImageTextSection
                title="CATERING"
                description={[
                    "Promote your events with Go Goa Eatery&apos;s catering services, designed to accommodate any occasion in Devonport or Auckland.",
                    "Whether you&apos;re organizing a quick business lunch, an elegant dinner party, or anything in between, we offer a versatile menu tailored to your specific needs. With many satisfied customers, and an experienced team that excels in event planning and providing delicious food paired with impeccable service we ensure that the food at your event not just a meal, but a memorable part of the experience."
                ]}
                images={[Catering1]}
                footer={
                    <>
                        <Link className={buttonVariants({ variant: "default" })} target="_blank" href="/menu/catering-menu.pdf">VIEW CATERING MENU</Link>
                    </>
                }
            />
        </>
    );
}

export default Catering;