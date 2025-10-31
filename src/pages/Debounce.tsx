import WithDebounce from "../components/debounce/WithDebounce";
// import SearchQueryByDebounce from "../components/search/debounce/SearchedQueryByDebounce";
// import SearchQueryByDeferredValue from "../components/search/SearchQueryByDeferredValue";
// import SearchQueryByTransition from "../components/search/SearchQueryByTransition";
// import RaceCondieion from "../../public/video/raceCondition";

export default function SearchQuery() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <WithDebounce />
        <hr />
        <div style={{ width: "50%" }}>
          <strong>디바운스란?</strong>
          <p>
            이벤트가 연속적으로 발생할 때, 마지막 이벤트 발생 후 일정 시간이
            지나야만 함수가 실행되도록 하는 기술
          </p>
          <strong>적용 예시 - 실시간 검색 결과 렌더링</strong>
          <p>
            타이핑이 끝난후 1초동안 추가적인 타이핑이 없으면 디바운스 훅을 통한
            네트워크 요청 실행
          </p>
          <strong>디바운스를 적용함으로써 얻을 수 있는 장점</strong>
          <ul>
            <li>
              디바운스를 적용하지 않으면 타이핑이 실행될 때마다 네트워크 요청도
              실행 → 디바운스를 적용함으로써 불필요한 네트워크 요청을 생략할 수
              있음
            </li>
            <li>
              불필요한 네트워크 요청을 생략함으로써 불필요한 리렌더링, 상태
              업데이트를 줄여 성능 최적화에 기여
            </li>
            <li>
              사용자 입력 도중 깜빡임이나 불필요한 로딩 상태가 줄어들어, 더
              부드러운 경험 제공.
            </li>
          </ul>
          <strong>성능 최적화를 위해 추가적으로 적용한 기능</strong>
          <ul>
            <li>
              Map 객체를 활용하여 검색 결과 캐싱 → 동일한 검색어에 대해 추가적인
              네트워크 요청 생략 + 빠른 결과 제공
            </li>
            <li>race condition의 위험성을 줄이기 위해 AbrotController 적용</li>
          </ul>
        </div>
        {/* <SearchQueryByDebounce /> */}
        {/* <SearchQueryByDeferredValue /> */}
        {/* <SearchQueryByTransition /> */}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <p>
            <strong>race condition 예시</strong>
            <p>
              <video width={500} controls muted>
                <source src="/video/raceCondition.mp4" type="video/mp4" />
              </video>
            </p>
            <p>
              검색창에 a를 입력한 후 ab를 입력한 경우 → a 요청이 ab 요청보다
              오래걸린다고 가정하면 ab의 검색 결과가 a의 검색 결과로 덮여씌어질
              수 있음{" "}
            </p>
            <p>
              위의 <strong>race condition</strong> 문제를 해결하기 위해{" "}
              <strong>abrotController</strong> 설정하여 새로운 요청이 들어오면
              이전 요청중인 fetch 삭제
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
