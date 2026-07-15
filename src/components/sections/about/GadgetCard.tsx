export function GadgetCard({
  icon,
  name,
  type,
}: {
  icon: string;
  name: string;
  type: string;
}) {
  return (
    <div className="flex items-center gap-3.5 rounded-[14px] border border-brd bg-card p-[18px] transition-transform duration-350 [transition-timing-function:cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1 hover:border-brd-2">
      <span className="flex size-[38px] flex-none items-center justify-center rounded-[10px] border border-brd bg-card-2 text-[17px] text-accent">
        {icon}
      </span>
      <div>
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-xs text-faint">{type}</div>
      </div>
    </div>
  );
}
