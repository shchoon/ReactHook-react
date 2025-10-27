import { useCallback, useRef, useState } from "react";

export const useDebounceForSearch = (
  callback: (...args: any) => Promise<void>,
  delay: number
) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const [isLoading, setLoading] = useState(false);
  //   const pendingRef = useRef(false);

  const debouncedFunc = useCallback(
    (...args: any) => {
      // abortController가 있으면 즉시 제거
      abortRef.current?.abort();
      // ref가 timer를 가지고 있으면 제거
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      setLoading(true);
      //   pendingRef.current = true;
      //   ref에 timer 추가
      timerRef.current = setTimeout(async () => {
        abortRef.current = new AbortController();
        const signal = abortRef.current.signal;
        await callback(...args, signal);
        setLoading(false);
        // pendingRef.current = false;
      }, delay);
    },
    [delay, callback]
  );

  return { debouncedFunc, isLoading };
};
