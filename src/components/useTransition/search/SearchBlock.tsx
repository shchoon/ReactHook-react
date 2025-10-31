import { useState } from "react";
import ResultBySearch from "./ResultBySearch";

export default function SearchBlock({ items }: { items: string[] }) {
  const [results, setResults] = useState(items);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleChange = async (event: any) => {
    const value = event.target.value;
    setQuery(value);
    setLoading(true);
    // await new Promise((r) => setTimeout(r, 300));
    setResults(items.filter((item) => item.includes(value)));
    setLoading(false);
  };

  return (
    <div>
      <h4>Search Query</h4>
      <div>
        <p>1, 2, 3 연속으로 입력 후 지우기</p>
        <img style={{ width: "20px" }} src="/down-arrow.png" alt="down" />
        startTrasntiion을 적용하지 않아 타이핑과 결과 필터링 작업이 모두 긴급한
        일이라고 판단
        <img style={{ width: "20px" }} src="/down-arrow.png" alt="down" />
        타이핑마다 필터링 작업이 진행되고
      </div>
      <input
        placeholder="검색어를 입력하세요"
        value={query}
        onChange={handleChange}
      />
      {results && (
        <div style={{ opacity: loading ? 0.5 : 1 }}>
          <ResultBySearch items={results} />
        </div>
      )}
    </div>
  );
}
