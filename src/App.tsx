import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Search from './components/Search';
import Address from './components/Address';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Search />
      <Address />
    </Provider>
  );
}

export default App;
