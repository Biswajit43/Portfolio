import { useEffect, useRef } from "react";

const renderText = (text, className) => {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className={`inline-block transition-transform duration-300 ${className}`}
      data-letter
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container) => {
  const letters = container.querySelectorAll("[data-letter]");
  const base = 1;
  const min = 0.8;
  const max = 1.4;

  const animateLetter = (letter, scale, duration = 0.2) => {
    letter.style.transition = `transform ${duration}s ease`;
    letter.style.transform = `scale(${scale})`;
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2.5) / 2000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetter(letter, base, 0.3));
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) setupTextHover(titleRef.current);
    if (subtitleRef.current) setupTextHover(subtitleRef.current);
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef} className="text-3xl">
        {renderText("Hey, I'm Biswajit! Welcome to my", "")}
      </p>

      <h1 ref={titleRef} className="mt-7 text-9xl italic">
        {renderText("portfolio", "")}
      </h1>
    </section>
  );
};

export default Welcome;
