import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import MainLayout from "../layouts/mainLayout"
import IndexPage from "../pages/indexpage";
import SkillsPage from "../pages/skillsPage";

function UserRoutes() {
  return (
    <Route element={<MainLayout/>}>
      <Route path="/home" element={<Home />} />
      <Route path="/skills" element={<SkillsPage />} />
    </Route>
  );
}

export default UserRoutes;
