import { useEffect, useRef, useState } from "react";
import ResultByDebounce from "./ResultByDebounce";
import useDebounce from "../../../hook/useDeounce";
import { fetchSearchedQuery } from "../utils/fetchQuery";

const cache = new Map<string, string[] | null>();

export default function SearchQueryByDebounce() {
  const [query, setQuery] = useState("");
  // const { data, isLoading } = useSearchQuery(query);
  const [data, setData] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 500);
  console.log(debouncedQuery);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (debouncedQuery.trim()) {
      setIsLoading(true);

      if (cache.has(debouncedQuery)) {
        setData(cache.get(debouncedQuery)!); // cache.get은 string[] | null로 확정
        setIsLoading(false);
        return;
      }

      const search = async () => {
        try {
          const data = await fetchSearchedQuery(debouncedQuery, signal);
          cache.set(debouncedQuery, data);
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

    // return () => {
    //   // controller 제거
    //   controller.abort();
    // };
  }, [debouncedQuery]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>Debounce</h2>

      <label>
        search:{" "}
        <input
          placeholder="검색어를 입력해주세요"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsLoading(true);
          }}
        />
      </label>
      {debouncedQuery.trim() && (
        <ResultByDebounce
          // query={debouncedQuery}
          isLoading={isLoading}
          data={data}
        />
      )}
    </div>
  );
}
