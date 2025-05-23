import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineOrderedList } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

export default function ListMenu() {
    return (
        <div id="sidebar-menu" className="mt-10">
            {/* List Menu */}
            <ul id="menu-list" className="space-y-3">
            <Link id="menu-list" to="/">
                    <li>
	                    <Link id="menu-1" to="/" className="hover:text-hijau flex cursor-pointer items-center gap-2 rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"><RiDashboardFill />Dashboard</Link>
	                  </li>
                    <li>
	                    <Link id="menu-2" to="/orders" className="hover:text-hijau flex cursor-pointer items-center gap-2 rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"><MdReorder />Orders</Link>
	                  </li>
	                  <li>
	                    <Link id="menu-3" to="/custome" className="hover:text-hijau flex cursor-pointer items-center gap-2 rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"><RiCustomerService2Line />Customers</Link>
	                  </li>
                </Link>
            </ul>
        </div>
    );
}

