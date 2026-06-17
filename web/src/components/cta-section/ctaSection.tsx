import { Button, Text, Title2 } from "@fluentui/react-components";

import { useCTASectionStyles } from "./ctaSection.styles";

export const CTASection = () => {
  const styles = useCTASectionStyles();

  return (
    <section className={styles.root}>
      <Title2>Ready to start building?</Title2>

      <Text size={400} className={styles.description}>
        This gives you a clean foundation you can extend into a real
        application.
      </Text>

      <Button appearance="primary" size="large">
        Create your first feature
      </Button>
    </section>
  );
};
