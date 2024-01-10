import './globals.css';

import Navbar from '~/components/store/layout/navbar';
import { GeistSans } from 'geist/font';
import { ensureStartsWith } from '~/lib/utils';
import { ReactNode, Suspense } from 'react';
import Header from '~/components/Header';

import Hero from "@/images/hero-1.jpg";
import CafeMap from '~/components/frontend/GoogleMap';
import Footer from '~/components/frontend/Footer';

const { SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE_NAME!} | Online Store`!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header title='Go Goa Eatery' heroImg={Hero} />
      <Suspense>
        <main>{children}</main>
      </Suspense>
      <CafeMap />
      <Footer />
    </>
  );
}
