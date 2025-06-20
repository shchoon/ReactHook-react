import { useState } from "react";
import UseCallbackProductPage from "./UseCallbackProductPage";

export default function UseCallbackCom() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
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
      <hr />
      <UseCallbackProductPage
        theme={isDark ? "dark" : "light"}
        productId={120}
      />
    </div>
  );
}
