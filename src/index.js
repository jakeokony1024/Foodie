import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';
import history from './utils/history';// Import root app
import App from './containers/App';


import configureStore from './configureStore';

import { BrowserRouter as Router } from 'react-router-dom'
import {ConnectedRouter} from "connected-react-router";


// Create redux store with history
const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    MOUNT_NODE,
);
