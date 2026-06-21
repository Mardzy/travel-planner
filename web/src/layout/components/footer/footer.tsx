import { Text } from '@fluentui/react-components';

import { useFooterStyles } from './footer.styles';

export const Footer = () => {
  const footerStyles = useFooterStyles();

  return (
    <footer className={footerStyles.root}>
      <div className={footerStyles.content}>
        <Text size={200}>© 2026 Sample App Built with React + Vite & Fluent UI</Text>
      </div>
    </footer>
  );
};
