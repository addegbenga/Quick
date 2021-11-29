import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
