import React, { useState } from 'react';

import './App.css'

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r from-[#6ee7b7] via-[#9333ea] to-[#f97316]">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white">
          Pick Your Favorite Color
        </h1>
      </div>

      <div className="flex justify-center items-center flex-col gap-6 bg-[#ffffff] p-12 rounded-3xl shadow-xl w-[90%] max-w-lg mx-auto">
        <p className="text-lg font-medium text-[#555555] mb-6">
          <span className="font-semibold text-lg">Selected Color: </span>
          <span
            style={{
              color:
                color === "Green"
                  ? "green"
                  : color === "Purple"
                  ? "purple"
                  : color === "Orange"
                  ? "orange"
                  : "#999999",
            }}
          >
            {color || "None"}
          </span>
        </p>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => setColor("Green")}
            className="text-green-500 border-4 border-green-500 px-8 py-3 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white focus:outline-none transition duration-300 transform hover:scale-105"
          >
            Green
          </button>
          <button
            onClick={() => setColor("Purple")}
            className="text-purple-500 border-4 border-purple-500 px-8 py-3 text-lg font-semibold rounded-full hover:bg-purple-500 hover:text-white focus:outline-none transition duration-300 transform hover:scale-105"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("Orange")}
            className="text-orange-500 border-4 border-orange-500 px-8 py-3 text-lg font-semibold rounded-full hover:bg-orange-500 hover:text-white focus:outline-none transition duration-300 transform hover:scale-105"
          >
            Orange
          </button>
        </div>
      </div>

      <div className="bg-[#e11d48] py-6 mt-auto">
        <p className="text-white text-center font-semibold text-xl">
          Choose wisely, your color matters!
        </p>
      </div>
    </div>
  );
}

export default App;
