import { legacy_createStore } from "redux";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const MULTIPLIER = "MULTIPLIER";
export const DIVIDER = "DIVIDER";

const inicialState = {
  count: 0,
};
// (estado, accion)
const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 2,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 2,
      };
    case MULTIPLIER:
      return {
        ...state,
        count: state.count * 2,
      };
    case DIVIDER:
      return {
        ...state,
        count: state.count / 2,
      };

    default:
      return state;
  }
};

export const store = legacy_createStore(reducer);