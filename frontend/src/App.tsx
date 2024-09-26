import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Board from "./pages/Board";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/board/:boardId" element={<Board />} />
    </Routes>
  );
}

export default App;
