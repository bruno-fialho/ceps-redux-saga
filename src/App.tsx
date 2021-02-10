import React from 'react';
import { Provider } from 'react-redux';
import Search from './components/Search';
import store from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

export default App;
