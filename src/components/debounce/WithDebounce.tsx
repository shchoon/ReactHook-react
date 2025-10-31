import { useCallback, useState } from "react";
import { useDebounceForSearch } from "../../hook/useDebounceForSearch";
import { searchQueryCache } from "../../cache/searchQueryCache";

export default function WithDebounce() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string[] | string | null>(null);
  const cacheRef = searchQueryCache;

  const searchQuery = useCallback(
    async (query: string, signal: AbortSignal) => {
      // 검색어가 없으면 실행 X
      //   if (!query.trim()) {
      //     return;
      //   }

      //   검색한 기록이 있으면 비동기 작업 없이 cache를 통해 결과 바로 return
      if (cacheRef.has(query)) {
        const cacheData = cacheRef.get(query)!;
        setResult(cacheData);
        return;
      }
      try {
        const res = await fetch(
          `https://random-words-api.kushcreates.com/api?firstletter=${query}`,
          { signal }
        );
        const data: unknown = await res.json();
        let wordsList: string[] | string | null;
        if (Array.isArray(data)) {
          wordsList = data.slice(0, 20).map((word) => word.word);
        } else {
          wordsList = "검색 결과가 없습니다";
        }
        setResult(wordsList);
        // 검색결과 caching
        cacheRef.set(query, wordsList);
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
    <div style={{ width: "50%" }}>
      <h2>Debounce</h2>
      <label>search: </label>
      <input
        placeholder="알파벳을 입력해주세요"
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
