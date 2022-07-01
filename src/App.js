import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  createTheme,
  ThemeProvider
} from "@mui/material/styles";

import Create from './components/create';
import Home from './components/home';

import Layout from './components/layout';

const theme = createTheme({
  typography: {
    fontFamily: "Arima",
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
