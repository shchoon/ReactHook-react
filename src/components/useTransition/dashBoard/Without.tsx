import { useState, useEffect } from "react";
import Chart from "../_components/Chart";

export default function Without() {
  const [stockPrice, setStockPrice] = useState<null | number>();
  const [chart, setChart] = useState<number[]>();

  useEffect(() => {
    const interval = setInterval(async () => {
      setStockPrice(Math.floor(10000 * Math.random()));
      let updatedChart = Array(6)
        .fill(0)
        .map((item) => Math.floor(Math.random() * (100 + 1)) + 100);
      setChart(updatedChart);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <div>{stockPrice}</div>
      <div style={{ display: "flex", alignItems: "end", height: "220px" }}>
        {chart && <Chart chart={chart} />}
      </div>
    </div>
  );
}
