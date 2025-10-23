import { useEffect, useRef, useState } from "react";
import useDebounce from "./useDeounce";

const fetchSearchedQuery = async (
  query: string,
  signal: AbortSignal
): Promise<string[] | null> => {
  const res = await fetch(
    `https://random-words-api.kushcreates.com/api?firstletter=${query}`,
    { signal }
  );
  const data: any[] | null = await res.json();

  let result: string[] | null;
  if (Array.isArray(data)) {
    const words = data.slice(0, 20).map((word) => word.word);
    result = words;
  } else {
    result = null;
  }

  return result;
};

export default function useSearchQuery(query: string) {
  console.log("first");
  // 검색어가 없으면 기본 데이터, 로딩 return

  const [data, setData] = useState<string[] | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

  //   검색 결과 재사용을 위한 cache
  const cache = useRef(new Map<string, string[] | null>());

  //   useEffect(() => {
  //     if (query.trim()) {
  //       setIsFetching(true);
  //     } else {
  //       setIsFetching(false);
  //       setData(null);
  //     }
  //   }, [query]);

  useEffect(() => {
    console.log("effect");
    const controller = new AbortController();
    const signal = controller.signal;

    const search = async () => {
      // 검색어가 빈 문자열인 경우
      if (!debouncedQuery.trim()) {
        setData(null);
        // setIsFetching(false);
        return;
      }

      // 검색 결과가 캐시되어 있는 경우
      if (cache.current.has(debouncedQuery)) {
        setData(cache.current.get(debouncedQuery)!);
        setIsFetching(false);
        return;
      }

      //   검색어가 빈 문자열이 아니고 검색 결과도 캐시되어 있지 않은 경우
      setIsFetching(true);

      try {
        console.log("fetching");
        const result = await fetchSearchedQuery(debouncedQuery, signal);
        cache.current.set(debouncedQuery, result);
        setData(result);
      } catch (err: any) {
        setData(null);
        if (err.name === "AbortError") {
          // alert("AbortError");
          return;
        }
      } finally {
        setIsFetching(false);
      }
    };

    search();

    return () => {
      controller.abort();
    };
  }, [debouncedQuery]);

  const isLoading = isFetching || query !== debouncedQuery;

  return { data, isLoading };
}
