import { useState, useCallback } from "react";
import { Toast } from "../Toast";
import { useThrottle } from "../../hook/useThrottle";

export default function WithThrottle() {
  const [toasts, setToasts] = useState<
    {
      id: number;
      message: string;
    }[]
  >([]);

  const addToast = useCallback(() => {
    const item = {
      id: Date.now(),
      message: `토스트 추가`,
    };
    setToasts((prev) => [...prev, item]);
  }, []);

  const addToastByThrottle = useThrottle(addToast, 2000);

  const removeToast = useCallback((id: number) => {
    // 최신 prev 참조 방식
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <>
      <button onClick={addToastByThrottle}>throttle</button>
      <div
        style={{
          position: "fixed",
          top: "100px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {toasts.map((item) => (
          <Toast
            key={item.id}
            id={item.id}
            isOpen={true}
            message={item.message}
            onClose={removeToast}
            duration={2000}
          />
        ))}
      </div>
    </>
  );
}
