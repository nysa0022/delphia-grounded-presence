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
    <section id="waitlist" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="mb-6 text-3xl font-normal leading-tight text-foreground md:text-5xl">
            Be among the first.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mb-12 max-w-md text-lg leading-relaxed text-muted-foreground">
            Join the waitlist to receive early access and launch updates.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          {submitted ? (
            <div className="rounded-sm border border-secondary/40 p-8">
              <p className="text-lg text-secondary">
                Thank you. We'll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-sm border border-border bg-transparent px-5 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-secondary focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-sm bg-primary px-8 py-3.5 text-base tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
};

export default WaitlistSection;
