const testimonials = [
  { id: 1, name: "Aldi", review: "Makanannya enak dan pelayanannya ramah!"},
  { id: 2, name: "Budi", review: "Produk lokal yang berkualitas, mantap!" },
  { id: 3, name: "Citra", review: "Pengiriman cepat dan rasa memuaskan." },
  { id: 4, name: "Dewi", review: "Harga terjangkau, recommended banget." },
  { id: 5, name: "Eka", review: "Pasti repeat order lagi di Sedap!",  },
];

export default function Testimoni() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Testimoni <span className="text-green-500">Pengguna</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.name}</h3>
              <p className="text-gray-600 italic">&quot;{item.review}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
