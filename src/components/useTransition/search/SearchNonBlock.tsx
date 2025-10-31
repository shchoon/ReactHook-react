import { useState, useTransition } from "react";
import ResultBySearch from "./ResultBySearch";

export default function SearchNonBlock({ items }: { items: string[] }) {
  const [results, setResults] = useState(items);
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");

  const handleChange = async (event: any) => {
    const value = event.target.value;
    setQuery(value);
    startTransition(async () => {
      // await new Promise((r) => setTimeout(r, 1000));
      setResults((prev) => items.filter((item) => item.includes(value)));
    });
  };

  return (
    <div>
      <div>1, 2, 3 연속으로 입력 후 지우기 → 부드러운 전환</div>
      <h4>Search Query</h4>
      <input
        placeholder="검색어를 입력하세요"
        value={query}
        onChange={handleChange}
      />
      {results && (
        <div style={{ opacity: isPending ? 0.5 : 1 }}>
          <ResultBySearch items={results} />
        </div>
      )}
    </div>
  );
}
