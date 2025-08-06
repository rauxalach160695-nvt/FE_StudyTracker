import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoutes from "./adminRoutes";
import UserRoutes from "./normalUsers";
import Login from "../pages/login";

function AppRouter() {
    console.log("run in index ....")
  return (
    <Routes>
      {AdminRoutes()}
      {UserRoutes()}
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
}

export default AppRouter;
