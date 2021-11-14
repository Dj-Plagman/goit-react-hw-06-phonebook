import React, { Component } from 'react';
import './ContactForm.module.css';
import { connect } from 'react-redux';
import { addContact } from '../redux/contacts/contacts-actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contact } = this.props;

    const auditContact = contact.find(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (auditContact) {
      alert(`Контакт ${name} з таким ім’ям вже є.`);
      this.reset();
      return;
    }
    this.props.onSubmit(name, number);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className="item__form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className="item__input"
            type="text"
            name="name"
            placeholder="Jony Dep"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Phone
          <input
            className="item__input"
            type="text"
            name="number"
            placeholder="111-11-11"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" disabled={name === '' || number === ''}>
          Save
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ contacts: { contact } }) => ({
  contact,
});
const mapDispatchToProps = dispadch => ({
  onSubmit: (name, number) => dispadch(addContact(name, number)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);