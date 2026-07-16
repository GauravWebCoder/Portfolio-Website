const HEIGHTS = [
  40, 70, 55, 90, 45, 75, 100, 60, 85, 50, 70, 95, 55, 80, 45, 65, 90, 50, 75,
  60,
];

export function Waveform({ height = 52 }: { height?: number | string }) {
  return (
    <div className="flex w-full items-center gap-[3px]" style={{ height }}>
      {HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="flex-1 origin-center rounded-[3px]"
          style={{
            height: `${h}%`,
            background:
              "linear-gradient(180deg, var(--accent-2), var(--accent))",
          }}
        />
      ))}
    </div>
  );
}
