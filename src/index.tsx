import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import {createStore} from 'redux'
import "./main.sass";
import {rootReducer} from "./redux/rootReducer";
const store = createStore(rootReducer, )
render(
    <Router>
      <App />
    </Router>,
  document.getElementById("root")
);
