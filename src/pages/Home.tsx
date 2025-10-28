import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <ul>
        <li>
          <Link to={"/useMemo"}>useMemo</Link>
        </li>
        <li>
          <Link to={"/useCallback"}>useCallback</Link>
        </li>
        <li>
          <Link to={"/useContext"}>useContext</Link>
        </li>
        <li>
          <Link to={"/useReducer"}>useReducer</Link>
        </li>
        <li>
          <Link to={"/useTransition"}>useTransition</Link>
        </li>
        <li>
          <Link to={"/useDeferredValue"}>useDeferredValue</Link>
        </li>
        <li>
          <Link to={"/debounce"}>Debounce</Link>
        </li>
        <li>
          <Link to={"/throttling"}>Throttling</Link>
        </li>
        <li>
          <Link to={"/useActionState"}>useActionState</Link>
        </li>
      </ul>
    </div>
  );
}
