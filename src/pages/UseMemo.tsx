import NoneUseMemo from "../components/useMemo/NoneUseMemo";
import UseMemoCom from "../components/useMemo/UseMemoCom";

export default function UseMemo() {
  return (
    <div>
      <h1>
        useMemo로 todo filter 함수를 캐시했을 때, isDark의 적용 속도 차이 비교
      </h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* not apply useMemo */}
        <NoneUseMemo />
        {/* apply useMemo */}
        <UseMemoCom />
      </div>
    </div>
  );
}
