import { CgCalendarDates } from "react-icons/cg"; 
import { GiPriceTag } from "react-icons/gi"; 
import { GrStatusGood } from "react-icons/gr"; 
import { RiCustomerService2Fill } from "react-icons/ri"; 
import { TbMenuOrder } from "react-icons/tb"; 
import { useState } from "react";
import Modal from "../components/modal";
import PageHeader from "../components/PageHeader";
import { FaPlus } from "react-icons/fa";

// Sample 30 Orders
const initialOrders = Array.from({ length: 30 }, (_, i) => ({
  id: `ORD-${1000 + i}`,
  customer: `Customer ${i + 1}`,
  status: ["Pending", "Completed", "Cancelled"][i % 3],
  total: (Math.random() * 500).toFixed(2),
  date: `2025-05-${(i % 30 + 1).toString().padStart(2, "0")}`,
}));

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ customer: "", status: "Pending", total: "", date: "" });

  const handleAdd = () => {
    if (formData.customer && formData.total && formData.date) {
      setOrders([
        ...orders,
        {
          id: `ORD-${1000 + orders.length}`,
          ...formData,
        },
      ]);
      setModalOpen(false);
      setFormData({ customer: "", status: "Pending", total: "", date: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <PageHeader title="Orders" breadcrumb={["Home", "Orders"]}>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2 transition-all duration-200"
        >
          <FaPlus />
          <span>Add Order</span>
        </button>
      </PageHeader>

      <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full text-sm text-gray-600">
            <thead className="bg-gradient-to-r from-teal-400 to-blue-500 text-white">
            <tr>
                <th className="p-4 text-left">
                    <div className="flex items-center space-x-2">
                        <span>Order ID</span>
                        <TbMenuOrder style={{ fontSize: '24px'}} />
                    </div>
                </th>
                <th className="p-4 text-left">
                    <div className="flex items-center space-x-2">
                        <span>Customer Name</span>
                        <RiCustomerService2Fill style={{ fontSize: '24px'}} />
                    </div>
                </th>
                <th className="p-4 text-left">
                    <div className="flex items-center space-x-2">
                        <span>Status </span>
                        <GrStatusGood style={{ fontSize: '24px'}} />
                    </div>
                </th>
                <th className="p-4 text-left">
                    <div className="flex items-center space-x-2">
                        <span>Total Price </span>
                        <GiPriceTag style={{ fontSize: '24px'}}/>
                    </div>
                </th>
                <th className="p-4 text-left">
                    <div className="flex items-center space-x-2">
                        <span>Order Date </span>
                        <CgCalendarDates style={{ fontSize: '24px'}}/>
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            {orders.map((order, idx) => (
                <tr key={idx} className={`border-t hover:bg-gray-100 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.customer}</td>
                <td className={`p-4 font-semibold ${order.status === "Completed" ? "text-green-600" : order.status === "Pending" ? "text-yellow-600" : "text-red-500"}`}>
                    {order.status}
                </td>
                <td className="p-4 font-semibold">Rp {order.total}</td>
                <td className="p-4">{order.date}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>


      <Modal title="Add Order" isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="space-y-4">
          <input type="text" placeholder="Customer Name" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.customer} onChange={e => setFormData({ ...formData, customer: e.target.value })} />
          <select className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <input type="number" placeholder="Total Price" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.total} onChange={e => setFormData({ ...formData, total: e.target.value })} />
          <input type="date" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-200" onClick={handleAdd}>Add</button>
        </div>
      </Modal>
    </div>
  );
}
