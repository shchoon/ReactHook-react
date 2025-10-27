import WithDebounce from "../components/debounce/WithDebounce";
import SearchQueryByDebounce from "../components/search/debounce/SearchedQueryByDebounce";
// import SearchQueryByDeferredValue from "../components/search/SearchQueryByDeferredValue";
// import SearchQueryByTransition from "../components/search/SearchQueryByTransition";
// import RaceCondieion from "../../public/video/raceCondition";

export default function SearchQuery() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <WithDebounce />
        {/* <SearchQueryByDebounce /> */}
        {/* <SearchQueryByDeferredValue /> */}
        {/* <SearchQueryByTransition /> */}
      </div>
      {/* <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <h4>디바운스를 활용한 방법</h4>
          <p>타이핑이 멈춘 후 0.5초 뒤에 검색 결과 요청</p>
          <p>
            <strong>주의!</strong>
            <p>race condition 예시</p>
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
      </div> */}
    </div>
  );
}
