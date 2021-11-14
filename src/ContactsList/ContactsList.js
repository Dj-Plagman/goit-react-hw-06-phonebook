import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/contacts/contacts-actions';

import './ContactList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="item__contact">
        <p className="item__text">{name}</p>
        <p className="item__text">{number}</p>
        <button className="item__buttom" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => {
  const { filter, contact } = state.contacts;
  const normalize = filter.toLowerCase().trim();
  const visibleContacts = contact.filter(contact =>
    contact.name.toLowerCase().includes(normalize),
  );

  return { contacts: visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
