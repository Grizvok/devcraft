import React from "react";
import Link from "next/link";

import AboutDevCraft from "./AboutDevCraft";

export default class AboutBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero is-light is-small">
        <div className="hero-body">
          <div className="container">
            <AboutDevCraft />
          </div>
        </div>
      </section>
    );
  }
}
