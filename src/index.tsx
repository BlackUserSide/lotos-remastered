import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./main.sass";
import { rootReducer } from "./redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
//test
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
