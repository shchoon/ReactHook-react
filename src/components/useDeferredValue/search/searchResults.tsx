import { use } from "react";
import { fetchData } from "../fetchData";

export default function SearchResults({
  query,
  type,
}: {
  query: string;
  type: "with" | "without";
}) {
  if (query === "") {
    return null;
  }

  const results = use(fetchData(query, type));

  if (!results.length) {
    return (
      <p>
        no matchs for <i>{query}</i>
      </p>
    );
  }

  return (
    <ul>
      {results.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
}
