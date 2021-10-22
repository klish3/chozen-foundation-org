import './assets/css/App.css';
import './assets/css/main.css';
import './assets/css/Nav.css';
import './assets/css/fontawesome-all.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Landing from './views/Landing';
import Story from './views/Story';
import Donations from './views/Donate';
import Champions from './views/Champions';

const App = () => {
  
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/story">
          <Story />
        </Route>
        <Route path="/champions">
          <Champions />
        </Route>
        <Route path="/donate">
          <Donations />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
