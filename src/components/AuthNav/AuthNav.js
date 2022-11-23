import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

export const AuthNav = () => {
  const [value, setValue] = useState('login');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <Box ml={'auto'} sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="inherit"
        aria-label="Auth tabs"
        sx={{ display: { xs: 'flex', md: 'flex' } }}
      >
        <Tab
          value="register"
          label="Sign up"
          onClick={navigateToRegister}
          sx={{
            my: 2,
            color: 'black',
            display: { xs: 'none', md: 'flex' },
          }}
        />

        <Tab
          value="login"
          label="Log in"
          onClick={navigateToLogin}
          sx={{
            my: 2,
            color: 'black',
            display: { xs: 'none', md: 'flex' },
          }}
        />
      </Tabs>
    </Box>
  );
};
