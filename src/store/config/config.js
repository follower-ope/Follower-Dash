import React, { createContext } from 'react';

export const initialState = {
  store: {},
  dispatch: () => {},
};

const Conext = createContext(initialState);

export default Conext;
