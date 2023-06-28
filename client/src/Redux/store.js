import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;