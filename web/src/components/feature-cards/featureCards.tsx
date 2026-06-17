import { Card, CardHeader, Text } from "@fluentui/react-components";

import { useFeatureCardsStyles } from "./featureCards.styles";

const features = [
  {
    title: "Fast development",
    description:
      "Vite gives you quick startup, fast refresh, and a modern frontend toolchain.",
  },
  {
    title: "Typed by default",
    description:
      "TypeScript keeps the app safer as it grows and makes refactoring easier.",
  },
  {
    title: "Fluent UI ready",
    description:
      "Use production-quality Microsoft components without building everything yourself.",
  },
];

export const FeatureCards = () => {
  const styles = useFeatureCardsStyles();

  return (
    <section className={styles.root}>
      {features.map((feature) => (
        <Card key={feature.title}>
          <CardHeader header={<Text weight="semibold">{feature.title}</Text>} />
          <Text>{feature.description}</Text>
        </Card>
      ))}
    </section>
  );
};
