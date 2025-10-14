const albums: string[] = [
  "abandoned hearts",
  "absolution",
  "above the clouds",
  "abstract love",
  "afterglow",
  "all of me",
  "another sky",
  "autumn breeze",
  "blue horizon",
  "back to you",
  "broken silence",
  "beyond the light",
  "burning heart",
  "crystal night",
  "chasing dreams",
  "cold memory",
  "deep ocean",
  "dancing shadows",
  "dreamscape",
  "daybreak",
];

const cache: {
  with: Map<string, Promise<string[]>>;
  without: Map<string, Promise<string[]>>;
} = {
  with: new Map(),
  without: new Map(),
};

export function fetchData(
  query: string,
  type: "with" | "without"
): Promise<string[]> {
  if (!cache[type].has(query)) {
    cache[type].set(query, fetchAndFilter(query));
  }
  return cache[type].get(query)!;
}

async function fetchAndFilter(query: string): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return albums.filter((item) => item.includes(query));
}
