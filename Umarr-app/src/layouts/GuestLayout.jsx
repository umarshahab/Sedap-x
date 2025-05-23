import { Outlet } from "react-router-dom";
import NavbarG from "../components/NavbarG";
import FooterG from "../components/FooterG";

const GuestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarG />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterG />
    </div>
  );
};

export default GuestLayout;
