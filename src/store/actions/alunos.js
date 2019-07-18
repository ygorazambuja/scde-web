import api from "../../services/api";
import { SET_ALUNOS } from "./actionTypes";

export const fetchAlunos = () => {
  return dispatch => {
    api
      .get("/alunos")
      .then(res => {
        dispatch(setAlunos(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const setAlunos = alunos => {
  return {
    type: SET_ALUNOS,
    payload: alunos
  };
};
