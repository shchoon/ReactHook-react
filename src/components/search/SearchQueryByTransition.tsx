import { useState, useTransition } from "react";
import getSearchedQuery from "./utils/getSearchedQuery";

export default function SearchQueryByTransition() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string[] | null>();

  const [isPending, startTransition] = useTransition();

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(async () => {
      const words = await getSearchedQuery(value, "transition");
      setResult(words);
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>useTransition</h2>

      <label>
        search:{" "}
        <input
          placeholder="검색어를 입력해주세요"
          value={query}
          onChange={(e) => {
            handleSearchQuery(e);
          }}
        />
      </label>
      {isPending && <strong>loading...</strong>}
      {!isPending && !result && query && <div>검색 결과가 없습니다.</div>}
      {!isPending && result && (
        <ul>
          {result.map((word) => (
            <li>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
