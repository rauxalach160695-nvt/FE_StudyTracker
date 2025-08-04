import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";

function UserRoutes() {
  return (
    <>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
    </>
  );
}

export default UserRoutes;
