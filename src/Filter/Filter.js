//import React from 'react';
//import styles from './Filter.module.css';

//const Filter = ({ value, onChangle }) => {
//  return (
//    <label className={styles.label}>
//      {' '}
//      Find contacts by name
//      <input
//        className={styles.input}
//        value={value}
//        type="text"
//        onChange={onChangle}
//      />
//    </label>
//  );
//};

//export default Filter;

import { connect } from 'react-redux';
import { changeFilter } from '../redux/contacts/contacts-actions';

import './Filter.module.css';
const Filter = ({ value, onChange }) => (
  <label className="item__filter">
    <p className="item__text-filter">Find Contacts</p>
    <input
      className="item__element"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);
const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);