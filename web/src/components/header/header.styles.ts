import { makeStyles, tokens } from "@fluentui/react-components";

export const useHeaderStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalXXL}`,
  },

  actions: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
  },

  logoLink: {
    color: "inherit",
    textDecorationLine: "none",

    ":hover": {
      textDecorationLine: "none",
    },
  },
});
