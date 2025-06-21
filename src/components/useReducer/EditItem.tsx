import { useState } from "react";
import { Task } from "./UseReducerOfArray";

type Props = {
  task: Task;
  deleteTask: (id: number) => void;
  editTask: (id: number, text: string) => void;
};

export default function EditItem({ task, deleteTask, editTask }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const [isClickedEdit, setIsClickedEdit] = useState(false);
  const [editText, setEditText] = useState(task.text);

  return (
    <div className="Input_box">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }}
        />
        {task.text}
      </label>
      {isClickedEdit ? (
        <div className="Input_box">
          <input
            placeholder={task.text}
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              editTask(task.id, editText);
              setIsClickedEdit(false);
            }}
          >
            save
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsClickedEdit(true);
          }}
        >
          Edit
        </button>
      )}

      <button
        onClick={() => {
          if (isChecked) {
            deleteTask(task.id);
            setIsChecked(false);
          }
        }}
      >
        Delete
      </button>
    </div>
  );
}
