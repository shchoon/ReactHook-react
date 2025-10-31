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
        <p>Theme → ProductPage → Form 구조</p>
        <p>
          ProductPage에서 Form에 적용할 post 함수를 prop으로 내려줄 때,
          post함수에 useCallback을 적용 여부에 따른 차이
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>useCallback 미적용</h3>
          <NoneUseCallback />
        </div>
        <hr />
        <div>
          <h3>useCallback 적용</h3>
          <UseCallbackCom />
        </div>
      </div>
    </div>
  );
}
