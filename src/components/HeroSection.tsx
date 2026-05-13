import { motion } from "framer-motion";
import delphiaLogo from "@/assets/delphia-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen px-6 flex flex-col items-center justify-start pt-24 md:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-10"
        >
          <img
            src={delphiaLogo}
            alt="Delphia logo"
            className="mx-auto w-full max-w-[850px] h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mb-12 max-w-2xl text-center text-xl leading-relaxed text-foreground md:text-2xl"
        >
          A discreet upper-arm wrap designed to help you feel grounded and in control before high-pressure moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#storefront"
            className="rounded-sm bg-primary px-8 py-3.5 text-base tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join the Waitlist
          </a>
          <a
            href="#about"
            className="rounded-sm border border-foreground/20 px-8 py-3.5 text-base tracking-wide text-foreground transition-colors hover:border-foreground/40"
          >
            Learn More
          </a>
        </motion.div>
      </div>

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
