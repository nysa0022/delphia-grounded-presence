const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-lg tracking-tight text-foreground">
          Delphia
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Terms
          </a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
