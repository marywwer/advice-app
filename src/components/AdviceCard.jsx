import React from "react";
export default function AdviceCard({ advice, loading, onFetch }) {
  return (
    <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 max-w-md w-full relative transition-all duration-300 flex flex-col items-center text-center">
      {loading ? (
        <p className="text-center animate-pulse">Загрузка...</p>
      ) : (
        <blockquote className="italic text-xl before:content-['“'] after:content-['”'] ">
          {advice}
        </blockquote>
      )}
      <button
        onClick={onFetch}
        disabled={loading}
        className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg transition "
      >
        Дай ещё совет
      </button>
    </div>
  );
}
