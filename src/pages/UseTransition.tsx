import { Link, Outlet, useLocation } from "react-router-dom";

export default function UseTransition() {
  const location = useLocation();

  const showLink = location.pathname === "/useTransition";
  return (
    <>
      <h2>UseTransition</h2>
      <ul>
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
      <Outlet />
    </>
  );
}
