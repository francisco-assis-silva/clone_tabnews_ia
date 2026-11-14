"use client";

import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export default function Confetti() {
  const [montado, setMontado] = useState(false);
  useEffect(() => setMontado(true), []);
  return montado ? <ReactConfetti recycle={false} /> : null;
}
