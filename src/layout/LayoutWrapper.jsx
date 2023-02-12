import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <main className="">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default LayoutWrapper;
