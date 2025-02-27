import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { injectStoreToServer } from './actions/server';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';

const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, epicMiddleware)),
);

sagaMiddleware.run(rootSaga);
epicMiddleware.run(rootEpic);

injectStoreToServer(store);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
