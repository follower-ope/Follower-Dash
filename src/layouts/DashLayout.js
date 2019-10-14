import React from 'react';

import { Content } from '../styles/components';

import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';

const DashLayout = ({ children }) => (
  <>
    <Content>
      <Sidebar />
      {children}
    </Content>
  </>
);

export default DashLayout;
