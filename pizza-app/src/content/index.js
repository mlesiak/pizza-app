import { Routes, Route } from "react-router-dom";
import { Admin } from "./admin";
import { Home } from "./home";
import { Menu } from "./menu";
import { MenuDetails } from "./menu/details";

export const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:id" element={<MenuDetails />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
