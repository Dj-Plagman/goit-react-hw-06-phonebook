import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';
import { v4 as uniqueId } from 'uuid';

export const addContact = (name, number) => ({
  type: ADD,
  payload: {
    id: uniqueId(),
    name,
    number,
  },
});
export const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});
export const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});