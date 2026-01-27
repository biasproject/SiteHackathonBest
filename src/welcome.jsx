import { useEffect, useRef } from "react";
import dinoGif from "./assets/dinogif.gif";

export default function WelcomeSection() {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);
  const columnsRef = useRef(0);
  const fontSize = 8;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const letters = "01".repeat(6).split("");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const columns = Math.floor(canvas.width / fontSize);
      if (columns > columnsRef.current) {
        dropsRef.current.push(...Array(columns - columnsRef.current).fill(1));
      }
      columnsRef.current = columns;
    };

    resizeCanvas();

    if (dropsRef.current.length === 0) {
      dropsRef.current = Array.from({ length: columnsRef.current }, () => 1);
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);


      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#A020F0");
      gradient.addColorStop(0.4, "#C71A5C");
      gradient.addColorStop(1, "#C71A5C");
      dropsRef.current.forEach((drop, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];

        ctx.fillStyle = gradient;

        ctx.shadowBlur = 5;
        ctx.shadowColor = "#A020F0";

        ctx.fillText(text, i * fontSize, drop * fontSize);

        ctx.shadowBlur = 0;

        dropsRef.current[i] += 0.40;

        if (dropsRef.current[i] * fontSize > canvas.height && Math.random() > 0.995) {
          dropsRef.current[i] = 0;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columnsRef.current = Math.floor(canvas.width / fontSize);
      if (columnsRef.current > dropsRef.current.length) {
        dropsRef.current.push(...Array(columnsRef.current - dropsRef.current.length).fill(1));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="welcome-section">
      <canvas ref={canvasRef} className="matrix-canvas" />
      <div className="content">
        <div className="error-wrapper">
          <h2 className="error-code">Error</h2>
          <img
            src={dinoGif}
            alt="Dino"
            className="dino-icon"
          />
        </div>

        <p className="subtitle">It looks like you haven't registered yet...</p>
        <button
          onClick={() => window.open('https://docs.google.com/forms/d/1seU2srL8otKDqQ7AXGg2-vEM6MLuQu1gyOXec6mrDPc/edit', '_blank')}
          className="home-button"
        >
          Register
        </button>
        <a className="learn-more" href="#About">Learn more</a>
      </div>

      <a href="#About" className="scroll-down-arrow" aria-label="Scroll down">
        <svg width="80" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}