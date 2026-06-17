import { makeStyles, tokens } from "@fluentui/react-components";

export const useFeatureCardsStyles = makeStyles({
  root: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "32px 24px 80px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: tokens.spacingHorizontalXL,
  },
});
