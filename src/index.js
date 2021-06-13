import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// ⬇ React/Redux functionality:
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//#endregion ⬆⬆ Document setup above. 

// ⬇ Reducers:
const feedbackList = (state = [], action) => {
    switch (action.type) {
      case 'ADD_FEELING':
        return [...state, action.payload];
      case 'ADD_UNDERSTANDING':
        return [...state, action.payload];
      case 'ADD_SUPPORT':
        return [...state, action.payload];
      case 'ADD_COMMENT':
        return [...state, action.payload];
      case 'EMPTY_LIST' :
        return [];
      default:
        return state;
    } // End switch
  }



// ⬇ Store:
const store = createStore(
    combineReducers({
      feedbackList
    }), applyMiddleware(logger)
  );

ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
