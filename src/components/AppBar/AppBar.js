import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';
import { LinearProgress } from '@mui/material';
import { Footer } from 'components/Footer/Footer';
import { AppBar, Toolbar, Container } from '@mui/material';

export default function StyledAppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <AppBar
        position="static"
        component="header"
        sx={{
          backgroundColor: 'grey.A100',
          boxShadow: theme => theme.shadows[1],
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>

      <Suspense fallback={<LinearProgress color="success" />}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
}
