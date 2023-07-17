import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, Logo, Name, NameLink } from './SharedLayout.styled';
import logo from '../../images/logo.png';
import Spiner from 'components/Spiner/Spiner';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Logo>
          <img src={logo} alt="logo_website" width="40" height="40" />
          <NameLink to="/">
            <Name>HD-Films</Name>
          </NameLink>
        </Logo>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
