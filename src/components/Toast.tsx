import { useEffect, memo } from "react";

function ToastCom({
  id,
  message,
  isOpen,
  onClose,
  duration,
}: {
  id: number;
  message: string;
  isOpen: boolean;
  onClose: (id: number) => void;
  duration: number;
}) {
  console.log("toast");
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose, isOpen, id]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        style={{
          //   position: "fixed",
          //   top: "100px",
          //   left: "50%",
          //   transform: "translateX(-50%)",
          backgroundColor: "#333",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          fontSize: "14px",
          fontWeight: 500,
          opacity: 1,
          animation: "fadeIn 0.3s ease-out",
          //   zIndex: 9999,
        }}
      >
        {message}

        <style>
          {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
        </style>
      </div>
    </>
  );
}

export const Toast = memo(ToastCom);
