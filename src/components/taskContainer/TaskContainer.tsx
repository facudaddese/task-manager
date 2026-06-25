import { useReducer } from "react";
import { useInput } from "../../hooks/useInput";
import Button from "../button/Button";
import Input from "../input/Input";
import "./TaskContainer.css";
import { useTasks } from "../../hooks/useTasks";

const TaskContainer = () => {
  const { input, handleInput } = useInput();
  const { initialState, reducer } = useTasks();
  const { state, dispatch } = useReducer(reducer, initialState);

  return (
    <main className="">
      <h1 className="pt-5 pb-10 text-3xl">TO DO LIST</h1>
      <div className="flex gap-4">
        <Input input={input} handleInput={handleInput} />
        <Button label="Add task" handle={() => dispatch({ type: "addTask" })} />
      </div>
      <div>{/* <Task /> */}</div>
    </main>
  );
};

export default TaskContainer;
