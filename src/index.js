import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers,  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchSummoner} from './store/sagas/index'
import summonerReducer from './store/reducers/summoner';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    summoner: summonerReducer
})

const store = createStore(rootReducer, composeEnhancers (
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchSummoner);

const app = (
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
