import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import "~/styles/globals.scss";
import { api } from "~/utils/api";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const MyApp: AppType = ({
    Component,
    pageProps: {...pageProps },
}) => {
    return (
        <>
            <div className={`${inter.variable} w-full`}>
                <Component {...pageProps} />
                <Analytics />
                <SpeedInsights />
            </div>
        </>
    );
};


export default api.withTRPC(MyApp);
