import NoneUseMemoCom from "../components/useMemo/NoneUseMemoCom";
import UseMemoCom from "../components/useMemo/UseMemoCom";

export default function UseMemo() {
  return (
    <div>
      <h1>
        useMemo로 todo filter 함수를 캐시했을 때, isDark의 적용 속도 차이 비교
      </h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* not apply useMemo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>useMemo 미적용</h3>
          <NoneUseMemoCom />
        </div>
        <hr />
        {/* apply useMemo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>useMemo 적용</h3>
          <UseMemoCom />
        </div>
      </div>
    </div>
  );
}
