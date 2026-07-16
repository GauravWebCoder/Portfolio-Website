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
    <div className="border-brd bg-card hover:border-brd-2 flex items-center gap-3.5 rounded-[14px] border p-[18px] transition-transform duration-350 [transition-timing-function:cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1">
      <span className="border-brd bg-card-2 text-accent flex size-[38px] flex-none items-center justify-center rounded-[10px] border text-[17px]">
        {icon}
      </span>
      <div>
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-faint text-xs">{type}</div>
      </div>
    </div>
  );
}
