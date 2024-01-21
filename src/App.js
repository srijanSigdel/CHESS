import React from "react";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Board from "./components/chessboard/Board";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-black text-white overflow-hidden">
      <Board />
    </div>
  );
}

export default App;
