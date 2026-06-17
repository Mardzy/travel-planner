import { CTASection, FeatureCards, Hero } from "@/components";
import { Page } from "@/layout";

export const Home = () => {
  return (
    <Page>
      <Hero />
      <FeatureCards />
      <CTASection />
    </Page>
  );
};
