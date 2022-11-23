import { Box, Link, Typography } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
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
        К сожалению, здесь ничего нет. Кстати, Вы всех внесли в
      </Typography>
      <Link sx={{ ml: '5px' }} href="/goit-react-hw-08-phonebook/contacts">
        список контактов?
      </Link>
    </Box>
  );
};
