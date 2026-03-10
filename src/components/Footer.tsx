const Footer = () => {
  return (
    <footer className="relative py-10 border-t border-border/20">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-orbitron text-xs tracking-[0.3em] text-primary/50 font-semibold">KAM</span>
            <div className="w-px h-4 bg-border/30" />
            <span className="text-[10px] font-mono-code text-muted-foreground/30 tracking-wider">// systems.portfolio</span>
          </div>
          <p className="text-[10px] text-muted-foreground/25 font-mono-code tracking-wider">
            <span className="text-primary/40">©</span> {new Date().getFullYear()} Kalaigar Abdul Muqeet
            <span className="mx-3 text-border/30">|</span>
            Engineered with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
