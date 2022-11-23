import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Tab, Tabs, Box, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/AutoStoriesTwoTone';

export const Navigation = () => {
  const [value, setValue] = useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigateToContacts = () => {
    navigate('/contacts');
  };

  const navigateToHome = () => {
    navigate('/');
  };

  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          aria-label="Navigation tabs"
          sx={{ display: { xs: 'flex', md: 'flex' } }}
        >
          <Tab
            value="home"
            label="Home"
            onClick={navigateToHome}
            sx={{ my: 2, color: 'black', display: 'block' }}
          />

          <Tab
            value="contacts"
            label="Contacts"
            onClick={navigateToContacts}
            sx={{ my: 2, color: 'black', display: 'block' }}
          />
        </Tabs>
      </Box>
      <Box sx={{ display: 'flex', ml: 'auto', alignItems: 'center' }}>
        <BookIcon color="action" />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/goit-react-hw-08-phonebook/"
          sx={{
            mr: 2,
            ml: '7px',
            display: { xs: 'none', sm: 'flex' },
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          PHONEBOOK
        </Typography>
      </Box>
    </>
  );
};
