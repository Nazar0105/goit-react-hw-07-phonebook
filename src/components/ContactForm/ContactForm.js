import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = ({ contacts, onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Перевірка на наявність контакту в списку
    const isExist = contacts.find(
      (elem) => elem.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`"${name}" is already in contacts!`);
      return;
    }

    // Додавання нового контакту через Redux
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.ContactFormLabel}>
        Name
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          required
          className={styles.Input}
        />
      </label>
      <label className={styles.ContactFormLabel}>
        Phone
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          required
          className={styles.Input}
        />
      </label>

      <button type="submit" className={styles.AddContactBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
