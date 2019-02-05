import React from "react";

class ConfirmationModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount () {
    document.addEventListener('click', this.handleClose)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClose)
  }

  handleClose = () => {
    this.props.handleModalClose();
  }

  render() {
    if (this.props.showConfirmation === true) {
      return (
        <div className="modal is-active">
          <div className="modal-background" />
          <div className="modal-content">
            <div className="box modal-confirmation-box has-text-centered">
            <i class="far fa-check-circle confirmation-icon"></i>
              <p className="confirmation-message">Your message was sent successfully!</p>
              <p className="click-confirmation-message">Click anywhere to continue.</p>
            </div>
          </div>
          <button onClick={this.handleClose} className="modal-close is-large" aria-label="close" />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ConfirmationModal;
