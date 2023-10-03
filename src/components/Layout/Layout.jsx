import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Container, LayoutHeader, LayoutNav, Main } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <LayoutHeader>
        <LayoutNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </LayoutNav>
      </LayoutHeader>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
