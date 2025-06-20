import { useContext } from "react";
import { ThemeContext } from "./BasicUseContext";

type Props = {
  handleChangeColor: () => void;
};

export default function Form({ handleChangeColor }: Props) {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <form
        style={{
          backgroundColor: `${theme === "gray" ? "gray" : "white"}`,
          width: 500,
          border: "1px solid black",
          margin: "0 auto",
        }}
      >
        <h2>useContext</h2>
        <button style={{ border: 1 }}>Login</button>
        <button style={{ border: 1 }}>Logout</button>
      </form>
      <button type="button" onClick={handleChangeColor}>
        change color
      </button>
    </>
  );
}
