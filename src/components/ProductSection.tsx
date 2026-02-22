import FadeIn from "./FadeIn";

const ProductSection = () => {
  return (
    <section id="product" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Product image placeholder */}
          <FadeIn>
            <div className="flex aspect-square items-center justify-center rounded-sm bg-sand-light border border-border">
              <p className="text-sm text-muted-foreground italic">
                Product render coming soon
              </p>
            </div>
          </FadeIn>

          {/* Features */}
          <FadeIn delay={0.15}>
            <div>
              <h2 className="mb-8 text-3xl font-normal leading-tight text-foreground md:text-4xl">
                Designed for public speaking.
              </h2>
              <ul className="space-y-4">
                {[
                  "Deep pressure stimulation",
                  "Proprioceptive sensory anchor",
                  "Discreet under clothing",
                  "Adjustable comfortable fit",
                  "Breathable inner lining",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span className="text-lg text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
