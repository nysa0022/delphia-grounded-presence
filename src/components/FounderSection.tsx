import FadeIn from "./FadeIn";

const FounderSection = () => {
  return (
    <section id="about" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="mb-16 text-center text-4xl font-normal leading-tight text-foreground md:text-6xl">
            Meet the Founder
          </h2>
        </FadeIn>

        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <FadeIn>
            <div className="relative">
              <div className="flex aspect-[4/5] items-center justify-center rounded-sm bg-sand-light border border-foreground/10 shadow-sm">
                <p className="text-sm italic text-foreground/50">Founder portrait</p>
              </div>
              <div className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-sm border border-secondary/40" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Founder</p>
              <h3 className="mt-4 text-4xl font-normal text-foreground md:text-5xl">Nysa</h3>
              <p className="mt-2 text-base text-foreground/70">Founder &amp; CEO of Delphia</p>

              <div className="mt-8 h-px w-16 bg-secondary" />

              <p className="mt-8 text-lg leading-relaxed text-foreground/85">
                I started Delphia because I know what it feels like to be fully prepared, but still have your body react like you are not. As a high school debater, I have experienced the physical side of performance pressure: shaky hands, racing heart, shallow breathing, and the feeling that your body is moving faster than your mind. Delphia came from that gap between confidence and control. I wanted to create something discreet, wearable, and body-based for people who need a physical anchor before they step into a high-pressure moment.
              </p>

              <p className="mt-8 text-base text-foreground/70">
                Contact:{" "}
                <a href="mailto:nysa.delphia@gmail.com" className="text-foreground underline-offset-4 hover:underline">
                  nysa.delphia@gmail.com
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
