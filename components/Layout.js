//npm packages
import React from 'react';

//our packages
import Navbar from "./Navbar";
import "../scss/style.scss";
import Footer from './Footer';

const Layout = props => (
    <div>
      {/* <Head /> */}
      <Navbar />
      {props.children}
      <Footer />
    </div>
);

export default Layout;