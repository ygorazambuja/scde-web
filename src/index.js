import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

import { Provider } from "react-redux";
import storeConfig from "./store/storeConfig";

const store = storeConfig();

const Redux = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(Redux, document.getElementById("root"));
