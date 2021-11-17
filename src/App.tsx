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
import TopNav from './shred/component/TopNav';

const App = () => {

  return (
    <Router>
      <TopNav />
      <div className="container w-screen h-screen">
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
