import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import Landing from './views/Landing';
import Story from './views/Story';
import Donations from './views/Donate';
import Champions from './views/Champions';
import Work from './views/Work';
import Home from './views/Home';
import TopNav from './shared/component/TopNav';
import Landing from './views/Landing';


const App = () => {

  return (
    <Router>
      <TopNav />

      <Switch>

        <Route exact path="/">
          {/* <Landing /> */}
          <Home />
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
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
