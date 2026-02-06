import FadeIn from "./FadeIn";

const ScienceSection = () => {
  return (
    <section id="science" className="bg-primary px-6 py-24 md:py-36">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-6 text-sm font-light tracking-[0.2em] text-sage">
            THE SCIENCE
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mb-10 text-3xl font-light leading-[1.2] text-primary-foreground md:text-5xl">
            Working with your body,
            <br />
            <span className="italic">not against it.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-12 h-px w-16 bg-sage" />
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.25}>
            <p className="text-lg font-light leading-relaxed text-primary-foreground/70 md:text-xl">
              Delphia uses <em>deep pressure stimulation</em> and{" "}
              <em>proprioceptive feedback</em> — two mechanisms rooted in
              decades of neuroscience research — to help the nervous system
              shift from sympathetic activation back toward calm.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-lg font-light leading-relaxed text-primary-foreground/70 md:text-xl">
              Deep pressure has been shown to increase parasympathetic
              activity, reducing cortisol levels and promoting a state of
              grounded alertness. Proprioceptive input — the body's awareness
              of itself in space — provides a sensory anchor that interrupts
              the escalation of anxious response.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.45}>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {[
              {
                title: "Deep Pressure Stimulation",
                description:
                  "Gentle, calibrated pressure activates the parasympathetic nervous system — the body's natural calming pathway. Like a weighted blanket, but invisible and portable.",
              },
              {
                title: "Proprioceptive Feedback",
                description:
                  "Subtle sensory input through the wrist provides an embodied anchor — grounding your awareness in the present moment and interrupting the spiral of anticipatory stress.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-sm border border-primary-foreground/10 p-8"
              >
                <h3 className="mb-4 text-xl font-medium text-primary-foreground">
                  {item.title}
                </h3>
                <p className="text-base font-light leading-relaxed text-primary-foreground/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.55}>
          <div className="mt-16 text-center">
            <p className="text-sm font-light italic leading-relaxed text-primary-foreground/50">
              "The body keeps the score. When we help the body feel safe,
              the mind follows."
            </p>
            <p className="mt-3 text-xs font-light tracking-[0.15em] text-primary-foreground/40">
              — ADAPTED FROM DR. BESSEL VAN DER KOLK
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ScienceSection;
