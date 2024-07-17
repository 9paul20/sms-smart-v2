import type { FC } from 'react';
import type { LayoutProps } from '../../../js/interfaces';
import Footer from './Footer';
import Header from './Header';
import React from 'react';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center h-screen bg-gray-200 dark:bg-gray-900">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
