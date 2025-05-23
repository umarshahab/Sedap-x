import { RiArrowGoBackLine } from "react-icons/ri"; 
import { BiExport } from "react-icons/bi"; 
import { AiOutlineAppstoreAdd } from "react-icons/ai"; 
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader
        title="Dashboard"
        breadcrumb={["Home", "Dashboard"]}
      >
         <div className="flex space-x-2">
    <button className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-600">
      <AiOutlineAppstoreAdd />
    </button>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
      <BiExport />
    </button>
    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400">
      <RiArrowGoBackLine />
    </button>
  </div>
      </PageHeader>
      <div
        id="dashboard-grid"
        className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        {/* Cards */}
        <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div className="bg-hijau rounded-full p-4 text-3xl text-white">
            <FaShoppingCart />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">75</span>
            <span className="text-gray-400">Total Orders</span>
          </div>
        </div>

        <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div className="bg-biru rounded-full p-4 text-3xl text-white">
            <FaTruck />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">175</span>
            <span className="text-gray-400">Total Delivered</span>
          </div>
        </div>

        <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div className="bg-merah rounded-full p-4 text-3xl text-white">
            <FaBan />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">40</span>
            <span className="text-gray-400">Total Canceled</span>
          </div>
        </div>

        <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div className="bg-kuning rounded-full p-4 text-3xl text-white">
            <FaDollarSign />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Rp.128</span>
            <span className="text-gray-400">Total Revenue</span>
          </div>
        </div>
      </div>
    </div>
  );
}
