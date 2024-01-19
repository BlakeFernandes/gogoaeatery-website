export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center transition-colors text-sm text-[#C7A17A]">
      <p>Cart ({quantity ? quantity : "0"})</p>    
    </div>
  );
}
