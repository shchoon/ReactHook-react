import { memo } from "react";

const SlowList = memo(function SlowList({ text }: { text: string }) {
  let items = [];
  for (let i = 0; i < 250; i++) {
    // 250ms 동안 아무일도 안 일어남
    items.push(<SlowItem key={i} text={text} />);
  }

  return <ul>{items}</ul>;
});

const SlowItem = ({ text }: { text: string }) => {
  let startTime = performance.now();

  while (performance.now() - startTime < 1) {
    // nothing
  }

  return (
    <li
      style={{ border: "1px solid black", borderRadius: "5px", padding: "5px" }}
    >
      Text: {text}
    </li>
  );
};

export default SlowList;
