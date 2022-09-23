import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Canvas({ color }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.55;
    canvas.height = window.innerHeight * 0.8;

    const context = canvas.getContext("2d");
    context.strokeStyle = color;
    context.filStyle = color;
    context.lineWidth = 2.5;

    setCtx(context);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    context.strokeStyle = color;
    context.filStyle = color;
    context.lineWidth = 2.5;

    setCtx(context);
  }, [color]);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (ctx) {
      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  };

  return (
    <Container>
      <CanvasSection
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
      ></CanvasSection>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e1e2e3;
`;

const CanvasSection = styled.canvas`
  background: #fff;
`;

export default Canvas;
