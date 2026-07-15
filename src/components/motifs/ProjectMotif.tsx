import type { ProjectMotifKey } from "@/data/projects";
import { PlanetMotif } from "./PlanetMotif";
import { Waveform } from "./Waveform";
import { CityscapeMotif } from "./CityscapeMotif";
import { MarkMotif } from "./MarkMotif";

export function ProjectMotif({ motif }: { motif: ProjectMotifKey }) {
  switch (motif) {
    case "orbit":
      return (
        <div
          className="flex h-full w-full items-center justify-center rounded-xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(124,102,255,.12), rgba(8,7,13,.9))",
          }}
        >
          <PlanetMotif size={90} />
        </div>
      );
    case "waveform":
      return (
        <div
          className="flex h-full w-full items-center rounded-xl px-5"
          style={{
            background: "linear-gradient(135deg, rgba(124,102,255,.14), rgba(8,7,13,.9))",
          }}
        >
          <Waveform />
        </div>
      );
    case "cityscape":
      return <CityscapeMotif />;
    case "portfolio":
      return <MarkMotif />;
  }
}
