import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { selectContacts, addContact, deleteContact } from '../redux/contactsSlice'; // Змінимо імпорт
import styles from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const countTotalContacts = () => {
    return contacts.length;
  };

  const total = countTotalContacts();

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
     <ContactForm contacts={contacts} onAddContact={(contact) => dispatch(addContact(contact))} /> {/* Оновлений спосіб передачі addContact */}
      {total === 0 ? (
        <p>There are no contacts in your phonebook!</p>
      ) : (
        <>
          <Filter />
          <ContactList onDeleteContact={(contactId) => dispatch(deleteContact(contactId))} /> {/* Оновлений спосіб передачі deleteContact */}
        </>
      )}
    </div>
  );
};

export default App;




