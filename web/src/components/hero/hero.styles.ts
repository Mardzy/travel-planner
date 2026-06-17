import { makeStyles, tokens } from "@fluentui/react-components";

export const useHeroStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "96px 24px",
    textAlign: "center",
  },
  description: {
    display: "block",
    marginTop: tokens.spacingVerticalL,
    marginBottom: tokens.spacingVerticalXXL,
    lineHeight: tokens.lineHeightBase500,
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
  },
  docsLink: {
    color: tokens.colorBrandForegroundLink,
    textDecorationLine: "none",

    ":hover": {
      color: tokens.colorBrandForegroundLinkHover,
      textDecorationLine: "underline",
    },
  },
});
