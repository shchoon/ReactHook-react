import { useEffect, useState } from "react";

export default function UseDebounce(value: string, delay: number) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getResult = setTimeout(() => {
      setSearchValue(value);
    }, delay);

    return () => {
      clearTimeout(getResult);
    };
  }, [value, delay]);

  return searchValue;
}
