import React,{ Suspense } from "react";
import Loading from "./components/Loading";
import "./assets/tailwind.css";
import GuestLayout from './pages/Guest';
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Testimoni from "./pages/Testimoni";
//import Dashboard from "./pages/Dashboard";
//import Orders from "./pages/Order";
//import Customers from "./pages/Customer";
//import NotFound from "./pages/NotFound";
//import MainLayout from "./layouts/Mainlayout";
import AuthLayout from "./layouts/AuthLayout";
//import Login from "./pages/auth/Login";
//import Register from "./pages/auth/Register";
//import Forgot from "./pages/auth/Forgot";
import { Routes, Route } from "react-router-dom"; 

//const Dashboard = React.lazy(() => import("./pages/Dashboard"))
//const User = React.lazy(() => import("./pages/User"))
//const Orders = React.lazy(() => import("./pages/Order"))
//const Customers = React.lazy(() => import("./pages/Customer"))
//const NotFound = React.lazy(() => import("./pages/NotFound"))
//const MainLayout = React.lazy(() => import("./layouts/Mainlayout"))
//const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))


function App() {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/testimoni" element={<Testimoni />} />
      </Route>
      <Route element={<AuthLayout/>}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/forgot" element={<Forgot/>} />
          </Route>
    </Routes>
  );
}

export default App;
