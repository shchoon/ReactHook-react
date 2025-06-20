export type Todos = { id: number; text: string; completed: boolean }[];

export function createTodos() {
  const todos = [];
  for (let i = 0; i < 20; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
}

export function filterTodos(todos: Todos, tab: string): Todos {
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // 매우 느린 코드를 구현하기 위해 500ms 동안 아무것도 하지 않음.
  }

  return todos.filter((todo: any) => {
    if (tab === "all") {
      return true;
    } else if (tab === "active") {
      return !todo.completed;
    } else {
      return todo.completed;
    }
  });
}
