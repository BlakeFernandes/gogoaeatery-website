import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import "~/styles/globals.scss";
import Head from "next/head";
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
            <Head>
                <title>Go Goa Eatery - Best in Devonport | Cafe</title>
                <meta name='description' content='Nestled in the heart of Devonport, Go Goa Eatery is more than just a café. Dive into our diverse menu, featuring a fusion of traditional Goan curries, European-inspired salads, and homemade pastries.' />
            </Head>
            <div className={`${inter.variable} w-full`}>
                <Component {...pageProps} />
                <Analytics />
                <SpeedInsights />
            </div>
        </>
    );
};

export default api.withTRPC(MyApp);
