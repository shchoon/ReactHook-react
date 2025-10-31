// import { Link, Outlet, useLocation } from "react-router-dom";
// import { ErrorBoundaryWithuseTransition } from "../components/useTransition/ErrorBoundary/ErrorBoundaryWithuseTransition";
import { TabButtonWithTransition } from "../components/useTransition/tabButton/TabButtonWithTransition";
import Blocking from "./useTransition/Blocking";

export default function UseTransition() {
  // const location = useLocation();

  // const showLink = location.pathname === "/useTransition";
  return (
    <div style={{ padding: "20px" }}>
      <h2>UseTransition</h2>
      <TabButtonWithTransition />
      <hr style={{ margin: "20px 0" }} />
      <Blocking />
      {/* <ErrorBoundaryWithuseTransition /> */}
      {/* <ul>
        {showLink ? (
          <>
            <li>
              <Link to={"blocking"}>Blocking</Link>
            </li>
            <li>
              <Link to={"dashboard"}>dashboard</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to={"/useTransition"}>useTransition</Link>
          </li>
        )}
      </ul>
      <Outlet /> */}
    </div>
  );
}
