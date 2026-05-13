const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-2xl tracking-tight text-foreground">Delphia</p>
          <p className="mt-2 text-sm text-foreground/70">
            Contact:{" "}
            <a href="mailto:nysa.delphia@gmail.com" className="text-foreground underline-offset-4 hover:underline">
              nysa.delphia@gmail.com
            </a>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a href="#" className="text-sm text-foreground/70 transition-colors hover:text-foreground">Privacy</a>
          <a href="#" className="text-sm text-foreground/70 transition-colors hover:text-foreground">Terms</a>
          <a href="mailto:nysa.delphia@gmail.com" className="text-sm text-foreground/70 transition-colors hover:text-foreground">Contact</a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-foreground/50">
        © {new Date().getFullYear()} Delphia. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
