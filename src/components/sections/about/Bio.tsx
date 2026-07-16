import { BIO_PARAGRAPHS } from "@/data/about";
import { Reveal } from "@/components/motion/Reveal";

export function Bio() {
  return (
    <div>
      {BIO_PARAGRAPHS.map((paragraph, i) => (
        <Reveal key={paragraph} delay={i === 0 ? 120 : 0}>
          <p
            className={
              i === 0
                ? "mb-[18px] text-lg leading-[1.7]"
                : "text-muted mb-4 text-[15px] leading-[1.7]"
            }
          >
            {paragraph}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
