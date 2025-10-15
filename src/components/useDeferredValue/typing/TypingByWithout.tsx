import { useState } from "react";
import SlowList from "./SlowList";

export default function Without() {
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={text} />
    </div>
  );
}
