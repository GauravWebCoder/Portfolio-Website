const BUILDINGS = [30, 55, 40, 70, 45, 60, 35, 50, 42, 65];

export function CityscapeMotif() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-xl"
      style={{ background: "linear-gradient(180deg, #14102a, #050409 70%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(169,150,255,.25), transparent 55%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end gap-1 px-2">
        {BUILDINGS.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background:
                "linear-gradient(180deg, rgba(124,102,255,.35), rgba(8,7,13,.9))",
            }}
          />
        ))}
      </div>
    </div>
  );
}
