import { useDeferredValue, useEffect, useState } from "react";
import useDebounce from "../hook/useDeounce";

function RenderResult({
  loading,
  result,
}: {
  loading: boolean;
  result: any[];
}) {
  if (loading) {
    return <div>검색중...</div>;
  }

  if (!result) {
    return <div>검색 결과가 없습니다</div>;
  }

  return (
    <ul>
      {result.map((data) => (
        <li>{data.word}</li>
      ))}
    </ul>
  );
}

export default function Debounce() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any[]>([]);

  //   const deferredQuery = useDeferredValue(query);
  const debouncedSearchQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (query.trim()) {
      setLoading(true);
    }
  }, [query]);

  useEffect(() => {
    // console.log("change debounced query");

    if (debouncedSearchQuery) {
      fetch(
        `https://random-words-api.kushcreates.com/api?firstletter=${debouncedSearchQuery}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setResult(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [debouncedSearchQuery]);

  return (
    <>
      <h2>Debounce</h2>

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
      {query.trim() && <RenderResult loading={loading} result={result} />}
    </>
  );
}
