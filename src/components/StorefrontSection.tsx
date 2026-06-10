import { useState } from "react";
import FadeIn from "./FadeIn";
import storefrontRender from "@/assets/storefront-render.png";

const StorefrontSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="storefront" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <FadeIn>
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-foreground/60">Storefront</p>
              <h2 className="mb-6 text-4xl font-normal leading-tight text-foreground md:text-6xl">
                Coming soon.
              </h2>
              <p className="mb-12 max-w-md text-lg leading-relaxed text-foreground/80">
                Early access updates will be available soon. Join the waitlist to follow the launch and be the first to know when Delphia becomes available.
              </p>

              {submitted ? (
                <div className="rounded-sm border border-secondary/50 bg-sand-light px-6 py-5">
                  <p className="text-base text-foreground">
                    Thank you. You'll be the first to hear from us.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <label htmlFor="waitlist-email" className="block text-xs uppercase tracking-[0.3em] text-foreground/60">
                    Stay updated
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="waitlist-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 rounded-sm border border-foreground/20 bg-transparent px-5 py-3.5 text-base text-foreground placeholder:text-foreground/40 focus:border-secondary focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-7 py-3.5 text-base tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Join waitlist
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-sm bg-sand-light border border-foreground/10 shadow-sm">
                <img
                  src={storefrontRender}
                  alt="Delphia upper-arm wrap product render"
                  className="h-full w-full object-contain p-6"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-sm border border-secondary/40" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default StorefrontSection;
