import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoutes from "./adminRoutes";
import UserRoutes from "./normalUsers";

function AppRouter() {
    console.log("run in index ....")
  return (
    <Routes>
      {AdminRoutes()}
      {UserRoutes()}
    </Routes>
  );
}

export default AppRouter;
