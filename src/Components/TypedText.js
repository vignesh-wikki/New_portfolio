import { useEffect, useState } from "react";

export default function TypedText({ children, delay = 110 }) {
  const [RevealedLetters, setRevealedLetters] = useState(0);
  const interval = setInterval(() => {
    setRevealedLetters((l) => l + 1);
  }, delay);

  useEffect(() => {
    if (RevealedLetters === children.length) clearInterval(interval);
  }, [children, interval, RevealedLetters]);

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, [interval]);

  return <>{children.substring(0, RevealedLetters)}</>;
}
