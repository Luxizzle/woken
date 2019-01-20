import React from 'react';
import {
  Router,
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import MainMenu from './screens/MainMenu';
import Layout from './components/Layout';
import { useLocalStorage } from './api/hooks/useLocalStorage';
import useFormInput from './api/hooks/useFormInput';

// We fake history, so we dont alter the actual location
const history = createHistory(createMemorySource('/main-manu'));

const App = () => {
  const [name, setName] = useLocalStorage<string>('user.name');
  const [other, otherHandler] = useFormInput('');

  return (
    <LocationProvider history={history}>
      <Layout>
        <Router>
          <MainMenu default path="/main-menu" />
        </Router>
        <div>
          <p>{name || 'No name set'}</p>
          <input
            value={name || ''}
            onChange={event => setName(event.target.value)}
          />
          <p>{other || 'No other set'}</p>
          <input {...otherHandler} />
        </div>
      </Layout>
    </LocationProvider>
  );
};

export default App;
