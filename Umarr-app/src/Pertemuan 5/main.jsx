import { AiTwotoneHome } from "react-icons/ai";
import { AiFillAlipaySquare } from "react-icons/ai";
import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import DashBoard from "./pages/Dashboard";

createRoot(document.getElementById("root")).render(
  <div id="layout-wrapper" className="flex flex-row flex-1">
    <Sidebar />
    <div id="main-content" className="flex-1 p-4">
      <Header/>
      <DashBoard />
    </div>
  </div>
);
