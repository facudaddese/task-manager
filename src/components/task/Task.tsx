import { useReducer } from "react";
import { useTasks } from "../../hooks/useTasks";

const Task = () => {
  const { initialState, reducer } = useTasks();
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div>Task</div>;
};

export default Task;
