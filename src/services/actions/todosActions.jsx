import axios from "axios";
import {
  GET_TODOS_FAIELD,
  GET_TODOS_REQUEST,
} from "../constents/todosConstants";

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  } catch (error) {
    dispatch({ type: GET_TODOS_FAIELD, payload: error.message });
  }
};
