import ContactForm from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Box } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { useContacts } from 'hooks';

export default function ContactsPage() {
  const { isLoading } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: {
          sm: 'flex',
          flex: '1 1 auto',
          justifyContent: 'space-around',
          alignItems: 'baseline',
        },
        p: '15px',
      }}
    >
      <Box>
        <Box component={'h1'} sx={{ textAlign: 'center' }}>
          Phonebook
        </Box>
        <ContactForm />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box component={'h2'} sx={{ textAlign: 'center' }}>
          Contacts
        </Box>
        <Filter />
        {isLoading && <LinearProgress />}

        <ContactsList />
      </Box>
    </Box>
  );
}
