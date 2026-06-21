import { makeStyles, tokens } from '@fluentui/react-components';

export const useHeaderStyles = makeStyles({
  root: {
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1
  },

  inner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalXL}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  brand: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    textDecorationLine: 'none'
  },

  nav: {
    display: 'flex',
    gap: tokens.spacingHorizontalL
  }
});
