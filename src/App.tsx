import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import Landing from './views/Landing';

import Donations from './views/Donate';

import Home from './views/Home';
import TopNav from './shared/component/TopNav';
import Footer from './components/Footer';
import About from './views/About';
import HowToHelp from './views/HowToHelp';


const App = () => {

  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <div className="container w-screen text-xl text-gray-800 leading-normal">
          <Route path="/about">
            <About />
          </Route>
          <Route path="/donate">
            <Donations />
          </Route>
          <Route path="/how-to-help">
            <HowToHelp />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
