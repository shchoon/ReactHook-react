import { useReducer, useState } from "react";
import EditItem from "./EditItem";

export type Task = {
  id: number;
  text: string;
  done: boolean;
};
type ActionTest = {
  type: "add" | "delete" | "edit";
  id: number;
  text?: string;
};

type Action =
  | { type: "add"; id: number; text: string }
  | { type: "delete"; id: number }
  | { type: "edit"; id: number; text: string };

const initialTasks: Task[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

let nextId = 2;

function taskReducer(tasks: Task[], action: Action) {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "delete": {
      const updateTasks = tasks.filter((task) => task.id !== action.id);
      return [...updateTasks];
    }
    case "edit": {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            text: action.text,
          };
        } else {
          return task;
        }
      });
    }
    default:
      throw new Error("Unknown action: " + (action as any).type);
  }
}

export default function UseReducerOfArray() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [text, setText] = useState("");

  const addTask = (text: string) => {
    dispatch({
      type: "add",
      id: nextId + 1,
      text: text,
    });
  };

  const deleteTask = (id: number) => {
    dispatch({
      type: "delete",
      id: id,
    });
  };

  const editTask = (id: number, text: string) => {
    dispatch({
      type: "edit",
      id: id,
      text: text,
    });
  };
  return (
    <div>
      <h2>Tasks</h2>
      <div className="Input_box">
        <input
          placeholder="Add task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={() => addTask(text)}>Add</button>
      </div>
      {tasks.map((task) => {
        return (
          <EditItem task={task} deleteTask={deleteTask} editTask={editTask} />
        );
      })}
    </div>
  );
}
