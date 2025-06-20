import { createContext, useState } from "react";
import Form from "./Form";

export const ThemeContext = createContext<string | null>(null);

export default function BasicUseContext() {
  const [theme, setTheme] = useState<"gray" | "light">("light");
  return (
    <ThemeContext value={theme}>
      <Form
        handleChangeColor={() => {
          setTheme((theme) => (theme === "gray" ? "light" : "gray"));
        }}
      />
    </ThemeContext>
  );
}
