import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar'
import Footer from './Components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Home} from './Home'
import {Expirience} from './Expirience'
import {Works} from './Works'
import {Contacts} from './Contacts'

function App() {
  return (
   <>
      <Router>
      <NaviBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/expirience" component={Expirience} />
        <Route path="/works" component={Works} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
      </Router>
      <Footer />
   </>
  );
}

export default App;
