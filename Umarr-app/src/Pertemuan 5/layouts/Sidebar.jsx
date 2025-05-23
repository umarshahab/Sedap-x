import { RiCustomerService2Line } from "react-icons/ri"; 
import { MdReorder } from "react-icons/md"; 
import { RiDashboardFill } from "react-icons/ri"; 
export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span className="font-poppins font-[1000] text-[48px]">Sedap<b className="text-green-500">x</b></span>
        <span className="text-gray-400 font-semibold font-barlow">Modern Admin Dashboard</span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu">
                <ul id="menu-list">
                    <li>
	                    <div id="menu-1" className="hover:text-hijau flex cursor-pointer items-center gap-2 rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"><RiDashboardFill />Dashboard</div>
	                  </li>
                    <li>
	                    <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center gap-2 rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"><MdReorder />Orders</div>
	                  </li>
	                  <li>
	                    <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center gap-2 rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"><RiCustomerService2Line />Customers</div>
	                  </li>
                </ul>
            </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar" className="w-20 rounded-full"
            src="https://avatar.iran.liara.run/public/28"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
