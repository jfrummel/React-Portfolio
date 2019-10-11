import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from './components/About';
import Admin from './components/Admin';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
