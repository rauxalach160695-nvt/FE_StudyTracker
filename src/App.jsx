import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRouter from "./routes/index";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [count, setCount] = useState(0);
  console.log("run in App ....");
  return (
    <div className = "UI-container">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
