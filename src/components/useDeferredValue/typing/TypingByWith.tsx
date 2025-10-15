import { useDeferredValue, useState } from "react";
import SlowList from "./SlowList";

export default function TypeingByWith() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </div>
  );
}
