import { useDeferredValue, useEffect, useState } from "react";
import ResultByDebounce from "./debounce/ResultByDebounce";
import { fetchSearchedQuery } from "./utils/fetchQuery";

const cache = new Map<string, string[] | null>();

export default function SearchQueryByDeferredValue() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<string[] | null>(null);
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (deferredQuery.trim()) {
      setIsLoading(true);

      if (cache.has(deferredQuery)) {
        setData(cache.get(deferredQuery)!); // cache.get은 string[] | null로 확정
        setIsLoading(false);
        return;
      }

      const search = async () => {
        try {
          const data = await fetchSearchedQuery(deferredQuery, signal);
          cache.set(deferredQuery, data);
          setData(data);
        } catch (err) {
          alert(err);
          setData(null);
        } finally {
          setIsLoading(false);
        }
      };

      search();
    }

    return () => {
      // controller 제거
      controller.abort();
    };
  }, [deferredQuery]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>DeferredValue</h2>

      <label>
        search:{" "}
        <input
          placeholder="검색어를 입력해주세요"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </label>
      {deferredQuery.trim() && (
        <ResultByDebounce isLoading={isLoading} data={data} />
      )}
    </div>
  );
}
