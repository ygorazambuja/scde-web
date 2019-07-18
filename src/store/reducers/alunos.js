import { SET_ALUNOS } from "../actions/actionTypes";

const initialState = {
  alunos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALUNOS:
      return {
        ...state,
        alunos: action.payload
      };
    default:
      return { ...state };
  }
};
export default reducer;
