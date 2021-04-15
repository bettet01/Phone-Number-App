import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/rootReducer";
import {CssBaseline} from "@material-ui/core";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <CssBaseline />
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
