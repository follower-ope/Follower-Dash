import React from 'react';

import { Content, Main } from '../styles/components';

import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';

const DashLayout = ({ children }) => (
  <>
    <Content>
      <Sidebar />
      <Main>{children}</Main>
    </Content>
  </>
);

export default DashLayout;
