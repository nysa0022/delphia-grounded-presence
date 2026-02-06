import { motion } from "framer-motion";
import heroImage from "@/assets/hero-delphia.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Person wearing Delphia wearable in soft morning light"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 text-sm font-light tracking-[0.25em] text-secondary"
        >
          A WEARABLE FOR QUIET CONFIDENCE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-8 text-5xl font-light leading-[1.1] text-foreground md:text-7xl lg:text-8xl"
        >
          Feel grounded
          <br />
          <span className="italic font-light">before you speak.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mx-auto mb-12 max-w-xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl"
        >
          Delphia is a discreet wearable designed to support your body's
          natural response to stress — so you can show up calm, present,
          and entirely yourself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#waitlist"
            className="rounded-sm bg-primary px-8 py-3.5 text-base font-light tracking-[0.1em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            JOIN THE WAITLIST
          </a>
          <a
            href="#science"
            className="rounded-sm border border-foreground/20 px-8 py-3.5 text-base font-light tracking-[0.1em] text-foreground transition-colors hover:border-foreground/40"
          >
            LEARN MORE
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-foreground/30"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
