import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { persistor, store } from '../configureStore'
import { PersistGate } from 'redux-persist/integration/react';
import ListUsers from './ListUsers';
import StaticPage from './StaticPage';
// import FormikForm from './form/signupForm';
import '../css/main.scss';

const HelloWorld = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Route path="/" component={StaticPage} exact/>
        {/* <Route path="/signup" component={FormikForm} exact/> */}
      </Router>
    </PersistGate>
  </Provider>
);

export default HelloWorld;