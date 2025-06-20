import { useState } from "react";
import NormalProductPage from "./NormalProductPage";

export default function NoneUseCallback() {
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
      <NormalProductPage theme={isDark ? "dark" : "light"} productId={120} />
    </div>
  );
}
