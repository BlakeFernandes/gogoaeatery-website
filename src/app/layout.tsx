import "~/styles/globals.scss";

import React from 'react';
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Go Goa Eatery - Best in Devonport | Cafe",
    description: "Nestled in the heart of Devonport, Go Goa Eatery is a cherished destinations for locals and visitors. Offering a unique fusion of Goan and European cuisine.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="font-sans ${inter.variable} bg-[#F7F7F7]">
            <body>
                {children}
                <Analytics />
                <SpeedInsights />

                <Script src="https://www.googletagmanager.com/gtag/js?id=G-W74RFGL9LH" />
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                
                        gtag('config', 'G-W74RFGL9LH');
                    `}
                </Script>
            </body>
        </html>
    );
}
