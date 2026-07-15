export function PortraitMotif() {
  return (
    <div
      className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] border border-brd"
      style={{
        background:
          "radial-gradient(circle at 30% 25%, rgba(169,150,255,.35), transparent 55%), radial-gradient(circle at 70% 80%, rgba(124,102,255,.25), transparent 60%), #0c0b13",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-7xl font-extrabold text-white/10">
        GM
      </div>
    </div>
  );
}
