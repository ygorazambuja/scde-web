import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import alunosReducer from "./reducers/alunos";
const reducers = combineReducers({
  alunos: alunosReducer
});

const storeConfig = () => {
  return createStore(reducers, compose(applyMiddleware(thunk)));
};

export default storeConfig;
