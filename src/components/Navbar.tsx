import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
        <a href="#" className="text-2xl font-light tracking-[0.15em] text-foreground">
          DELPHIA
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          <a href="#problem" className="text-sm font-light tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground">
            THE PROBLEM
          </a>
          <a href="#science" className="text-sm font-light tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground">
            THE SCIENCE
          </a>
          <a href="#philosophy" className="text-sm font-light tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground">
            PHILOSOPHY
          </a>
          <a
            href="#waitlist"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-light tracking-[0.1em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            JOIN WAITLIST
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-background px-6 py-8 md:hidden"
        >
          <div className="flex flex-col gap-6">
            <a href="#problem" onClick={() => setIsOpen(false)} className="text-sm font-light tracking-[0.1em] text-muted-foreground">
              THE PROBLEM
            </a>
            <a href="#science" onClick={() => setIsOpen(false)} className="text-sm font-light tracking-[0.1em] text-muted-foreground">
              THE SCIENCE
            </a>
            <a href="#philosophy" onClick={() => setIsOpen(false)} className="text-sm font-light tracking-[0.1em] text-muted-foreground">
              PHILOSOPHY
            </a>
            <a
              href="#waitlist"
              onClick={() => setIsOpen(false)}
              className="inline-block rounded-sm bg-primary px-5 py-2.5 text-center text-sm font-light tracking-[0.1em] text-primary-foreground"
            >
              JOIN WAITLIST
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
