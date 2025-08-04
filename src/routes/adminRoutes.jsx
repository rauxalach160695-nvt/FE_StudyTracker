import Home from "../pages/home";
import Login from "../pages/login";
import Admin from "../pages/admin";
import { Route, Routes } from "react-router-dom";

function AdminRoutes() {
  return <><Route path="/admin" element={<Admin />}></Route></>;
}

export default AdminRoutes;
