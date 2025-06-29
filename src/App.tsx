import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import UseContext from "./pages/UseContext";
import BasicUseContext from "./components/useContext/BasicUseContext";
import HardUseContext from "./components/useContext/HardUseContext";
import UseReducer from "./pages/UseReducer";
import UseReducerOfObject from "./components/useReducer/UseReducerOfObject";
import UseReducerOfArray from "./components/useReducer/UseReducerOfArray";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <header className="App-header">react Hook</header>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/useCallback" element={<UseCallback />} />
          <Route path="/useContext" element={<UseContext />}>
            <Route path="basic" element={<BasicUseContext />} />
            <Route path="hard" element={<HardUseContext />} />
          </Route>
          <Route path="/useReducer" element={<UseReducer />}>
            <Route path="object" element={<UseReducerOfObject />} />
            <Route path="array" element={<UseReducerOfArray />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
