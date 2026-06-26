import type { TaskProps } from "../../types/task";
import Button from "../button/Button";

const Task = ({ tasks, dispatch }: TaskProps) => {
  return (
    <ul className="mt-4 px-4 max-w-screen">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between py-3 px-2 mb-4 border border-gray-300 rounded-[10px] items-center shadow-inner"
        >
          <div className="flex gap-4">
            <input type="checkbox" className="cursor-pointer" />
            <li className="w-100">{task.name}</li>
          </div>
          <div className="flex gap-4 w-full">
            <Button
              label="Edit task"
              handle={() =>
                dispatch({
                  type: "editTask",
                  payload: { id: task.id, name: task.name },
                })
              }
            />
            <Button
              label="Delete task"
              handle={() =>
                dispatch({
                  type: "deleteTask",
                  payload: task.id,
                })
              }
            />
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Task;
