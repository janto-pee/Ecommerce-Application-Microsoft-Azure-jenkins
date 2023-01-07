import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Events App</title>
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
