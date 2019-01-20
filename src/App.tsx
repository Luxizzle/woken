import React from 'react';
import {
  Router,
  createHistory,
  createMemorySource,
  LocationProvider,
  Link,
} from '@reach/router';
import Layout from './components/Layout';
import MainMenu from './screens/MainMenu';
import HookTests from './screens/HookTests';

// We fake history, so we dont alter the actual location
const history = createHistory(createMemorySource('/main-manu'));

const App = () => {
  return (
    <LocationProvider history={history}>
      <Layout>
        <div>
          <Link to="/">Home</Link>
          <Link to="/debug/hook-tests">Hook Tests</Link>
        </div>
        <Router>
          <MainMenu default path="/" />
          <HookTests path="/debug/hook-tests" />
        </Router>
      </Layout>
    </LocationProvider>
  );
};

export default App;
