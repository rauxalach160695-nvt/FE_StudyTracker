import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import MainLayout from "../layouts/mainLayout"
import IndexPage from "../pages/indexpage";

function UserRoutes() {
  return (
    <Route element={<MainLayout/>}>
      
      <Route path="/home" element={<Home />} />
    </Route>
  );
}

export default UserRoutes;
