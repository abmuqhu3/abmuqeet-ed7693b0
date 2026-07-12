import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Activity, Cpu, Radar, Package, Shield, Bug, BookOpen, Gauge } from "lucide-react";

interface Metric {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  unit: string;
  label: string;
  context: string;
}

const metrics: Metric[] = [
  {
    icon: Activity,
    value: "50",
    unit: "Hz",
    label: "VCU CAN Control",
    context: "Life-counter + XOR-checked safety loop",
  },
  {
    icon: Gauge,
    value: "500",
    unit: "°/s",
    label: "Steering Rate",
    context: "Tuned from ~100 °/s ceiling",
  },
  {
    icon: Radar,
    value: "9.8",
    unit: "fps",
    label: "mmWave Radar",
    context: "AWR2944 DBSCAN classifier",
  },
  {
    icon: Cpu,
    value: "8",
    unit: "-class",
    label: "Radar Objects",
    context: "WALL / TRUCK / CAR / BUGGY / …",
  },
  {
    icon: Shield,
    value: "15",
    unit: "s",
    label: "Clean Motion",
    context: "0→6 km/h at 0% brake, verified",
  },
  {
    icon: Package,
    value: "124",
    unit: "MB",
    label: "Fleet Installer",
    context: "AES-256-CBC + Cython-locked",
  },
  {
    icon: Bug,
    value: "25",
    unit: "+",
    label: "Deploy Fixes",
    context: "Real-world Jetson AGX Orin bugs",
  },
  {
    icon: BookOpen,
    value: "3",
    unit: "",
    label: "Publications",
    context: "IEEE VTC 2026 · RCAAI 2025 ×2",
  },
];

// Count-up animation hook — increments a display value up to `target` over `duration` ms once triggered.
const useCountUp = (target: number, active: boolean, duration = 1500) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const startTs = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return display;
};

const MetricCard = ({ metric, index, inView }: { metric: Metric; index: number; inView: boolean }) => {
  const Icon = metric.icon;
  const num = parseFloat(metric.value);
  const display = useCountUp(num, inView);

  // preserve decimal places if the source had them
  const decimals = metric.value.includes(".") ? metric.value.split(".")[1].length : 0;
  const shown = display.toFixed(decimals);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="floating-card-glow relative overflow-hidden p-5 md:p-6 group"
    >
      {/* corner accent */}
      <div className="absolute top-0 left-0 w-8 h-px bg-primary/40" />
      <div className="absolute top-0 left-0 w-px h-8 bg-primary/40" />
      <div className="absolute bottom-0 right-0 w-8 h-px bg-primary/40" />
      <div className="absolute bottom-0 right-0 w-px h-8 bg-primary/40" />

      <div className="flex items-center justify-between mb-4">
        <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_16px_hsl(var(--neon-blue)/0.25)] transition-all duration-500">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-primary/60 animate-pulse" />
          <span className="font-mono-code text-[9px] uppercase tracking-widest text-muted-foreground/70">live</span>
        </div>
      </div>

      <div className="flex items-baseline gap-1.5">
        <span className="font-orbitron font-bold text-3xl md:text-4xl text-primary glow-text-blue leading-none tracking-tight tabular-nums">
          {shown}
        </span>
        <span className="font-rajdhani text-lg text-foreground/60 font-medium tabular-nums">
          {metric.unit}
        </span>
      </div>

      <div className="mt-3">
        <p className="font-rajdhani font-semibold text-foreground text-sm tracking-wide">{metric.label}</p>
        <p className="font-space text-[11px] text-muted-foreground/80 mt-0.5 leading-relaxed">{metric.context}</p>
      </div>
    </motion.div>
  );
};

const Metrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id="metrics" className="section-padding relative" ref={containerRef}>
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">
              <Activity className="h-3 w-3" />
              Telemetry
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 tracking-wide">
            By the <span className="text-primary glow-text-blue">Numbers</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl text-sm font-space">
            Real metrics from real work — measured on the vehicle, not simulated. Every number below is
            defensible and has a debugging story attached to it.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary/60 to-transparent mb-12" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} metric={m} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
