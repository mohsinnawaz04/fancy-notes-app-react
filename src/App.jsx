import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <div>
      <div className="w-full h-screen bg-zinc-800 relative">
        <Background />
        <Foreground />
      </div>
    </div>
  );
}

export default App;
