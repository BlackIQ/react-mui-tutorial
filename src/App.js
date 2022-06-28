import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Create, Home } from '@mui/icons-material';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route exact path={'/create'}>
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
