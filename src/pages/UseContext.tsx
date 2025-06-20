import { Link, Outlet, useLocation } from "react-router-dom";

export default function UseContext() {
  const location = useLocation();

  const showLink = location.pathname === "/useContext";
  return (
    <div>
      <ul>
        {showLink ? (
          <>
            <Link to={"/useContext/basic"}>
              <li>Basic useContext</li>
            </Link>
            <Link to={"/useContext/hard"}>
              <li>Hard useContext</li>
            </Link>
          </>
        ) : (
          <Link to={"/useContext"}>
            <li>useContext</li>
          </Link>
        )}
      </ul>

      <Outlet />
    </div>
  );
}
