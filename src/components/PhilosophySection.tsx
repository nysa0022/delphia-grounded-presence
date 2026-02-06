import FadeIn from "./FadeIn";

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-6 text-sm font-light tracking-[0.2em] text-secondary">
            PHILOSOPHY
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mb-10 text-3xl font-light leading-[1.2] text-foreground md:text-5xl">
            Regulation, not suppression.
            <br />
            <span className="italic">Calm, not control.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-12 h-px w-16 bg-secondary" />
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.25}>
            <p className="text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              We don't believe in masking anxiety or powering through it.
              Delphia is built on the principle that nervousness is not a
              flaw — it's a signal. Our role is not to silence that signal,
              but to help your body process it.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              Most tools for performance anxiety focus on the mind: breathe
              deeper, think positive, visualize success. These approaches
              have value — but they often ignore the body entirely. Delphia
              begins where those approaches end.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.45}>
          <div className="mt-16 space-y-10">
            {[
              {
                principle: "Regulation over suppression",
                detail:
                  "We don't try to eliminate anxiety. We support the body's natural ability to regulate itself, allowing you to move through stress rather than being held hostage by it.",
              },
              {
                principle: "Body before mind",
                detail:
                  "When the body feels safe, the mind follows. Delphia works at the somatic level — creating the physiological conditions for clarity, presence, and composure.",
              },
              {
                principle: "Discreet by design",
                detail:
                  "No one needs to know. Delphia is designed to be invisible — a quiet companion for the moments that matter most, without drawing attention or requiring explanation.",
              },
              {
                principle: "Science, not spectacle",
                detail:
                  "Every element of Delphia is grounded in peer-reviewed research. No inflated claims, no wellness jargon — just evidence-based design in service of human performance.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="flex gap-8">
                  <div className="mt-2 hidden h-px w-12 shrink-0 bg-secondary md:block" />
                  <div>
                    <h3 className="mb-3 text-xl font-medium text-foreground">
                      {item.principle}
                    </h3>
                    <p className="text-base font-light leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PhilosophySection;
