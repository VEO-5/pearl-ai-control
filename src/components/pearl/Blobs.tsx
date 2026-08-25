export function Blobs({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -left-24 top-0 size-[28rem] rounded-full bg-blob-1 opacity-40 blur-[110px]" />
      <div className="absolute right-0 top-24 size-[24rem] rounded-full bg-blob-2 opacity-35 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 size-[26rem] rounded-full bg-blob-3 opacity-35 blur-[120px]" />
    </div>
  );
}
