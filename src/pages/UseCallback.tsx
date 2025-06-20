import UseCallbackCom from "../components/useCallback/UseCallbackCom";
import NoneUseCallback from "../components/useCallback/noneUseCallback";

export default function UseCallback() {
  return (
    <div>
      <h2>
        useCallback을 사용한 경우와 사용하지 않은 경우 theme 색상 변경 속도 차이
        비교
      </h2>
      <div>
        <h3>useCallback 적용 X</h3>
        <NoneUseCallback />
      </div>
      <br />
      <div>
        <h3>useCallback 적용</h3>
        <UseCallbackCom />
      </div>
    </div>
  );
}
