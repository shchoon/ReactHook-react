export const fetchSearchedQuery = async (
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
