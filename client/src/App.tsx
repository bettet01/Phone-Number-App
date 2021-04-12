import React from 'react';
import {useRoutes} from "react-router-dom";
import {ThemeProvider} from '@material-ui/core';
import routes from "./routing";
import {lightTheme} from "./styles/themes";
import GlobalStyles from "./styles/globalStyles";

const App = () => {
    const routing = useRoutes(routes);
  return (
      <ThemeProvider theme={lightTheme}>
          <GlobalStyles/>
          {routing}
      </ThemeProvider>
  );
}

export default App;
