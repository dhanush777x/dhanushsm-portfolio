"use client";

import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let columns: number[] = [];
    let frameCount = 0;

    const charSet = "0123456789ABCDEF";
    const fontSize = 20;
    let columnsCount = 0;

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columnsCount = Math.floor(canvas.width / fontSize);
      columns = Array(columnsCount)
        .fill(0)
        .map(() => Math.random() * 80);
    };

    const draw = () => {
      frameCount++;
      if (frameCount % 2 === 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = "rgba(5, 7, 6, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff41";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        const char = charSet[Math.floor(Math.random() * charSet.length)];
        const x = i * fontSize;
        const y = columns[i] * fontSize;

        ctx.globalAlpha = Math.random() * 0.5 + 0.1;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          columns[i] = 0;
        }
        columns[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50 will-change-transform"
    />
  );
}

