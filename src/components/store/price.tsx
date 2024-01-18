"use client";

import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { ProductVariant } from '~/lib/shopify/types';

const Price = ({
  amount,
  variants,
  className,
  currencyCode = 'USD',
  currencyCodeClassName
}: {
  amount: string;
  variants?: ProductVariant[];
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => {
  const searchParams = useSearchParams();
  
  if (variants) {
    const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
    const variant = variants.find((variant: ProductVariant) =>
      variant.selectedOptions.every(
        (option) => option.value === searchParams.get(option.name.toLowerCase())
      )
    );
    const selectedVariantId = variant?.id || defaultVariantId;
    amount = variants.find((variant) => variant.id === selectedVariantId)?.price.amount || amount;
  }

  return (
    <p suppressHydrationWarning={true} className={className}>
      {`${new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol'
      }).format(parseFloat(amount))}`}
      <span className={clsx('ml-1 inline', currencyCodeClassName)}>{`${currencyCode}`}</span>
    </p>
  )
  
};

export default Price;
