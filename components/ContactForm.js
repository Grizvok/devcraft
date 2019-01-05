import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = e.target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const message = this.state.message;

    const payload = {
      name,
      email,
      message,
    };

    const res = await fetch('http://www.trevorhunka.xyz/api/message', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
	'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      this.setState({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  render() {
    return (
      <div className="columns">
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
      </div>
    );
  }
}
