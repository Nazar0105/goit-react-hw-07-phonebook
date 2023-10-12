import axios from 'axios';

const BASE_URL = 'https://6527bd77931d71583df14b76.mockapi.io/contacts';

export const fetchContacts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addContact = async (contact) => {
  const response = await axios.post(BASE_URL, contact);
  return response.data;
};

export const deleteContact = async (contactId) => {
  await axios.delete(`${BASE_URL}/${contactId}`);
};