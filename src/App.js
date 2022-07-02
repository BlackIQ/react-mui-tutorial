import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from "axios";

import {
  createTheme,
  ThemeProvider
} from "@mui/material/styles";

import ColorPick from './components/color';
import Create from './components/create';
import Home from './components/home';

import Layout from './components/layout';

const theme = createTheme((themeColor) => {
  return {
    palette: {
      mode: 'light',
      primary: {
        main: themeColor
      },
    },
    typography: {
      fontFamily: "Arima",
      fontWeightLight: 200,
      fontWeightRegular: 300,
      fontWeightMedium: 400,
      fontWeightBold: 600
    }
  };
});

function App() {
  const [themeColor, setThemeColor] = useState('#ff0000');

  useEffect(() => {
    Axios.get('http://localhost:8000/theme')
      .then((result) => {
        const theme = result.data;

        console.log(theme);
        // setThemeColor(theme.color);
      })
      .catch((error) => console.log(error));
  });

  return (
    <ThemeProvider theme={theme(themeColor)}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
            <Route exact path='/color'>
              <ColorPick />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
