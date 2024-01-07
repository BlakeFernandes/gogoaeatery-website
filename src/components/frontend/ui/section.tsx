import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { cn } from "~/utils/utils";

const Section = ({ children }: { children: ReactNode }) => {
    return (
        <section>
            <div className="mx-auto px-4 sm:px-6">
                <div className="py-8 md:py-12">
                    <div className="max-w-6xl mx-auto text-center" data-aos-id-tabs="">
                        {children}
                    </div>
                </div>
            </div>
        </section>

    );
}

export const ImageTextSection = (props: { title: string, description: string[], images: StaticImageData[], footer: ReactNode }) => {
    return (
        <Section>
            <div className="w-16 mx-auto border-t-2 border-[#C7A17A] pb-2"></div>
            <h2 className="h3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
                {props.title}
            </h2>
            <div className="space-y-8">
                {props.description.map((p, i) => <p key={i}>{p}</p>)}
                <div className={cn("grid mx-auto max-w-4xl", `grid-cols-${props.images.length} grid-rows-1` )}>
                    {props.images.map((image, i) => (
                        <div className="flex justify-center items-center" key={i}>
                            <Image src={image.src} alt={props.title + " Image " + i} width={300} height={300} className="w-full max-w-[300px]" />
                        </div>
                    ))}
                </div>
                {props.footer}
            </div>
        </Section>
    )
}
