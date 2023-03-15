import { legacy_createStore } from "redux";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const MULTIPLIER = "MULTIPLIER";
export const DIVIDER = "DIVIDER";
export const CHANGE_NUMBER = "CHANGE_NUMBER";

const inicialState = {
  count: 0,
  number:0
};
// (estado, accion)
const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + state.number
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - state.number,
      };
    case MULTIPLIER:
      return {
        ...state,
        count: state.count * state.number,
      };
    case DIVIDER:
      return {
        ...state,
        count: state.count / state.number,
      };
    case CHANGE_NUMBER:
      return {
        ...state,
        number: action.payload
      }

    default:
      return state;
  }
};

export const store = legacy_createStore(reducer);
