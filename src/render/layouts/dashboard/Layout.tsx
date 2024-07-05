import type { FC } from 'react';
import type { LayoutProps } from '../../../js/interfaces';
import Footer from './Footer';
import Header from './Header';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="text-center">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
