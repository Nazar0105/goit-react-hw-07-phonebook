import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { fetchContacts } from '../redux/contactsSlice'; // Імпортуємо дії для отримання контактів з бекенду
import styles from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  // Отримуємо контакти з бекенду при завантаженні компонента
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;



