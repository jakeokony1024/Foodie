import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';

// Import root app
import App from './containers/App';


import configureStore from './configureStore';

import {BrowserRouter} from "react-router-dom";


// Create redux store with history
const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    MOUNT_NODE,
);
