import OpengraphImage from '~/components/store/opengraph-image';

export const runtime = 'edge';

export default async function Image() {
  return await OpengraphImage();
}
