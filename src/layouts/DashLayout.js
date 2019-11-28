import React from 'react';

import { Content, Main, Container } from '../styles/components';

import Sidebar from '../components/Sidebar';
import NavMenu from '../components/NavMenu';

const DashLayout = ({ children }) => {
  return (
    <>
      <Content>
        <Sidebar />
        <Main>
          <NavMenu />
          <Container>{children}</Container>
        </Main>
      </Content>
    </>
  );
};

export default DashLayout;
