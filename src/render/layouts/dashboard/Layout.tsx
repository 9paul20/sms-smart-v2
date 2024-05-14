import Header from "./Header";
import Footer from "./Footer";
import { FC } from "react";
import { LayoutProps } from "../../../interfaces";

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
