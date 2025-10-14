import { Suspense, useDeferredValue, useState } from "react";
import SearchResults from "./searchResults";

export default function With() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    <div>
      <label>
        search album : {` `}
        <input
          placeholder="검색어를 입력해주세요"
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <Suspense fallback={<h4>Loading...</h4>}>
        <div
          style={{
            opacity: isStale ? 0.5 : 1,
            transition: isStale
              ? "opacity 0.2s 0.2s linear"
              : "opacity 0s 0s linear",
          }}
        >
          <SearchResults query={deferredQuery} type="with" />
        </div>
      </Suspense>
    </div>
  );
}
