import FadeIn from "./FadeIn";

const ProblemSection = () => {
  return (
    <section id="problem" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-6 text-sm font-light tracking-[0.2em] text-secondary">
            THE PROBLEM
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mb-10 text-3xl font-light leading-[1.2] text-foreground md:text-5xl">
            Your mind knows you're ready.
            <br />
            <span className="italic">Your body hasn't caught up.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-12 h-px w-16 bg-secondary" />
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.25}>
            <p className="text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              Racing heart. Shallow breath. Trembling hands. Before the
              presentation, the interview, the speech — your nervous system
              activates a threat response that has nothing to do with actual
              danger.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              This is <em>anticipatory anxiety</em> — a well-documented
              physiological response where the body prepares for threat even
              when the mind knows it's safe. It affects an estimated 75% of
              people, from students to seasoned professionals.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              The problem isn't a lack of skill, preparation, or courage. The
              problem is that the body's stress response doesn't distinguish
              between a boardroom and a battlefield.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.55}>
          <div className="mt-16 rounded-sm border border-border bg-sand-light p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { stat: "75%", label: "of people experience performance anxiety" },
                { stat: "40%", label: "report it limits their career growth" },
                { stat: "90%", label: "say current solutions feel inadequate" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="mb-2 text-3xl font-light text-foreground md:text-4xl">
                    {item.stat}
                  </p>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProblemSection;
