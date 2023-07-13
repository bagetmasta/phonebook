import { Box, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/AutoStoriesTwoTone';

export const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{
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
        href="/react-phonebook/"
        sx={{
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
