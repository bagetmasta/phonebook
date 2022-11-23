import { Box, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/AutoStoriesTwoTone';

export const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{
        position: 'absolute',
        width: '100%',
        py: 3,
        px: 2,
        backgroundColor: 'grey.A100',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BookIcon color="action" />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/goit-react-hw-08-phonebook/"
        sx={{
          mr: 2,
          ml: '7px',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        PHONEBOOK
      </Typography>
    </Box>
  );
};
