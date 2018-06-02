import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../_reducers/_index';

// Persist
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

// import devToolsEnhancer from 'remote-redux-devtools';
// redux thunk fro asynchronous actions

const store = createStore (
    // reducers,
    // nil
    {},
    compose(
      applyMiddleware(thunk),
      // autoRehydrate(), // store enhancer
    )
);

persistStore(store, { storage: AsyncStorage, whitelist: ['itemsInCart'] });

export default store;