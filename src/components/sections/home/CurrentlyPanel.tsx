import { ProgressBar } from "@/components/ui/ProgressBar";

const CHECKLIST = ["Building products", "Learning & Growing", "Sharing my journey"];

export function CurrentlyPanel() {
  return (
    <div className="currently-panel relative z-[3] ml-auto w-full max-w-[300px] rounded-[20px] border border-brd bg-bg-2 p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,.35)]">
      <div className="mb-4 font-mono text-[11px] tracking-[.28em] text-faint">CURRENTLY</div>
      <div className="mb-[18px]">
        <ProgressBar label="Learning DSA in Java" value={40} />
      </div>
      <div className="mb-[26px]">
        <ProgressBar label="Building Orbit" value={70} delayMs={150} />
      </div>
      <div className="mb-3.5 flex items-center gap-2 text-sm font-medium text-accent">
        ◆ Focus
      </div>
      <div className="flex flex-col gap-3 text-sm text-muted">
        {CHECKLIST.map((item) => (
          <div key={item} className="flex items-center gap-2.5">
            <span className="flex size-[18px] items-center justify-center rounded-full border border-brd-2 bg-card-2 text-[10px] text-accent">
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
