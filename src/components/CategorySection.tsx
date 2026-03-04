import { motion } from "framer-motion";
import { PsychologyItem } from "@/data/tradingPsychologyData";
import PsychologyCard from "./PsychologyCard";

interface CategorySectionProps {
  title: string;
  subtitle: string;
  items: PsychologyItem[];
  category: "trigger" | "emotion" | "market";
  count: number;
}

const categoryColors = {
  trigger: "text-trigger",
  emotion: "text-emotion",
  market: "text-market",
};

const CategorySection = ({ title, subtitle, items, category, count }: CategorySectionProps) => {
  return (
    <div className="flex-1 min-w-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4"
      >
        <div className="flex items-baseline gap-3 mb-1">
          <h2 className={`text-xl font-bold ${categoryColors[category]}`}>{title}</h2>
          <span className="font-mono text-xs text-muted-foreground">{count}</span>
        </div>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </motion.div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <PsychologyCard
            key={item.id}
            item={item}
            category={category}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
