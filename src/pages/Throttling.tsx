// import { useCallback, useEffect, useState } from "react";
// import useThrottle from "../hook/useThrottle";
// import { Toast } from "../components/Toast";
import WithoutThrottle from "../components/throttle/WithoutThrottle";
import WithThrottle from "../components/throttle/WithThrottle";

// function SlowItem({ x, y }: { x: number; y: number }) {
//   const startTime = performance.now();
//   while (performance.now() - startTime < 5) {
//     // 아무 작업도 하지 않음
//   }

//   return (
//     <li
//       style={{
//         border: "1px solid black",
//         borderRadius: "5px",
//         textAlign: "center",
//       }}
//     >
//       <p>x: {x}</p>
//       <p>y: {y}</p>
//     </li>
//   );
// }

// function SlowList({ x, y }: { x: number; y: number }) {
//   let items = [];
//   for (let i = 0; i < 250; i++) {
//     items.push(<SlowItem x={x} y={y} />);
//   }

//   return <ul>{items}</ul>;
// }

// Throttling.tsx (부모 컴포넌트)

export default function Throttling() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <WithoutThrottle />
      <WithThrottle />
    </div>
  );
}
