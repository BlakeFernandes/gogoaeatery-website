import Cake1 from "@/images/cake-1.png";
import Cake2 from "@/images/cake-2.png";
import { ImageTextSection } from "../ui/section";

const Cakes = () => {
    return (
        <>
            <ImageTextSection
                title="CAKES"
                description={["With over 25 years of experience, and a former leading pastry chef of the disney cruiseliner. We take pride in offering a wide variety of cakes and pastries that are made from scratch with the finest ingredients. Our cakes are made with love and care, and we use only the best ingredients to ensure that they taste as good as they look."]}
                images={[Cake1, Cake2]}
                footer={
                    <>
                    </>
                }
            />
        </>
    );
}

export default Cakes;