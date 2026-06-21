import { makeStyles, tokens } from '@fluentui/react-components';

export const useLayoutStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1
  },

  body: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `${tokens.spacingVerticalXL} ${tokens.spacingHorizontalXL}`,
    boxSizing: 'border-box'
  }
});
