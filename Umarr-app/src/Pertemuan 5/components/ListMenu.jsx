import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineOrderedList } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

export default function ListMenu() {
    return (
        <div id="sidebar-menu" className="mt-10">
            {/* List Menu */}
            <ul id="menu-list" className="space-y-3">
                <li>
                    <div className="hover:text-hijau flex cursor-pointer items-center gap-2 rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <MdDashboard />
                        Dashboard
                    </div>
                </li>
                <li>
                    <div className="hover:text-hijau flex cursor-pointer items-center gap-2 rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <AiOutlineOrderedList />
                        Orders
                    </div>
                </li>
                <li>
                    <div className="hover:text-hijau flex cursor-pointer items-center gap-2 rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <RiCustomerService2Fill />
                        Customers
                    </div>
                </li>
            </ul>
        </div>
    );
}

