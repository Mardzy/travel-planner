// cta-link.styles.ts
import { makeStyles, tokens } from '@fluentui/react-components';

export const useCtaLinkStyles = makeStyles({
  root: {
    alignItems: 'center',
    backgroundColor: tokens.colorBrandBackground,
    borderRadius: tokens.borderRadiusMedium,
    boxSizing: 'border-box',
    color: tokens.colorNeutralForegroundOnBrand,
    display: 'inline-flex',
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    justifyContent: 'center',
    minHeight: '32px',
    padding: `0 ${tokens.spacingHorizontalM}`,
    textDecorationLine: 'none',

    ':hover': {
      backgroundColor: tokens.colorBrandBackgroundHover,
      color: tokens.colorNeutralForegroundOnBrand,
      textDecorationLine: 'none',
    },

    ':active': {
      backgroundColor: tokens.colorBrandBackgroundPressed,
      color: tokens.colorNeutralForegroundOnBrand,
    },
  },
});