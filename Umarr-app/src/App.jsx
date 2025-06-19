import React,{ Suspense } from "react";
import Loading from "./components/Loading";
import "./assets/tailwind.css";
import GuestLayout from './Guest/pages/Guest';
import Home from "./Guest/pages/Home";
import Notes from "./pages/notes";
//import Dashboard from "./pages/Dashboard";
//import Orders from "./pages/Order";
//import Customers from "./pages/Customer";
//import NotFound from "./pages/NotFound";
//import MainLayout from "./layouts/Mainlayout";
//import AuthLayout from "./layouts/AuthLayout";
//import Login from "./pages/auth/Login";
//import Register from "./pages/auth/Register";
//import Forgot from "./pages/auth/Forgot";
import { Routes, Route } from "react-router-dom"; 

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const User = React.lazy(() => import("./pages/User"))
const Orders = React.lazy(() => import("./pages/Order"))
const Customers = React.lazy(() => import("./pages/Customer"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const MainLayout = React.lazy(() => import("./layouts/Mainlayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))

const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));



function App() {
  return (
    <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Customers />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<AuthLayout/>}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/forgot" element={<Forgot/>} />
          </Route>

          <Route element={<GuestLayout />}>
              <Route path="/Guest" element={<Home />} />
          </Route>

        </Routes>
    </Suspense>
  );
}

export default App;
