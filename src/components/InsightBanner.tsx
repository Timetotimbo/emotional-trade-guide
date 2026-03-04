import { motion } from "framer-motion";

const InsightBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="border border-border rounded-xl p-8 md:p-12 bg-card/30 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-trigger/5 via-transparent to-emotion/5" />
          <div className="relative z-10">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Core Truth
            </p>
            <blockquote className="text-2xl md:text-3xl font-bold leading-tight mb-6">
              <span className="text-trigger">Every controllable trigger</span>
              <span className="text-foreground"> = </span>
              <span className="text-emotion">edge leak</span>
            </blockquote>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
              You can't control the market. You can only control yourself. 
              The emotional trap: trying to control the uncontrollable leads to emotional exhaustion.
              <br /><br />
              <span className="text-foreground font-medium">
                You can't break rules if you didn't have any to begin with.
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InsightBanner;
