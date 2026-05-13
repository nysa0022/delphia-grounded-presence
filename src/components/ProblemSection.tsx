import FadeIn from "./FadeIn";

const ProblemSection = () => {
  return (
    <section id="context" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-foreground/60">Context</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mb-10 text-3xl font-normal leading-tight text-foreground md:text-5xl text-balance">
            you feel prepared, yet your body has categorized perceived pressure as danger
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mb-10 h-px w-16 bg-secondary" />
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            Before a speech, debate round, pitch, interview, or presentation, the desire to do well can create perceived pressure. The problem is that your body cannot always tell the difference between pressure and danger. Even when your mind knows you are prepared, your nervous system can still shift into fight-or-flight. That is why nerves feel physical: a racing heart, shaky hands, shallow breathing, muscle tension, or a blank mind. These symptoms are what many people call nerves, but they are better understood as performance anxiety. Delphia is designed to help interrupt the body’s physical stress response before performance stress peaks by giving the nervous system a grounding signal through pressure, texture, and upper-arm feedback. It was created for that moment before stress peaks, when the body needs a physical signal to feel grounded and in control.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProblemSection;
