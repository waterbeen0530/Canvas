import styled from "styled-components";

export default function Palette({ changeColor }) {
  return (
    <Container>
      <button onClick={() => changeColor("#fa5252")}>red</button>
      {/*<button>orange</button>
      <button>yellow</button>
      <button>green</button>
      <button>blue</button>
      <button>pouple</button>
      <button>pink</button>*/}
      <button onClick={() => changeColor("#ffffff")}>white</button>
      <button onClick={() => changeColor("#000000")}>black</button>
    </Container>
  );
}

const Container = styled.div``;
