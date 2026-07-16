import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ContactInfoList } from "./ContactInfoList";
import { SocialLinks } from "./SocialLinks";
import { ContactForm } from "./ContactForm";

export function ContactSection({
  eyebrow,
  title,
  description,
  as = "h1",
  showSubject = true,
  bordered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  showSubject?: boolean;
  bordered?: boolean;
}) {
  const Heading = as;

  return (
    <section
      className={cn(
        "relative z-[2] px-5 pb-[100px] sm:px-8 lg:px-14",
        bordered ? "border-brd bg-bg-2 border-t pt-[100px]" : "pt-[150px]",
      )}
    >
      <Container size="narrow" className="max-w-[1100px]">
        {eyebrow && (
          <Reveal>
            <div className="text-muted mb-1.5 flex items-center gap-2.5 text-[15px]">
              {eyebrow} <span className="text-accent text-xs">◆</span>
            </div>
          </Reveal>
        )}
        <Reveal delay={eyebrow ? 60 : 0}>
          <Heading className="m-0 text-[clamp(30px,4.5vw,50px)] leading-[1.05] font-bold tracking-[-0.03em]">
            {title}
          </Heading>
        </Reveal>
        {description && (
          <Reveal delay={60}>
            <p className="text-muted mt-2 mb-11 text-base">{description}</p>
          </Reveal>
        )}
        <div
          className={cn("grid gap-13 lg:grid-cols-2", !description && "mt-11")}
        >
          <Reveal delay={80}>
            <div className="flex flex-col gap-6">
              <ContactInfoList />
              <SocialLinks />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <ContactForm showSubject={showSubject} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
