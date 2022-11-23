import { useContacts } from 'hooks';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactsList = () => {
  const { contacts, filter, isLoading } = useContacts();
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter?.toLowerCase();

    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {contacts.length < 1 && !isLoading ? (
        <Box sx={{ mt: '10px' }}>Add your first contact!</Box>
      ) : (
        visibleContacts.map(({ id, name, number }) => (
          <Box
            component={'li'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: '7px',
              p: '3px',
              borderRadius: '3px',
              boxShadow: theme => theme.shadows[2],
            }}
            key={id}
          >
            <Box component={'span'} sx={{ mr: '7px' }}>
              {name}: {number}
            </Box>
            <Button
              sx={{ ml: 'auto' }}
              variant="outlined"
              startIcon={<DeleteIcon />}
              size="small"
              color="error"
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
          </Box>
        ))
      )}
    </>
  );
};
