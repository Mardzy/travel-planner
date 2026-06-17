import { Link } from "react-router-dom";
import {
  Title1,
  Title2,
  Card,
  CardHeader,
  Body1,
  Text,
} from "@fluentui/react-components";

import { Page } from "@/layout";
import { useDocsStyles } from "./docs.styles";

const docsLinks = [
  {
    title: "Vite",
    description:
      "Learn about the dev server, build setup, and project configuration.",
    href: "https://vite.dev/",
  },
  {
    title: "React",
    description:
      "Review components, hooks, rendering, and modern React patterns.",
    href: "https://react.dev/",
  },
  {
    title: "Fluent UI",
    description:
      "Explore Microsoft’s React component library, tokens, and styling system.",
    href: "https://react.fluentui.dev/",
  },
  {
    title: "TypeScript",
    description: "Use types to make the app safer and easier to refactor.",
    href: "https://www.typescriptlang.org/docs/",
  },
];

export const Docs = () => {
  const styles = useDocsStyles();

  return (
    <Page>
      <Title1>Documentation</Title1>

      <Text size={500} className={styles.intro}>
        This page collects the main references for the project setup: Vite,
        React, TypeScript, and Fluent UI.
      </Text>

      <Title2>Core references</Title2>

      <div className={styles.grid}>
        {docsLinks.map(({ title, description, href }) => (
          <Card key={title}>
            <CardHeader header={<Text weight="semibold">{title}</Text>} />

            <div className={styles.cardBody}>
              <Body1>{description}</Body1>

              <Link to={href} target="_blank" rel="noreferrer">
                Open docs
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Page>
  );
};
