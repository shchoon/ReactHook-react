import { use } from "react";
import getSearchedQuery from "./utils/getSearchedQuery";

export default function ResultByQuery({
  query,
  type,
}: {
  query: string;
  type: "debounce" | "deferred";
}) {
  // 검색어가 빈 문자열인 경우
  if (!query.trim()) {
    return null;
  }

  const result: string[] | null = use(getSearchedQuery(query, type));

  // 검색 결과가 없는 경우
  if (!result) {
    return <div>검색 결과가 없습니다.</div>;
  }
  // 검색 결과가 있는 경우
  else {
    return (
      <ul>
        {result.map((word) => (
          <li>{word}</li>
        ))}
      </ul>
    );
  }
}
