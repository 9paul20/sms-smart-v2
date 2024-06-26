import { FC } from "react";
import { LayoutProps } from "../../../js/interfaces";
import Header from "./Header";
import Footer from "./Footer";

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
