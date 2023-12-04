import {
  GET_TODOS_FAIELD,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constents/todosConstants";

//states
const initailTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todosrReducer = (state = initailTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
        error: null,
      };
    case GET_TODOS_FAIELD:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todosrReducer;
