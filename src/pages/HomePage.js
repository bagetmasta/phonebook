import books from 'images/books.webp';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${books})`,
        height: '100vh',
      }}
    ></Box>
  );
}
