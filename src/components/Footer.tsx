const Footer = () => {
  return (
    <footer className="border-t border-foreground/5 py-8 relative">
      <div className="section-container relative z-10 text-center">
        <p className="text-[10px] text-foreground/20 font-mono tracking-wider">
          <span className="text-[#00d4ff]/40">©</span> {new Date().getFullYear()} Kalaigar Abdul Muqeet
          <span className="mx-3 text-foreground/10">|</span>
          Built with precision
        </p>
      </div>
    </footer>
  );
};

export default Footer;
