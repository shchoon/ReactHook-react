import { useState } from "react";
import UseCallbackProductPage from "./UseCallbackProductPage";

export default function UseCallbackCom() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <h4>Theme Component</h4>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => {
            setIsDark(e.target.checked);
          }}
        />
        Dark Mode
      </label>
      <br />
      <img
        style={{ width: "30px", padding: "10px 0" }}
        src="/down-arrow.png"
        alt="down"
      />
      <p>props: theme state</p>
      <img
        style={{ width: "30px", padding: "10px 0" }}
        src="/down-arrow.png"
        alt="down"
      />
      <UseCallbackProductPage
        theme={isDark ? "dark" : "light"}
        productId={120}
      />
    </div>
  );
}
