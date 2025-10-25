import { useState, useCallback } from "react";
import { Toast } from "../Toast";

export default function WithoutThrottle() {
  const [toasts, setToasts] = useState<
    {
      id: number;
      message: string;
    }[]
  >([]);

  const addToast = () => {
    const item = {
      id: Date.now(),
      message: `토스트 추가`,
    };
    setToasts((prev) => [...prev, item]);
  };

  const removeToast = useCallback((id: number) => {
    // 최신 prev 참조 방식
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <>
      <button onClick={addToast}>non-throttle</button>
      <div
        style={{
          position: "fixed",
          top: "200px",
          left: "20%",
          transform: "translateX(-20%)",
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
