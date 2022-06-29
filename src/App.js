import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Create from './components/create';

function App() {
  return (
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
  );
}

export default App;
