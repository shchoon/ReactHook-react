import { Status } from "./HardUseContext";

type Props = {
  otherStatus: Status[];
  handleChangeStatus: (id: number, title: Status) => void;
  id: number;
};

export default function Toggle({ otherStatus, handleChangeStatus, id }: Props) {
  return (
    <div
      style={{
        border: "1px solid yellow",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {otherStatus.map((status) => {
        return (
          <div style={{ display: "flex" }}>
            move to:
            <button
              key={status}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleChangeStatus(id, status);
              }}
            >
              {status}
            </button>
          </div>
        );
      })}
    </div>
  );
}
