export default function ResultByDebounce({
  isLoading,
  // query,
  data,
}: {
  isLoading: boolean;
  // query: string;
  data: string[] | null;
}) {
  if (!isLoading && !data) {
    return (
      <div style={{ opacity: isLoading ? 0.5 : 1 }}>검색 결과가 없습니다.</div>
    );
  }

  if (data) {
    return (
      <ul style={{ opacity: isLoading ? 0.5 : 1 }}>
        {data.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    );
  }

  return null;
}
