import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../_reducers/_index';

// Persist
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

// import devToolsEnhancer from 'remote-redux-devtools';
// redux thunk fro asynchronous actions

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    reducers,
    // nil
    {},
    compose(
      applyMiddleware(thunk),
      autoRehydrate(), // store enhancer
      composeEnhancers(applyMiddleware(...middleware))
    )
);

persistStore(store, { storage: AsyncStorage, whitelist: ['itemsInCart'] });

export default store;