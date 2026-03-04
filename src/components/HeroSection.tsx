import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-trigger/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emotion/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-market/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Trading Psychology Atlas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
        >
          <span className="text-gradient-hero">Map Your</span>
          <br />
          <span className="text-foreground">Trading Mind</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          An interactive atlas of the emotional triggers, psychological responses,
          and market events that shape every trader's decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-8 font-mono text-xs tracking-wider"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trigger" />
            <span className="text-trigger">TRIGGERS</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emotion" />
            <span className="text-emotion">EMOTIONS</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-market" />
            <span className="text-market">MARKET EVENTS</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-12"
        >
          <div className="inline-block border border-border rounded-lg px-6 py-3 bg-card/50 backdrop-blur-sm">
            <p className="font-mono text-xs text-muted-foreground">
              👉 <span className="text-foreground">Every controllable trigger = edge leak</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
