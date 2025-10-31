import { useState } from "react";
import { createTodos } from "../../utils";
import { filterTodos } from "../../utils";

type Props = {
  todos: { id: number; text: string; completed: boolean }[];
  theme: boolean;
  tab: string;
};

const todo = createTodos();

function TodoList({ todos, theme, tab }: Props) {
  console.log("todoList");
  const visibleTodos = filterTodos(todos, tab);

  return (
    <>
      <h4>TodoList Component</h4>
      <p>
        theme가 변경되고 todoList가 리렌더링 될 때,
        <br />
        todo를 필터링하는 filterTodo 함수가 매번 실행되어 불필요한 CPU 소모
      </p>
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
    </>
  );
}

export default function NoneUseMemo() {
  const [tab, setTab] = useState<"all" | "active" | "completed">("all");
  const [isDark, setIsDark] = useState(false);

  const onChangeTab = (status: "all" | "active" | "completed") => () => {
    setTab(status);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex" }}>
        <button onClick={onChangeTab("all")}>all</button>
        <button onClick={onChangeTab("active")}>Active</button>
        <button onClick={onChangeTab("completed")}>Completed</button>
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
      <img
        style={{ width: "30px", padding: "10px 0" }}
        src="/down-arrow.png"
        alt="down"
      />
      <p>props: theme state</p>

      <img
        style={{ width: "30px", padding: "10px 0" }}
        src="/down-arrow.png"
        alt="down"
      />
      <TodoList tab={tab} todos={todo} theme={isDark} />
    </div>
  );
}
