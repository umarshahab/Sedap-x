import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div>
      
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center bg-gradient-to-r from-pink-100 to-blue-100 "
      >
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 gap-80">
          {/* Text Content */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-5xl font-bold mb-10">
              Temukan{" "}
              <span className="text-green-500">Kuliner Terbaik</span> dengan Mudah
            </h1>
            <p className="text-gray-600 mb-8">
              Platform rekomendasi makanan, minuman, dan jajanan khas favorit Anda.
            </p>
            <a
              href="#produk"
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
            >
              Lihat Produk
            </a>
          </div>

          {/* Image with animation */}
          <div className="relative w-full max-w-md">
            <motion.img
              src="/img/Order food-amico.svg"
              alt="Ilustrasi Kuliner"
              className="w-full rounded-lg shadow-lg"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-r from-pink-100 to-blue-100">
        <div className="container mx-auto px-6">
          
          {/* Container flex untuk gambar + teks */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10" data-aos="fade-up">
            
            {/* Gambar di kiri */}
            <div className="md:w-1/2">
              <motion.img
                src="/img/Coffee-shop-amico.svg"
                alt="Ilustrasi tentang Sedap"
                className="rounded-lg shadow-lg"
                style={{ width: '650px', height: 'auto' }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
            
            {/* Teks di kanan */}
            <div className="md:w-1/2 text-center md:text-left max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Tentang <span className="text-green-500">Sedap</span>
              </h2>
              <p className="text-gray-600 text-lg mb-12">
                Sedap adalah platform kuliner yang menyediakan berbagai produk makanan dan minuman unggulan dari UMKM lokal dengan kualitas terbaik.
              </p>

              {/* Fitur-fitur */}
              <div className="grid md:grid-cols-3 gap-8 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white shadow-md rounded-xl p-15 hover:scale-105 transition">
                  <div>
                    <img
                        src="/img/fruit-basket-amico.svg" 
                        alt="ceklist"
                        className="w-20 h-20 mx-auto text-green-500" 
                      />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Produk Berkualitas</h3>
                  <p className="text-gray-500 text-sm mt-2">Hanya produk pilihan dengan standar rasa dan kualitas terbaik.</p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-15 hover:scale-105 transition">
                  <div>
                    <img
                        src="/img/Shops-re-opening soon-amico.svg" 
                        alt="ceklist"
                        className="w-20 h-20 mx-auto text-green-500" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Dukung UMKM Lokal</h3>
                  <p className="text-gray-500 text-sm mt-2">Bersama memajukan pelaku usaha kuliner lokal ke pasar digital.</p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-15 hover:scale-105 transition">
                  <div>
                    <img
                        src="/img/Retail-markdown-amico.svg" 
                        alt="ceklist"
                        className="w-20 h-20 mx-auto text-green-500" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Harga Terjangkau</h3>
                  <p className="text-gray-500 text-sm mt-2">Nikmati produk lezat dengan harga ramah di kantong.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>


      {/* Produk Section */}
      <section id="produk" className="bg-gradient-to-r from-pink-100 to-blue-100 pt-60 ">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Produk Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img
                src="/img/nasigoreng.jpg"
                alt="Produk 1"
                className="mb-4 rounded mx-auto"
              />
              <h3 className="font-bold text-xl mb-2">Nasi Goreng Spesial</h3>
              <p className="text-gray-600">Lezat dan penuh rempah khas Nusantara.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img
                src="/img/kopi.jpg"
                alt="Produk 2"
                className="mb-4 rounded mx-auto"
              />
              <h3 className="font-bold text-xl mb-2">Es Kopi Susu</h3>
              <p className="text-gray-600">Rasa creamy yang menyegarkan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img
                src="/img/pisang.jpg"
                alt="Produk 3"
                className="mb-4 rounded mx-auto"
              />
              <h3 className="font-bold text-xl mb-2">Keripik Pisang</h3>
              <p className="text-gray-600">Cemilan renyah favorit keluarga.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img
                src="/img/karie.jpg"
                alt="Produk 3"
                className="mb-4 rounded mx-auto"
              />
              <h3 className="font-bold text-xl mb-2">Karie Ayam </h3>
              <p className="text-gray-600">Lezat dan penuh remoah khas Nusantara</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img
                src="/img/katsu.jpg"
                alt="Produk 5"
                className="mb-4 rounded mx-auto"
                style={{ width: '200px', height: 'auto' }}
              />
              <h3 className="font-bold text-xl mb-2">Chicken Katsu</h3>
              <p className="text-gray-600">Gurih renyah di luar, lembut juicy di dalam</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img
                src="/img/bakmi.jpg"
                alt="Produk 6"
                className="mb-4 rounded mx-auto"
              />
              <h3 className="font-bold text-xl mb-2">Bakmi</h3>
              <p className="text-gray-600">Mie kenyal dengan bumbu gurih yang meresap sempurna</p>
            </div>
          </div>
        </div>
      </section>


      {/* Testimoni Section */}
      <section id="testimoni" className="py-20 bg-gradient-to-r from-pink-100 to-blue-100 pt-60">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Testimoni Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-100">
            
            {/* KIRI: Testimoni */}
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start gap-4 bg-gray-100 p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <img src="/img/umar.svg" alt="Umar" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <p className="text-gray-600 italic">"Makanannya enak banget! Pelayanannya juga cepat."</p>
                  <h4 className="font-bold mt-2">Umar</h4>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-100 p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <img src="/img/Nabila.svg" alt="Nabila" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <p className="text-gray-600 italic">"Saya suka produk lokalnya, rasanya autentik."</p>
                  <h4 className="font-bold mt-2">Nabila</h4>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-100 p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <img src="/img/Yoga.svg" alt="Yoga" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <p className="text-gray-600 italic">"Keren! Bisa cari jajanan favorit dengan mudah."</p>
                  <h4 className="font-bold mt-2">Yoga</h4>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-100 p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <img src="/img/dewi.svg" alt="Dewi" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <p className="text-gray-600 italic">"Sangat membantu UMKM lokal berkembang!"</p>
                  <h4 className="font-bold mt-2">Dewi</h4>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-100 p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <img src="/img/masnur.svg" alt="Masnur" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <p className="text-gray-600 italic">"Harga ramah, rasa bintang lima!"</p>
                  <h4 className="font-bold mt-2">Masnur</h4>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-100 p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <img src="/img/fairuz.svg" alt="Fairuz" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <p className="text-gray-600 italic">"Tampilan aplikasinya keren dan mudah digunakan."</p>
                  <h4 className="font-bold mt-2">Fairuz</h4>
                </div>
              </div>
            </div>

            {/* KANAN: Vektor Ilustrasi */}
            <div className="flex justify-center">
              <motion.img src="/img/customer.svg" alt="Testimoni Vektor" className="w-3/4 md:w-full" 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}/>
            </div>
          </div>
        </div>
</section>


    </div>
  );
}
