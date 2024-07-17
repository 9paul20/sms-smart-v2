import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
// import React from "react";
import ReactDOM from 'react-dom/client';
import './render/css/index.scss';
import Index from './render/routes';
import React from 'react';

const rootElement = document.getElementById('root') as HTMLElement;
// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(rootElement!).render(
  // <React.StrictMode>
  <NextUIProvider>
    <ThemeProvider attribute="class" defaultTheme="light">
      <Index />
    </ThemeProvider>
  </NextUIProvider>,
  // </React.StrictMode>
);
