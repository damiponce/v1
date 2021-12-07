import { Fragment, useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { isBrowser } from 'react-device-detect';
import CursorProvider from '../cursor/Provider';

const Providers = ({ children }) => {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   const body = isBrowser ? (
      <Fragment>{children}</Fragment>
   ) : (
      <Fragment>{children}</Fragment>
   );

   if (!mounted) {
      return <div style={{ visibility: 'hidden' }}>{body}</div>;
   }
   return body;
};

export default Providers;
