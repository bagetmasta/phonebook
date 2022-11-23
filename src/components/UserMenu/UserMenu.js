import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Typography, Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <Typography
        sx={{
          ml: 'auto',
          display: { xs: 'none', sm: 'flex' },
          fontWeight: 700,
          fontSize: '1rem',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        }}
      >
        Welcome, {user.name} :)
      </Typography>
      <Button
        sx={{ ml: '10px' }}
        size="small"
        variant="outlined"
        color="error"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
};
