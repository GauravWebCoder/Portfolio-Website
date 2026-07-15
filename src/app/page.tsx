import { Eclipse } from "@/components/motifs/Eclipse";
import { HeroIntro } from "@/components/sections/home/HeroIntro";
import { CurrentlyPanel } from "@/components/sections/home/CurrentlyPanel";
import { FanProjectCards } from "@/components/sections/home/FanProjectCards";
import { ExploreGrid } from "@/components/sections/home/ExploreGrid";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col overflow-hidden px-5 sm:px-8 lg:px-14">
        <Eclipse />

        <div className="relative z-[2] mx-auto grid w-full max-w-[1320px] grid-cols-1 items-start gap-10 pt-[140px] pb-5 lg:min-h-[600px] lg:grid-cols-[1.5fr_1fr]">
          <HeroIntro />
          <div className="hidden lg:block lg:self-end">
            <CurrentlyPanel />
          </div>
        </div>

        <FanProjectCards />
      </section>

      <ExploreGrid />

      <ContactSection
        eyebrow="GET IN TOUCH"
        title="Let's build something amazing."
        as="h2"
        showSubject={false}
        bordered
      />
    </>
  );
}
