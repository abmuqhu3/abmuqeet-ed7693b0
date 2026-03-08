const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kalaigar Abdul Muqeet. Built with precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
