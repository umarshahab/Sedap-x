export default function About() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tentang <span className="text-green-500">Sedap</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Sedap adalah platform kuliner yang menyediakan berbagai produk makanan dan minuman unggulan dari UMKM lokal dengan kualitas terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition">
            <div className="text-4xl text-green-500 mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">Produk Berkualitas</h3>
            <p className="text-gray-500 text-sm">Hanya produk pilihan dengan standar rasa dan kualitas terbaik.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition">
            <div className="text-4xl text-green-500 mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">Dukung UMKM Lokal</h3>
            <p className="text-gray-500 text-sm">Bersama memajukan pelaku usaha kuliner lokal ke pasar digital.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition">
            <div className="text-4xl text-green-500 mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">Harga Terjangkau</h3>
            <p className="text-gray-500 text-sm">Nikmati produk lezat dengan harga ramah di kantong.</p>
          </div>
        </div>
      </div>

      {/* Dekorasi Lingkaran */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}
