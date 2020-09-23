import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/form.js";
import showResults from "./components/showResults";
const rootEl = document.getElementById("root");
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App onSubmit={showResults} />
            {/* <Values form="wizard" /> */}
        </div>
    </Provider>,
    rootEl
);
