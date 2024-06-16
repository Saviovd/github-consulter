'use client';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
import StyledComponentsRegistry from '@/lib/registry';

export function Providers({ children }) {
   return (
      <Provider store={store}>
         <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Provider>
   );
}
