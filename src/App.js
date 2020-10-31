import React from 'react';

import './App.css';
import RouterApp from "./router";
import AppTheme from "./App.theme";
import GlobalStyle from "./global-styles";


function App() {
  return (
    //we can add wrapped components here \
    <>
    {/* <GlobalStyle/> */}
    <AppTheme>
      <RouterApp />
    </AppTheme>
    </>
  );
}
export default App;
