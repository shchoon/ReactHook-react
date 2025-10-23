import { useState, useTransition } from "react";

export default function SearchNonBlock({ items }: { items: string[] }) {
  const [results, setResults] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleChange = async (event: any) => {
    const value = event.target.value;
    // await new Promise((reslove) => setTimeout(reslove, 300));
    startTransition(() => {
      setResults((prev) => items.filter((item) => item.includes(value)));
    });
  };

  return (
    <div>
      <div>1, 2, 3 연속으로 입력 후 지우기 → 부드러운 전환</div>
      <h4>Search Query</h4>
      <input placeholder="검색어를 입력하세요" onChange={handleChange} />
      {!isPending ? (
        <ul>
          {results.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
