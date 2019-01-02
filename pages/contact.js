//npm packages
import React from "react";

//our packages
import Layout from "../components/Layout";
import ContactBackground from "../components/ContactBackground";
import ContactHero from '../components/ContactHero';

export default () => (
  <Layout>
    <ContactBackground />
    <ContactHero />
  </Layout>
);
