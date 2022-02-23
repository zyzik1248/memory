import React from "react";
import Board from "./components/board/Board";

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center gap-5">
        <Board />
        <Board />
    </div>
  );
};

export default App;
