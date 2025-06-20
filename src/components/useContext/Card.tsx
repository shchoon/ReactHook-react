import { useContext, useState } from "react";
import { Status } from "./HardUseContext";
import { TasksContext } from "./HardUseContext";

type Props = {
  //   tasks: Task[];
  title: "todo" | "doing" | "completed";
  //   handleChangeStatus: (id: number, title: Status) => void;
};

export default function Card({ title }: Props) {
  const context = useContext(TasksContext);

  if (!context) {
    // context가 null일 경우 방어코드 (Provider가 감싸지 않았을 때)
    throw new Error("TasksContext.Provider is missing");
  }

  const { tasks, setTasks } = context;

  const filterTasks = tasks.filter((task) => task.status === title);
  const otherStatus = Array.from(
    new Set(
      tasks.filter((task) => task.status !== title).map((task) => task.status)
    )
  );
  const [toggleId, setToggleId] = useState<number | null>(null);

  const handleChangeStatus = (id: number, title: Status) => {
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: title };
      } else {
        return task;
      }
    });
    setTasks(updateTask);
  };

  return (
    <div>
      <h3>{title}</h3>
      <div style={{ border: "1px solid black", borderRadius: 10, padding: 10 }}>
        <ol>
          {filterTasks.map((task, i) => {
            return (
              <li style={{ display: "flex" }} key={task.id}>
                <div>
                  {i + 1}. {task.text}
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setToggleId(toggleId ? null : task.id);
                  }}
                >
                  🔽
                </div>
                {toggleId === task.id && (
                  <div
                    style={{
                      border: "1px solid yellow",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {otherStatus.map((status) => {
                      return (
                        <button
                          key={status}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleChangeStatus(task.id, status);
                          }}
                        >
                          {status}
                        </button>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
