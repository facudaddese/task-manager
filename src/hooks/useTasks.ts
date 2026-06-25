import type { State } from "../types/task";
import type { Task } from "../types/task";

const initialState: State = {
  tasks: [],
};

type ActionType =
  | { type: "addTask"; newTask: Task }
  | { type: "deleteTask" }
  | { type: "editTask" }
  | { type: "clearTasks" };

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "addTask":
      return { ...state, tasks: [...state.tasks, action.newTask] };
    case "deleteTask":
      return;
    case "editTask":
      return;
    case "clearTasks":
      return { ...state, tasks: [] };
    default:
      return state;
  }
};

export const useTasks = () => {
  return { initialState, reducer };
};
