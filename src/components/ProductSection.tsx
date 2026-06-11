import FadeIn from "./FadeIn";
import productRender from "@/assets/product-render.png";

const features = [
  "Micro steel shot bead channels for grounding pressure",
  "Sensory-motor bead interaction",
  "Upper-arm proprioceptive anchor",
  "Designed to be discreet under clothing",
  "Adjustable comfortable fit",
  "Stretchy nylon-laminated neoprene breathable fabric",
];

const ProductSection = () => {
  return (
    <section id="product" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <FadeIn>
            <div className="relative">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-sm bg-sand-light border border-foreground/10 shadow-sm">
                <img
                  src={productRender}
                  alt="Delphia upper-arm wrap product render"
                  className="h-full w-full object-contain p-6"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-sm border border-secondary/40" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/60">The Product</p>
              <h2 className="mb-6 text-3xl font-normal leading-tight text-foreground md:text-5xl">
                Designed for high-pressure moments.
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-foreground/80">
                Delphia is built to support the body before performance stress peaks, combining pressure, texture, and upper-arm placement in one discreet wrap.
              </p>
              <p className="mb-10 text-base md:text-lg">
                <span className="text-foreground/60">Price:</span>{" "}
                <span className="text-foreground">$35</span>
              </p>
              {/* price line */}
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span className="text-base leading-relaxed text-foreground/85 md:text-lg">{feature}</span>
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
