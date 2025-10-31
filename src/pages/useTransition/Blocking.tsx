import Block from "../../components/useTransition/calulation/Block";
import NonBlock from "../../components/useTransition/calulation/NonBlock";
// import SearchBlock from "../../components/useTransition/search/SearchBlock";
// import SearchNonBlock from "../../components/useTransition/search/SearchNonBlock";

export default function Blocking() {
  // const items = Array.from({ length: 250 }, (_, i) => `item${i + 1}`);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h4>useTransition 미적용</h4>
          <Block />
          {/* <div style={{ height: "1px", backgroundColor: "black" }} />
          <SearchBlock items={items} /> */}
        </div>
        <hr />
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h4>useTransition 적용</h4>
          <NonBlock />
          {/* <div style={{ height: "1px", backgroundColor: "black" }} />
          <SearchNonBlock items={items} /> */}
        </div>
      </div>
    </>
  );
}
