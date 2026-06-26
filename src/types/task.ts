import type { ActionType } from "../hooks/useTasksReducer";

export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export interface State {
  tasks: Task[];
}

export interface Payload {
  id: string;
  name: string;
}

export interface TaskProps {
  tasks: Task[];
  dispatch: React.Dispatch<ActionType>;
}
