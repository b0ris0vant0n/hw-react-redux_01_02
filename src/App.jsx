import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppContainer />
      </div>
    </Provider>
  );
}

export default App;
