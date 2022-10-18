import { Routes, Route } from "react-router-dom";

export const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/burgers" element={<h1>Burgers</h1>} />
      <Route path="/admin" element={<h1>Admin</h1>} />
    </Routes>
  );
};
