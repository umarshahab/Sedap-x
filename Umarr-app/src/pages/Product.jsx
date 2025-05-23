const products = [
  { id: 1, name: "Nasi Goreng Spesial", price: 25000, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Mie Ayam Bakso", price: 20000, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Es Teh Manis", price: 10000, image: "https://via.placeholder.com/200" },
];

export default function Product() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
          Produk <span className="text-green-500">Unggulan</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={product.id * 100}
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-lg font-bold text-red-500">Rp {product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
