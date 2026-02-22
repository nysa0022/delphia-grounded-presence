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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="text-xl tracking-tight text-foreground">
          Delphia
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            About
          </a>
          <a href="#product" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Product
          </a>
          <a href="#science" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Science
          </a>
          <a
            href="#waitlist"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join Waitlist
          </a>
        </div>

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

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-background px-6 py-8 md:hidden"
        >
          <div className="flex flex-col gap-6">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground">About</a>
            <a href="#product" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground">Product</a>
            <a href="#science" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground">Science</a>
            <a href="#waitlist" onClick={() => setIsOpen(false)} className="inline-block rounded-sm bg-primary px-5 py-2.5 text-center text-sm text-primary-foreground">
              Join Waitlist
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
