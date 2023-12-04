import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosActions";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h2>Todos App</h2>
      {isLoading && <h3>Loading.....</h3>}
      {error && <h3>{error.message}</h3>}
    </div>
  );
};

export default Todos;
