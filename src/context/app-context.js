import React, { createContext } from 'react';
// import AppInitialState

export const AppContext = createContext();
export const ModalContext = createContext();

export const AppContextProvider = ({ children, ...props }) => {
  return <AppContext.Provider value={props}>{children};</AppContext.Provider>;
};

export const ModalContextProvider = ({ children, ...props }) => {
  return (
    <ModalContext.Provider value={props}>{children}</ModalContext.Provider>
  );
};
