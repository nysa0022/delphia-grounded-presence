import FadeIn from "./FadeIn";

const ProblemSection = () => {
  return (
    <section id="about" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="mb-10 text-3xl font-normal leading-tight text-foreground md:text-5xl">
            You feel prepared, yet your body has categorized perceived pressure as danger.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mb-10 h-px w-16 bg-secondary" />
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Delphia is a discreet upper-arm wrap designed to help prevent the body's
            physical stress response associated specifically with performance anxiety
            during public speaking. Using calibrated deep pressure and proprioceptive
            feedback, Delphia supports nervous system regulation before you speak —
            so your body can match the confidence your mind already has.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProblemSection;
