import React from 'react';
import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { contact } = this.props;

    return (
      <div className="Containet">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {!contact.length && <div>No contacts, add a contact</div>}
        <ContactsList />
      </div>
    );
  }
}
const mapStateToProps = ({ contacts: { contact } }) => ({
  contact,
});
export default connect(mapStateToProps)(App);