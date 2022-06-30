import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  createTheme,
  ThemeProvider
} from "@mui/material/styles";

import Create from './components/create';
import Home from './components/home';

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
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
