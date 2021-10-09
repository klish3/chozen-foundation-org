import './assets/css/App.css';
import './assets/css/main.css';
import './assets/css/Nav.css';
import './assets/css/fontawesome-all.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Landing from './views/Landing';
import About from './views/About';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
