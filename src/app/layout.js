import React from 'react';
import { Providers } from './providers';

function AppLayout({children}) {
   return (
      <Providers>
         <html lang='pt-BR'>
            <body>
               {children}
            </body>
         </html>
      </Providers>
   );
}

export default AppLayout;
