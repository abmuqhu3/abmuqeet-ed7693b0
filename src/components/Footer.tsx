const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="section-container relative z-10 text-center">
        <p className="text-xs text-muted-foreground font-mono">
          <span className="text-primary">©</span> {new Date().getFullYear()} Kalaigar Abdul Muqeet
          <span className="mx-2 text-border">|</span>
          Built with precision
        </p>
      </div>
    </footer>
  );
};

export default Footer;
