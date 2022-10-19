import { Routes, Route } from "react-router-dom";
import { Home } from "./home";

export const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/burgers" element={<h1>Burgers</h1>} />
      <Route path="/admin" element={<h1>Admin</h1>} />
    </Routes>
  );
};
