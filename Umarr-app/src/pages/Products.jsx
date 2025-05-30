import PageHeader from "../components/PageHeader"
import products from "../data/product-sedap.json"

export default function Products() {
    const breadcrumb = ["Dashboard", "Product List"]
    return (
        <div>
            <PageHeader title="Products" breadcrumb={breadcrumb} />

            <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-2xl shadow-lg">
                <thead>
                    <tr className="bg-emerald-600 text-white text-left text-sm font-semibold">
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Vendor</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
                    {products.map((item, index) => (
                        <tr
                            key={item.id}
                            className="hover:bg-gray-50 transition-colors duration-200"
                        >
                            <td className="px-6 py-4 font-medium text-gray-700">
                                {index + 1}.
                            </td>
                            <td className="px-6 py-4">{item.title}</td>
                            <td className="px-6 py-4">{item.category}</td>
                            <td className="px-6 py-4">Rp {item.price * 1000}</td>
                            <td className="px-6 py-4">{item.brand}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
