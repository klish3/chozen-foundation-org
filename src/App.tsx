import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import Landing from './views/Landing';

import Donations from './views/Donate';

import Home from './views/Home';
import Footer from './components/Footer';
import About from './views/About';
import HowToHelp from './views/HowToHelp';
import NewNav from './shared/component/NewNav';
import OurBoard from './views/OurBoard';
import { Initiatives } from './views/Initiatives';


const App = () => {

  return (
    <Router>
      {/* <TopNav /> */}
      <NewNav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <div className="container w-screen text-gray-800 leading-normal">
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/donate">
            <Donations />
          </Route>
          <Route path="/how-to-help">
            <HowToHelp />
          </Route>
          <Route path="/our-initiatives">
            <Initiatives />
          </Route>
          <Route path="/our-board">
            <OurBoard />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
