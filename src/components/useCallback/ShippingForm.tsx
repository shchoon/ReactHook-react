import { useState, memo } from "react";

type Props = {
  onSubmit: (orderDetail: any) => void;
};

export default memo(function ShippingForm({ onSubmit }: Props) {
  const [count, setCount] = useState(1);
  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");
  let startTime = performance.now();
  while (performance.now() - startTime < 1000) {
    // 매우 느린 코드를 재현하기 위해 500ms동안 아무것도 하지 않습니다
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <label style={{ display: "flex", gap: 5 }}>
        Number Of Items:
        <button
          type="button"
          style={{ backgroundColor: "gray" }}
          onClick={() => {
            if (count === 1) {
              return;
            }
            setCount(count - 1);
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          type="button"
          style={{ backgroundColor: "gray" }}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </label>
      <label>
        Street:
        <input placeholder="street" />
      </label>
      <label>
        City:
        <input placeholder="city" />
      </label>
      <label>
        Postal Code:
        <input placeholder="Postal Code" />
      </label>
      <button type="submit">Order</button>
    </form>
  );
});
