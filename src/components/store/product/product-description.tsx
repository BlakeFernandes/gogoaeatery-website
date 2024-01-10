import { AddToCart } from '~/components/store/cart/add-to-cart';
import Price from '~/components/store/price';
import Prose from '~/components/store/prose';
import { Product } from '~/lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 ">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-[#C7A17A] p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight "
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}
