import { Button, Text, Toolbar } from "@fluentui/react-components";
import { Link } from "react-router-dom";

import { routes } from "@/app/routes";
import { useHeaderStyles } from "./header.styles";

export const Header = () => {
  const styles = useHeaderStyles();

  return (
    <Toolbar className={styles.root}>
      <Link to={routes.home.path} className={styles.logoLink}>
        <Text size={500} weight="semibold">
          Sample App
        </Text>
      </Link>

      <div className={styles.actions}>
        <Button appearance="subtle">Features</Button>
        <Button appearance="subtle">Pricing</Button>
        <Button appearance="primary">Get started</Button>
      </div>
    </Toolbar>
  );
};
