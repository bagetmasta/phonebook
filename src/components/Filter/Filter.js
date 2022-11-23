import { useDispatch } from 'react-redux/es/exports';
import { useContacts } from 'hooks';
import { filterContact } from 'redux/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const handleChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <>
      <TextField
        value={filter}
        onChange={handleChange}
        id="filter"
        label="Find contacts by name"
      />
    </>
  );
};
