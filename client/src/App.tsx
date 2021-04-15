import React from 'react';
import {useRoutes} from "react-router-dom";
import {ThemeProvider} from '@material-ui/core';
import routes from "./config/routing";
import {lightTheme} from "./styles/themes";
import GlobalStyles from "./styles/globalStyles";
import Footer from "./components/navigation/Footer";

const App = () => {
    const routing = useRoutes(routes);
  return (
      <ThemeProvider theme={lightTheme}>
          <GlobalStyles/>
          {routing}
          <Footer/>
      </ThemeProvider>
  );
}

export default App;
