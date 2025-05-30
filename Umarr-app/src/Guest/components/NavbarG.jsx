import { Link } from "react-scroll";

const NavbarG = () => {
  return (
    
    <nav className="flex justify-between items-center py-5 px-10 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <span className="font-extrabold text-3xl text-gray-800">
          Sedap<span className="text-green-500">x</span>
        </span>
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-8 text-[16px] font-medium mx-auto">
            <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-green-500">
              Home
            </Link>
            <Link to="about" smooth duration={500} className="cursor-pointer hover:text-green-500">
              About
            </Link>
            <Link to="produk" smooth duration={500} className="cursor-pointer hover:text-green-500">
              Produk
            </Link>
            <Link to="testimoni" smooth duration={500} className="cursor-pointer hover:text-green-500">
              Testimoni
            </Link>
          </div>

      {/* Action Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="border border-gray-300 px-5 py-2 rounded-md hover:bg-green-500 hover:text-white transition">
          Login
        </button>
        <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:opacity-90 transition">
          Register
        </button>
      </div>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
        <button className="text-2xl">&#9776;</button>
      </div>
    </nav>
  );
};

export default NavbarG;
