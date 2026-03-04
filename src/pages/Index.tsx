import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import InsightBanner from "@/components/InsightBanner";
import { triggers, emotions, marketEvents } from "@/data/tradingPsychologyData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <InsightBanner />

      {/* Three-column explorer */}
      <section className="px-4 md:px-8 pb-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <CategorySection
            title="Triggers"
            subtitle="What you control — your behavioral edge leaks"
            items={triggers}
            category="trigger"
            count={triggers.length}
          />
          <CategorySection
            title="Emotions"
            subtitle="What you feel — the psychological responses"
            items={emotions}
            category="emotion"
            count={emotions.length}
          />
          <CategorySection
            title="Market Events"
            subtitle="What you can't control — the uncontrollable"
            items={marketEvents}
            category="market"
            count={marketEvents.length}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          Trading Psychology Atlas — Know Your Mind, Protect Your Edge
        </p>
      </footer>
    </div>
  );
};

export default Index;
