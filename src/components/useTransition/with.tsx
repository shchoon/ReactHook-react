import { useState, useTransition } from "react";

export default function With() {
  const [items, setItems] = useState<any>(null);
  const [isPending, startTransition] = useTransition();

  const fetchData = () => {
    startTransition(async () => {
      await new Promise((reslove) => setTimeout(reslove, 2000));
      let i = 0;
      let arr = [];
      while (i < 50000) {
        arr.push(i);
        i++;
      }
      setItems(arr);
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <input placeholder="UI 반응성 테스트" />
      <button onClick={fetchData}>click</button>
      {isPending && <div>loading...</div>}
      {items &&
        items.map((item: any, i: number) => {
          return <span key={i}>{item}</span>;
        })}
    </div>
  );
}
