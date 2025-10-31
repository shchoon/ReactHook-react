import SearchByWithout from "../components/useDeferredValue/search/without";
import SearchByWith from "../components/useDeferredValue/search/with";
import TypingByWithout from "../components/useDeferredValue/typing/TypingByWithout";
import TypeingByWith from "../components/useDeferredValue/typing/TypingByWith";

export default function UseDeferredValue() {
  return (
    <div>
      <h2>UseDeferredValue</h2>
      <span>각 입력창에 a 입력 → 결과보기 → b 입력</span>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* without useDeferredValue */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h4>without useDeferredValue</h4>
          <ol>
            <li>
              <p>
                결과값을 캐시하고 있지 않으면 텍스트 입력시마다 Loading...
                텍스트 노출
              </p>
              <p>→ UX 저하 및 이전 결과를 보지 못함</p>
            </li>
            <li>
              <p>
                검색 결과를 빨리 불러오면 fallback - 검색결과 반복으로 깜빡이는
                것 처럼 보일 수 있음
              </p>
            </li>
            <li>
              <p>검색 결과가 방대하여 렌더링 자체가 무거운 작업인 경우</p>
              <p>
                → 입력값이 빠르게 들어오면 UI가 버벅거리거나 입력에 지연이
                발생할 수 있음
              </p>
            </li>
          </ol>
          <SearchByWithout />
          <p>
            아무 값이나 연속으로 입력 → text 상태 변경과 동시에 자식
            컴포넌트들이 리렌더링 되면서 타이핑의 지연 발생
          </p>
          <TypingByWithout />
        </div>
        <hr />
        {/* with useDeferredValue */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h4>with useDeferredValue</h4>
          <ol>
            <li>
              <p>
                결과값을 캐시하고 있지 않을 경우 텍스트 입력시마다 이전 결과가
                보이면서 업데이트 즉시 결과 재렌더링
              </p>
              <p>
                → 결과값에 스타일을 적용해 "검색중" 표시 & 이전 결과를 볼 수
                있어 UX 향상
              </p>
            </li>
            <li>
              <p>검색 결과를 빨리 불러와도 깜빡인 현상이 없음</p>
            </li>
            <li>
              <p>검색 결과가 방대하여 렌더링 자체가 무거운 작업인 경우</p>
              <p>
                → 입력값이 빠르게 들어오면 무거운 렌더링 작업을 지연시켜 타이핑
                반응성 향상
              </p>
            </li>
          </ol>
          <SearchByWith />
          <p>
            아무 값이나 연속으로 입력 → input의 text 값은 바로 변경되지만 자식
            컴포넌트의 prop으로 전달되는 text 는 useDeferedrValue를 통해
            지연되어 타이핑 반응성 향상
          </p>
          <p>
            주의! 자식 컴포넌트를 <strong>memo</strong>로 감싸줘야 함
            <br />
            <strong>
              (text가 변경된 후 리렌더링이 되는 타이밍에 List 컴포넌트는 아직
              이전 text 값을 가지고 있기 때문. 즉 리렌더링 시 동일한 props을
              가지고 있는 경우 이전 props과 동일하면 리렌더링을 막을 수 있는
              memo가 필요!)
            </strong>
          </p>
          <TypeingByWith />
        </div>
      </div>
    </div>
  );
}
