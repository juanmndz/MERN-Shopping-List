import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import ShoppingList from '../ShoppingList';
import ItemModal from '../ItemModal';

import store from '../../store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
    </div>
  </Provider>
);

export default App;
