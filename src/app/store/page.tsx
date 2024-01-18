import { Carousel } from '~/components/store/carousel';
import { ThreeItemGrid } from '~/components/store/grid/three-items';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'Online Store for Go Goa Eatery website.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />  
      </Suspense>
    </>
  );
}
