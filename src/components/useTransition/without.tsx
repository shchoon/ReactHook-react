import { useState } from "react";

export default function Without() {
  const [items, setItems] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);

  const fetchData = async () => {
    setIsPending(true);
    // await new Promise((reslove) => setTimeout(reslove, 2000));
    // let i = 0;
    // let arr = [];
    // while (i < 50000) {
    //   arr.push(i);
    //   i++;
    // }
    // setItems(arr);
    await new Promise((resolve) =>
      setTimeout(() => {
        setIsPending(false);
      }, 2000)
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <input placeholder="UI 반응성 테스트" />
      <button onClick={fetchData}>click</button>
      {isPending && <div>loading...</div>}
      {/* {items &&
        items.map((item: any, i: number) => {
          return <span key={i}>{item}</span>;
        })} */}
    </div>
  );
}
