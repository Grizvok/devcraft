import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      message: '',
      messageError: '',
    }
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
    const name = this.state.name;
    const email = this.state.email;
    const message = this.state.message;

    let err = this.validate();
    e.preventDefault();
    if (!err) {
      this.setState({
        name: '',
        email: '',
        message: '',
        nameError: '',
        emailError: '',
        messageError: '',
      })
    }
  };

  validate = () => {
    let isError;
    const errors = {
      nameError : '',
      emailError: '',
      messageError: ''
    }

    if (this.state.name < 1) {
      isError = true;
      errors.nameError = 'Please enter a name';
    }

    if (this.state.email ) {

    }
  }

  render() {
    return (
      <div class="columns">
        <div class="column box contact-form is-half">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" required type="text" placeholder="e.g Alex Smith" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                required
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" required placeholder="Textarea" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
