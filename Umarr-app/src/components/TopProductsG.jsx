import products from "../data/products.json";

const TopProductsG = () => {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Produk Unggulan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-red-500 font-bold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProductsG;
