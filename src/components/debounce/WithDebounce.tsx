import { useCallback, useState } from "react";
import { useDebounceForSearch } from "../../hook/useDebounceForSearch";

export default function WithDebounce() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string[] | string | null>(null);

  const searchQuery = useCallback(
    async (query: string, signal: AbortSignal) => {
      try {
        const res = await fetch(
          `https://random-words-api.kushcreates.com/api?firstletter=${query}`,
          { signal }
        );
        const data: unknown = await res.json();
        if (Array.isArray(data)) {
          setResult(data.slice(0, 20).map((word) => word.word));
        } else {
          setResult(null);
        }
      } catch (err: any) {
        if (err.name !== "AbortError") alert(err);
        setResult(null);
      } finally {
        if (!query.trim()) {
          setResult(null);
        }
      }
    },
    []
  );

  const { debouncedFunc: searchQueryByDebounce, isLoading } =
    useDebounceForSearch(searchQuery, 1000);

  return (
    <div>
      <h2>Debounce</h2>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          searchQueryByDebounce(e.target.value);
        }}
      />
      <br />
      {query.trim() && result && (
        <RenderList result={result} isLoading={isLoading} />
      )}
    </div>
  );
}

function RenderList({
  result,
  isLoading,
}: {
  result: string[] | string | null;
  isLoading: boolean;
}) {
  return (
    <div style={{ opacity: isLoading ? 0.5 : 1 }}>
      {typeof result === "string" && <span>검색 결과가 없습니다</span>}
      {Array.isArray(result) && (
        <ul>
          {result.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
