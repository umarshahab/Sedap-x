import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Modal from "../components/modal";
import { FaUserPlus } from "react-icons/fa";

// Sample 30 Customers
const initialCustomers = Array.from({ length: 30 }, (_, i) => ({
  id: `CUST-${i + 1}`,
  name: `Customer ${i + 1}`,
  email: `umar23ti@mahasiswa.pcr.ac.id`,
  phone: `0812-0000-${(i + 1).toString().padStart(4, "0")}`,
  loyalty: ["Bronze", "Silver", "Gold"][i % 3],
}));

export default function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const handleAdd = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Semua field wajib diisi!");
      return;
    }

    const newCustomer = {
      id: `CUST-${customers.length + 1}`,
      ...formData,
    };

    setCustomers([...customers, newCustomer]);
    setModalOpen(false);
    setFormData({ name: "", email: "", phone: "", loyalty: "Bronze" });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <PageHeader title="Customers" breadcrumb={["Home", "Customers"]}>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 shadow-md"
        >
          <FaUserPlus />
          <span>Tambah Customer</span>
        </button>
      </PageHeader>

      <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gradient-to-r from-emerald-400 to-green-600 text-white">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Telepon</th>
              <th className="p-3 text-left">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cust, idx) => (
              <tr key={idx} className="odd:bg-gray-50 hover:bg-gray-100 border-b">
                <td className="p-3">{cust.id}</td>
                <td className="p-3">{cust.name}</td>
                <td className="p-3">{cust.email}</td>
                <td className="p-3">{cust.phone}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      cust.loyalty === "Gold"
                        ? "bg-yellow-300 text-yellow-900"
                        : cust.loyalty === "Silver"
                        ? "bg-gray-300 text-gray-800"
                        : "bg-orange-200 text-orange-900"
                    }`}
                  >
                    {cust.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal title="Tambah Customer Baru" isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="space-y-4 p-2">
          <input
            type="text"
            placeholder="Nama"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Telepon"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <select
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.loyalty}
            onChange={(e) => setFormData({ ...formData, loyalty: e.target.value })}
          >
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>
          <div className="flex justify-end">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={handleAdd}
            >
              Tambah
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
