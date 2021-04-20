import { createStore, applyMiddleware, compose } from 'redux';
import recipesApiMiddleware from 'src/middlewares/recipesApi';
import loginMiddleware from 'src/middlewares/log';

import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // on branche notre middleware sur le store
  applyMiddleware(recipesApiMiddleware, loginMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
