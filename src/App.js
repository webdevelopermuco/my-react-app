import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route exact path={`${process.env.PUBLIC_URL}/about`}component={About} />
            <Route exact path={`${process.env.PUBLIC_URL}/contact`}component={Contact} />
            <Route exact component={NoMatch} />
          </Switch>
        </Router>
      </Layout>

    </React.Fragment>
  );
}

export default App;
