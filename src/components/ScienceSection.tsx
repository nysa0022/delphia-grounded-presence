import FadeIn from "./FadeIn";

const ScienceSection = () => {
  return (
    <section id="science" className="bg-primary px-6 py-24 md:py-36">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="mb-10 text-3xl font-normal leading-tight text-primary-foreground md:text-5xl">
            Working with your body, not against it.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mb-10 h-px w-16 bg-sage" />
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            Delphia uses deep pressure stimulation and proprioceptive feedback —
            two mechanisms rooted in decades of neuroscience research — to help
            shift the nervous system away from sympathetic activation and toward
            a more regulated state before speaking. When the body feels safe, the
            mind follows.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ScienceSection;
