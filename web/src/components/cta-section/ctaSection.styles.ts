import { makeStyles, tokens } from "@fluentui/react-components";

export const useCTASectionStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "64px 24px",
    textAlign: "center",
  },
  description: {
    display: "block",
    marginTop: tokens.spacingVerticalM,
    marginBottom: tokens.spacingVerticalXL,
  },
});
