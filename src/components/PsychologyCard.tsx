import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PsychologyItem } from "@/data/tradingPsychologyData";

interface PsychologyCardProps {
  item: PsychologyItem;
  category: "trigger" | "emotion" | "market";
  index: number;
}

const categoryStyles = {
  trigger: {
    border: "border-glow-trigger",
    glow: "glow-trigger",
    dot: "bg-trigger",
    text: "text-trigger",
    bg: "bg-trigger/5",
  },
  emotion: {
    border: "border-glow-emotion",
    glow: "glow-emotion",
    dot: "bg-emotion",
    text: "text-emotion",
    bg: "bg-emotion/5",
  },
  market: {
    border: "border-glow-market",
    glow: "glow-market",
    dot: "bg-market",
    text: "text-market",
    bg: "bg-market/5",
  },
};

const PsychologyCard = ({ item, category, index }: PsychologyCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const styles = categoryStyles[category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.3), duration: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`
        cursor-pointer border rounded-lg p-4 transition-all duration-300
        bg-card/50 backdrop-blur-sm hover:bg-card/80
        ${styles.border}
        ${isExpanded ? styles.glow : ""}
      `}
    >
      <div className="flex items-start gap-3">
        <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${styles.dot}`} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground leading-snug">{item.text}</p>
          <AnimatePresence>
            {isExpanded && item.detail && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`text-xs mt-2 leading-relaxed ${styles.text} overflow-hidden`}
              >
                {item.detail}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default PsychologyCard;
