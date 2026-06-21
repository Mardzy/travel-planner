import { makeStyles, tokens } from '@fluentui/react-components';

export const useHomeStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXXL
  },

  intro: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS
  },

  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: tokens.spacingHorizontalL
  }
});
