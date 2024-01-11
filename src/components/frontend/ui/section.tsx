import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { cn } from "~/utils/utils";

export const Section = ({ children }: { children: ReactNode }) => {
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

export const TextSection = (props: { title: string, subtitle?: string, description: string[], footer: ReactNode }) => {
    return (
        <Section>
            <div className="w-16 mx-auto border-t-2 border-[#C7A17A] pb-2"></div>
            <div className="mb-4">
                <h2 className="h3 aos-init aos-animate" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
                    {props.title}
                </h2>
                <p className="font-medium text-lg text-[#C7A17A]">{props.subtitle}</p>
            </div>
            <div className="space-y-8">
                {props.description.map((p, i) => <p key={i}>{p}</p>)}
                {props.footer}
            </div>
        </Section>
    )
}

export const ImageTextSection = (props: { title: string, subtitle?: string, description: string[], images?: StaticImageData[], footer: ReactNode }) => {
    return (
        <Section>
            <div className="w-16 mx-auto border-t-2 border-[#C7A17A] pb-2"></div>
            <div className="mb-4">
                <h2 className="h3 aos-init aos-animate" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
                    {props.title}
                </h2>
                <p className="font-medium text-lg text-[#C7A17A]">{props.subtitle}</p>
            </div>
            <div className="space-y-8">
                {props.description.map((p, i) => <p key={i}>{p}</p>)}
                {props.images ? (
                    <div style={{ gridTemplateColumns: `repeat(${props.images.length}, minmax(0, 1fr))` }} className={cn("grid mx-auto max-w-4xl", `grid-rows-1`)}>
                    {props.images.map((image, i) => (
                        <div className="flex justify-center items-center" key={i}>
                            <Image src={image.src} alt={props.title + " Image " + i} width={300} height={300} className="w-full max-w-[300px]" />
                        </div>
                    ))}
                    </div>
                ) : (<></>)}
                {props.footer}
            </div>
        </Section>
    )
}
