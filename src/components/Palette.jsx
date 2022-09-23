import styled from "styled-components";

export default function Palette({ changeColor }) {
  return (
    <Container>
      <button onClick={() => changeColor("#fa5252")}>red</button>
      <button onClick={() => changeColor("#ff922b")}>orange</button>
      <button onClick={() => changeColor("#ffd43b")}>yellow</button>
      <button onClick={() => changeColor("#51cf66")}>green</button>
      <button onClick={() => changeColor("#5c7cfa")}>blue</button>
      <button onClick={() => changeColor("#cc5de8")}>pouple</button>
      <button onClick={() => changeColor("#f783ac")}>pink</button>
      <button onClick={() => changeColor("#ffffff")}>white</button>
      <button onClick={() => changeColor("#000000")}>black</button>
    </Container>
  );
}

const Container = styled.div``;
