import { useState, useMemo } from "react";
import { createTodos } from "../../utils";
import { filterTodos } from "../../utils";

type Props = {
  todos: { id: number; text: string; completed: boolean }[];
  theme: boolean;
  tab: string;
};

const todo = createTodos();

function TodoList({ todos, theme, tab }: Props) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

  return (
    <ul style={{ backgroundColor: `${theme ? "black" : "white"}` }}>
      {visibleTodos.map((todo) => {
        return (
          <li
            style={{
              textDecoration: `${todo.completed && "line-through"}`,
              color: `${theme ? "white" : "black"}`,
            }}
          >
            {todo.text}
          </li>
        );
      })}
    </ul>
  );
}

export default function UseMemoCom() {
  const [tab, setTab] = useState<"all" | "active" | "completed">("all");
  const [isDark, setIsDark] = useState(false);

  const onChangeTab = (status: "all" | "active" | "completed") => {
    setTab(status);
  };

  return (
    <div>
      <h2>useMemo 미적용</h2>
      <div style={{ display: "flex" }}>
        <button onClick={() => onChangeTab("all")}>all</button>
        <button onClick={() => onChangeTab("active")}>Active</button>
        <button onClick={() => onChangeTab("completed")}>Completed</button>
      </div>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => {
            setIsDark(e.target.checked);
          }}
        />
        Dark Mode
      </label>
      <TodoList tab={tab} todos={todo} theme={isDark} />
    </div>
  );
}
