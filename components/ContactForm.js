import React from "react";

import OtherContact from "./OtherContact";
import ConfirmationModal from "./ConfirmationModal";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      showConfirmation: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalClose = () => {
    this.setState({
      showConfirmation: false
    })
  }

  handleChange = (e) => {
    const target = e.target;
    const value = e.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const message = this.state.message;

    const payload = {
      name,
      email,
      message
    };

    const res = await fetch("http://localhost:3000/api/message", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res.status === 200) {
      this.setState(prevState => ({
        name: "",
        email: "",
        message: "",
        showConfirmation: true
      }));
    }
  };

  render() {
    return (
      <div className="columns contact-box">
        <ConfirmationModal handleModalClose={this.handleModalClose} showConfirmation={this.state.showConfirmation} />
        <div className="column box contact-form is-half">
          <form method="POST" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  name="name"
                  required
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  required
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div align="left" className="field">
              <p className="control">
                <button className="button is-link">Send</button>
              </p>
            </div>
          </form>
        </div>
        <div className="column is-one-third has-text-centered">
          <OtherContact />
        </div>
      </div>
    );
  }
}
