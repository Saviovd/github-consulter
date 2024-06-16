import { Outfit } from 'next/font/google';
import React from 'react';
import { Providers } from './providers';

const outfit = Outfit({
   subsets: ['latin'],
   display: 'swap',
});

function AppLayout({ children }) {
   return (
      <html lang='pt-BR' className={outfit.className}>
         <body>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}

export default AppLayout;
