import { useState } from "react";
import FadeIn from "./FadeIn";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="bg-primary px-6 py-24 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <p className="mb-6 text-sm font-light tracking-[0.2em] text-sage">
            EARLY ACCESS
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mb-6 text-3xl font-light leading-[1.2] text-primary-foreground md:text-5xl">
            Be among the first
            <br />
            <span className="italic">to feel the difference.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mb-12 max-w-md text-lg font-light leading-relaxed text-primary-foreground/60">
            Join the waitlist to receive updates on development, early access
            opportunities, and the story behind Delphia.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          {submitted ? (
            <div className="rounded-sm border border-sage/30 p-8">
              <p className="text-lg font-light text-sage">
                Thank you. We'll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 rounded-sm border border-primary-foreground/20 bg-transparent px-5 py-3.5 text-base font-light text-primary-foreground placeholder:text-primary-foreground/30 focus:border-sage focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-sm bg-sage px-8 py-3.5 text-base font-light tracking-[0.1em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                JOIN
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
};

export default WaitlistSection;
