import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware, compose} from 'redux';
// import { Provider } from 'react-redux';
// import reduxThunk from 'redux-thunk';


import App from './App';
// import reducers from './reducers';
//this line of code for redux extension!!
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(reduxThunk))
// );

ReactDOM.render(
  // <Provider>
    <App />,
  // </Provider>,
  document.querySelector('#root')
);