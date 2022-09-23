import { useState } from "react";
import Canvas from "../src/components/Canvas";
import Palette from "./components/Palette";

function App() {
  const [color, setColor] = useState("#000");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <Canvas color={color} />
      <Palette changeColor={changeColor} />
    </div>
  );
}

export default App;
