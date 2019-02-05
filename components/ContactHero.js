import React from "react";

import ContactForm from "./ContactForm";

export default () => (
  <section className="hero is-light is-small">
    <div className="hero-head" />
    <h1 className="contact-hero-h1">
      <i className="fas fa-link link-icon" />{" "}
      <span className="contact-header">Link-up with devCraft</span>
    </h1>
    <p className="contact-hero-paragraph">
      Please include a few details and we'll get back to you soon.
    </p>
    <div className="hero-body contact-hero-body">
      <ContactForm />
    </div>
  </section>
);
