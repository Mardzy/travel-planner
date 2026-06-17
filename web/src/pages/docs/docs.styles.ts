import { makeStyles, tokens } from "@fluentui/react-components";

export const useDocsStyles = makeStyles({
  intro: {
    display: "block",
    marginTop: tokens.spacingVerticalM,
    marginBottom: tokens.spacingVerticalXXXL,
    lineHeight: tokens.lineHeightBase500,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: tokens.spacingHorizontalL,
    marginTop: tokens.spacingVerticalXL,
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
});
