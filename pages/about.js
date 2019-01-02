//npm packages
import React from "react";

//our packages
import Layout from "../components/Layout";
import AboutCountdown from '../components/AboutCountdown';
import AboutBox from "../components/AboutBox";

export default () => (
  <Layout>
    <AboutCountdown />
    <AboutBox />
  </Layout>
);
