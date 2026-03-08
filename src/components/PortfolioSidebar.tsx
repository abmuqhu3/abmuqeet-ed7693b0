import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Wrench, FolderOpen, BookOpen, Briefcase, FileText, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Wrench, label: "Skills", href: "#skills" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: BookOpen, label: "Publications", href: "#publications" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: FileText, label: "Resume", href: "#resume" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const PortfolioSidebar = ({ activeSection }: { activeSection: string }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const container = document.getElementById("main-scroll-container");
    if (!container) return;

    let lastScroll = 0;
    const handler = () => {
      const current = container.scrollTop;
      if (current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScroll = current;
    };

    container.addEventListener("scroll", handler, { passive: true });
    return () => container.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    // Hide sidebar after clicking
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ x: 0, opacity: 1 }}
          exit={{ x: -224, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`hidden lg:flex flex-col h-full border-r border-border/30 bg-sidebar absolute left-0 top-0 bottom-0 z-30 ${
            collapsed ? "w-16" : "w-56"
          }`}
        >
          {/* Logo */}
          <div className="p-4 border-b border-border/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <span className="font-orbitron text-xs font-bold text-primary">A</span>
              </div>
              {!collapsed && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden">
                  <span className="font-orbitron text-sm font-bold text-foreground tracking-wider">Abdul Muqeet</span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Circuit decoration */}
          <div className="px-4 py-3">
            <div className="circuit-line w-full" />
            {!collapsed && (
              <div className="flex items-center gap-2 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <div className="w-1 h-1 rounded-full bg-primary/20" />
                <div className="w-0.5 h-0.5 rounded-full bg-primary/10" />
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-2 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href.slice(1))}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                    isActive
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent border border-transparent"
                  }`}
                >
                  <Icon className={`h-4 w-4 flex-shrink-0 ${isActive ? "text-primary" : "group-hover:text-primary"}`} />
                  {!collapsed && <span className="font-mono text-xs tracking-wide">{item.label}</span>}
                  {isActive && !collapsed && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Collapse toggle */}
          <div className="p-2 border-t border-border/30">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
            >
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              {!collapsed && <span className="text-xs font-mono">Collapse</span>}
            </button>
          </div>

          {/* Bottom circuit decoration */}
          <div className="px-4 pb-4">
            <div className="circuit-line w-full" />
            {!collapsed && (
              <div className="flex justify-end items-center gap-2 mt-2">
                <div className="w-0.5 h-0.5 rounded-full bg-accent/20" />
                <div className="w-1 h-1 rounded-full bg-accent/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
              </div>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default PortfolioSidebar;
