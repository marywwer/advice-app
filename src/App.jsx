import React from "react";
import { useEffect, useState } from "react";
import AdviceCard from "./components/AdviceCard";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-cache",
      });
      const data = await res.json();
      setAdvice(data.slip.advice);
    } catch (e) {
      setAdvice("Не удалось получить совет. Попробуй позже.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const formatDate = () => {
    const now = new Date();
    return now.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-600 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-2 text">Совет дня</h1>
      <p className="mb-6 text-lg">{formatDate()}</p>
      <AdviceCard advice={advice} loading={loading} onFetch={fetchAdvice} />
    </div>
  );
}