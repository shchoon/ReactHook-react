import { useState, createContext } from "react";
import Card from "./Card";

export type Status = "completed" | "todo" | "doing";

export type Task = {
  id: number;
  status: Status;
  text: string;
};

type TaskContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const data: Task[] = [
  { id: 1, status: "completed", text: "Fix bug" },
  { id: 2, status: "todo", text: "Write docs" },
  { id: 3, status: "doing", text: "Build UI" },
  { id: 4, status: "completed", text: "Deploy app" },
  { id: 5, status: "todo", text: "Test API" },
  { id: 6, status: "doing", text: "Design logo" },
];

export const TasksContext = createContext<TaskContextType | null>(null);

export default function HardUseContext() {
  const [tasks, setTasks] = useState(data);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card title="todo" />
        <Card title="doing" />
        <Card title="completed" />
      </div>
    </TasksContext.Provider>
  );
}
