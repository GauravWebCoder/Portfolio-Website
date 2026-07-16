import { ProgressBar } from "@/components/ui/ProgressBar";

const CHECKLIST = [
  "Building products",
  "Learning & Growing",
  "Sharing my journey",
];

export function CurrentlyPanel() {
  return (
    <div className="currently-panel border-brd bg-bg-2 relative z-[3] ml-auto w-full max-w-[300px] rounded-[20px] border p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,.35)]">
      <div className="text-faint mb-4 font-mono text-[11px] tracking-[.28em]">
        CURRENTLY
      </div>
      <div className="mb-[18px]">
        <ProgressBar label="Learning MERN Stack" value={40} />
      </div>
      <div className="mb-[26px]">
        <ProgressBar label="Building Orbit OS" value={70} delayMs={150} />
      </div>
      <div className="text-accent mb-3.5 flex items-center gap-2 text-sm font-medium">
        ◆ Focus
      </div>
      <div className="text-muted flex flex-col gap-3 text-sm">
        {CHECKLIST.map((item) => (
          <div key={item} className="flex items-center gap-2.5">
            <span className="border-brd-2 bg-card-2 text-accent flex size-[18px] items-center justify-center rounded-full border text-[10px]">
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
