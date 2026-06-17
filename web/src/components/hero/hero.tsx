import { Button, Text, Title1 } from "@fluentui/react-components";
import { Link } from "react-router-dom";

import { useHeroStyles } from "./hero.styles";
import { routes } from "@/app/routes";

export const Hero = () => {
  const styles = useHeroStyles();

  return (
    <section className={styles.root}>
      <Title1>Build faster with a clean React starter</Title1>

      <Text size={500} className={styles.description}>
        A simple Vite, React, TypeScript, and Fluent UI setup for building
        polished interfaces without unnecessary complexity.
      </Text>

      <div className={styles.actions}>
        <Button appearance="primary" size="large">
          Get started
        </Button>
        <Link to={routes.docs.path}>View docs</Link>
      </div>
    </section>
  );
};
