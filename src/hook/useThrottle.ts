import { useCallback, useRef } from "react";

export const useThrottle = (
  callback: (...args: any) => void,
  duration: number
) => {
  // 리렌더링 시에도 값을 유지하기 위해 useRef 사용
  const isThrottled = useRef(false);

  const throttledFunc = useCallback(
    (...args: any) => {
      // throttle이 실행중이면 return
      if (isThrottled.current) {
        return;
      }

      // 전달받은 callback 함수 실행
      callback(...args);

      // throttle이 실행되었으므로 true로 변경
      isThrottled.current = true;

      // duration이 지난 후 throttle 초기화
      setTimeout(() => {
        isThrottled.current = false;
      }, duration);
    },
    [callback, duration]
  );

  return throttledFunc;
};
