import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Container, LayoutHeader, LayoutNav, Main } from './Layout.styled';
import { Oval } from 'react-loader-spinner';

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
        <Suspense fallback={<Oval
        className="loader"
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
