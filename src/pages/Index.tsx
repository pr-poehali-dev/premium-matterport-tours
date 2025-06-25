import Hero from "@/components/Hero";
import PainSolution from "@/components/PainSolution";
import Demo from "@/components/Demo";
import CasesReviews from "@/components/CasesReviews";
import Process from "@/components/Process";
import PriceCalculator from "@/components/PriceCalculator";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PainSolution />
      <Demo />
      <CasesReviews />
      <Process />
      <PriceCalculator />
      <FinalCTA />
    </div>
  );
};

export default Index;
