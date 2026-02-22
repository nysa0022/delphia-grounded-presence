import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen items-center justify-center px-6 flex flex-col">
      <div className="mx-auto max-w-3xl text-center">
        {/* Logo placeholder — replace src with actual logo asset */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-10">

          


        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-8 text-4xl font-normal leading-tight text-foreground md:text-6xl">stay in control


        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">

          A discreet upper-arm wrap designed to help prevent your body's physical
          stress response of performance anxiety during public speaking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

          <a
            href="#waitlist"
            className="rounded-sm bg-primary px-8 py-3.5 text-base tracking-wide text-primary-foreground transition-opacity hover:opacity-90">

            Join the Waitlist
          </a>
          <a
            href="#about"
            className="rounded-sm border border-foreground/20 px-8 py-3.5 text-base tracking-wide text-foreground transition-colors hover:border-foreground/40">

            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-foreground/30" />

      </motion.div>
    </section>);

};

export default HeroSection;