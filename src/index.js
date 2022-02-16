import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {persistor, store} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </PersistGate>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

