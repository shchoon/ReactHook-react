import { Suspense, useState } from "react";
import SearchResults from "./searchResults";

export default function Without() {
  const [query, setQuery] = useState("");

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
        <SearchResults query={query} type="without" />
      </Suspense>
    </div>
  );
}
