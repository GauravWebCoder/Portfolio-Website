export function SuccessPanel({ message }: { message: string }) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-3.5 rounded-2xl border border-brd-2 bg-card p-10 text-center">
      <div
        className="flex size-16 items-center justify-center rounded-full text-3xl text-white"
        style={{ background: "linear-gradient(100deg, var(--accent), var(--accent-2))" }}
      >
        ✓
      </div>
      <div className="text-[22px] font-bold">Message sent!</div>
      <div className="text-sm text-muted">{message}</div>
    </div>
  );
}
