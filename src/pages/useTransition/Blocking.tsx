import Block from "../../components/useTransition/calulation/Block";
import NonBlock from "../../components/useTransition/calulation/NonBlock";
import SearchBlock from "../../components/useTransition/search/SearchBlock";
import SearchNonBlock from "../../components/useTransition/search/SearchNonBlock";

export default function Blocking() {
  const items = Array.from({ length: 10000 }, (_, i) => `item${i + 1}`);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h4>without useTransition</h4>
          <Block />
          <SearchBlock items={items} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h4>with useTransition</h4>
          <NonBlock />
          <SearchNonBlock items={items} />
        </div>
      </div>
    </>
  );
}
