import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import './styles/app.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users/:id" element={<Users />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
