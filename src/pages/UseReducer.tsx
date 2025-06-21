import { Link, Outlet, useLocation } from "react-router-dom";

export default function UseReducer() {
  const location = useLocation();

  const isShowLinks = location.pathname === "/useReducer";
  return (
    <>
      <ul>
        {isShowLinks ? (
          <>
            <li>
              <Link to={"/useReducer/object"}>Object</Link>
            </li>
            <li>
              <Link to={"/useReducer/array"}>Array</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to={"/useReducer"}>UseReducer</Link>
          </li>
        )}
      </ul>
      <Outlet />
    </>
  );
}
