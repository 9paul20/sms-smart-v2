import { FC } from "react";
import { LayoutProps } from "../../../js/interfaces";
import Header from "./Header";
import Footer from "./Footer";

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
