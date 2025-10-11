import NonBlock from "../components/useTransition/blocking/NonBlock";
import Block from "../components/useTransition/blocking/Block";

export default function UseTransition() {
  return (
    <>
      <h2>UseTransition</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4>without useTransition</h4>
          <Block />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4>with useTransition</h4>
          <NonBlock />
        </div>
      </div>
    </>
  );
}
