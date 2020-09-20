import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MainRouter from './router';
import initStore, { sagaMiddleware } from './store/configureStore';
import rootSaga from './saga';
import './reset.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

export const store = initStore();

sagaMiddleware.run(rootSaga);

const app = (
  <Provider store={store} >
    <MainRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();