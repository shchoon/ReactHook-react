import OverCpu from "../../OverCpu";

export default function Chart({ chart }: { chart: number[] }) {
  OverCpu(500);
  return (
    <>
      <div
        style={{ width: "10px", height: `${chart[0]}px`, background: "red" }}
      />
      <div
        style={{ width: "10px", height: `${chart[1]}px`, background: "blue" }}
      />
      <div
        style={{ width: "10px", height: `${chart[2]}px`, background: "red" }}
      />
      <div
        style={{ width: "10px", height: `${chart[3]}px`, background: "blue" }}
      />
      <div
        style={{ width: "10px", height: `${chart[4]}px`, background: "red" }}
      />
      <div
        style={{ width: "10px", height: `${chart[5]}px`, background: "blue" }}
      />
    </>
  );
}
