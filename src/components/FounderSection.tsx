import FadeIn from "./FadeIn";
import founderPhoto from "@/assets/founder-nysa.jpg";


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
              <div className="aspect-[4/5] overflow-hidden rounded-sm border border-foreground/10 bg-sand-light shadow-sm">
                <img
                  src={founderPhoto}
                  alt="Nysa Nayak, Founder of Delphia"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-sm border border-secondary/40" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Founder</p>
              <h3 className="mt-4 text-4xl font-normal text-foreground md:text-5xl">Nysa Nayak</h3>
              <p className="mt-2 text-base text-foreground/70">Founder &amp; CEO of Delphia</p>

              <div className="mt-8 h-px w-16 bg-secondary" />

              <p className="mt-8 text-lg leading-relaxed text-foreground/85">
                Hi, I’m Nysa Nayak, and I created Delphia because I’m a high school debater who understood the need for Delphia firsthand. There were so many moments where I felt fully prepared and confident, but still could not reach my full potential because of my nerves. Delphia came from that gap between potential and performance. After working on Delphia for over a year, researching performance anxiety, and consulting with psychiatrists and neurologists, I wanted to create something discreet, wearable, and body-based that helps people feel at their best in the moments when it matters most.
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
