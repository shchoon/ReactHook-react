import { useState } from "react";

export default function SearchBlock({ items }: { items: string[] }) {
  const [results, setResults] = useState(items);
  const [loading, setLoading] = useState(false);

  const handleChange = async (event: any) => {
    const value = event.target.value;
    setLoading(true);
    // await new Promise((reslove) => setTimeout(reslove, 300));
    setResults((prev) => items.filter((item) => item.includes(value)));
    setLoading(false);
  };

  return (
    <div>
      <div>1, 2, 3 연속으로 입력 후 지우기 → 버벅거리는 현상 발생</div>
      <h4>Search Query</h4>
      <input placeholder="검색어를 입력하세요" onChange={handleChange} />
      {!loading ? (
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
