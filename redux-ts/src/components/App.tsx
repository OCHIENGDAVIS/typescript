import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';

import '../App.css';
import ReposistoriesList from './ReposistoriesList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <h1>Search for a package</h1>
          <ReposistoriesList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
