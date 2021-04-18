import React from 'react';
import {useRoutes} from "react-router-dom";
import {ThemeProvider} from '@material-ui/core';
import routes from "./config/routing";
import {lightTheme} from "./styles/themes";
import GlobalStyles from "./styles/globalStyles";
import Footer from "./components/navigation/Footer";
import {useSelector} from "react-redux";
import {RootState} from "./redux/rootReducer";
import SnackbarNotification from "./components/notification/SnackbarNotification";
import {SnackbarNotificationState} from "./types/GenericTypes";

const App = () => {
    const routing = useRoutes(routes);
    const snackbar: SnackbarNotificationState = useSelector((state: RootState) => state.SnackbarReducer)
  return (
      <ThemeProvider theme={lightTheme}>
          <GlobalStyles/>
          {routing}
          <Footer/>
          <SnackbarNotification showNotification={snackbar.showNotification} message={snackbar.message} color={snackbar.color} />
      </ThemeProvider>
  );
}

export default App;
