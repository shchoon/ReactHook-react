import With from "../../components/useTransition/dashBoard/With";
import Without from "../../components/useTransition/dashBoard/Without";

export default function DashBoard() {
  return (
    <div style={{ paddingInline: "100px" }}>
      <h4>실시간 주가</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4>without useTransition</h4>
          <Without />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4>with useTransition</h4>
          <With />
        </div>
      </div>
    </div>
  );
}
