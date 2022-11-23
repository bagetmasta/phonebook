import { useState } from 'react';
import { useContacts } from 'hooks';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import Notiflix from 'notiflix';
import { Box, Button, TextField } from '@mui/material';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useContacts();

  const handleSubmit = e => {
    e.preventDefault();

    addOneContact({ name, number });
    setName('');
    setNumber('');
  };

  const addOneContact = ({ name, number }) => {
    const oneContact = {
      name,
      number,
    };

    checkForSameName(oneContact);
  };

  const checkForSameName = oneContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === oneContact.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.warning(`${oneContact.name} уже есть в Ваших контактах`);
      // alert(`${oneContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(oneContact));
  };

  const handleChange = e => {
    e.currentTarget.type === 'text'
      ? setName(e.currentTarget.value)
      : setNumber(e.currentTarget.value);
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField
          value={name}
          onChange={handleChange}
          margin="normal"
          required
          id="name"
          label="Name"
          name="name"
          autoComplete="off"
          autoFocus
        />
        <TextField
          value={number}
          onChange={handleChange}
          margin="normal"
          required
          name="number"
          label="Phone number"
          id="number"
          autoComplete="tel"
        />
        <Button variant="outlined" sx={{ mt: '7px' }} type="submit">
          Add contact
        </Button>
      </Box>
    </>
  );
}
