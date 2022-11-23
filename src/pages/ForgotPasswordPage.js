import { Box, Link, Typography } from '@mui/material';

export const ForgotPasswordPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          borderRadius: '3px',
          p: '13px',
          boxShadow: theme => theme.shadows[2],
        }}
      >
        <Typography
          sx={{
            fontFamily:
              ' -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            lineHeight: '18.4px',
            fontSize: '16px',
          }}
        >
          Постарайтесь вспомнить Ваш пароль и
        </Typography>
        <Link sx={{ ml: '5px' }} href="/goit-react-hw-08-phonebook/login">
          попробуйте еще раз!
        </Link>
      </Box>
    </Box>
  );
};
