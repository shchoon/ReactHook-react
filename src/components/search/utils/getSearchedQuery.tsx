const cacheSearchedQueryData: {
  debounce: Map<string, Promise<string[] | null>>;
  deferred: Map<string, Promise<string[] | null>>;
  transition: Map<string, Promise<string[] | null>>;
} = {
  debounce: new Map(),
  deferred: new Map(),
  transition: new Map(),
};

export default function getSearchedQuery(
  query: string,
  type: "debounce" | "deferred" | "transition"
): Promise<string[] | null> {
  if (!cacheSearchedQueryData[type].has(query)) {
    cacheSearchedQueryData[type].set(query, fetchSearchedQuery(query));
  }
  return cacheSearchedQueryData[type].get(query)!;
}

const fetchSearchedQuery = async (query: string): Promise<string[] | null> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  try {
    const res = await fetch(
      `https://random-words-api.kushcreates.com/api?firstletter=${query}`
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
  } catch (err) {
    throw new Error("에러 발생");
  }
};
