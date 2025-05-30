import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

const FooterG = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 px-8 md:px-20">

        {/* Kolom 1 - Brand Deskripsi */}
        <div>
          <span className="font-extrabold text-3xl text-white-800">
          Sedap<span className="text-green-500">x</span>
        </span>
          <p className="text-sm leading-relaxed mt-4">
              SedapX adalah platform digital yang menghubungkan Anda dengan makanan lokal terenak di sekitar Anda. 
            Dukung UMKM, rasakan cita rasa autentik Indonesia.
          </p>
        </div>

        {/* Kolom 2 - Navigasi */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Navigasi Cepat</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Beranda</a></li>
            <li><a href="#" className="hover:text-white">Produk Unggulan</a></li>
            <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white">Kontak</a></li>
          </ul>
        </div>

        {/* Kolom 3 - Sosial Media */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Ikuti Kami</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTiktok /></a>
          </div>
          <p className="mt-4 text-sm">Jangan lewatkan update & promo menarik dari kami!</p>
        </div>

        {/* Kolom 4 - Partner */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Partner Kami</h3>
          <div className="space-y-3">
            <img src="/images/partner-logo.png" alt="Partner 1" className="w-32" />
            <img src="/images/partner2-logo.png" alt="Partner 2" className="w-32" />
            <img src="/images/partner3-logo.png" alt="Partner 3" className="w-32" />
          </div>
        </div>

      </div>

      {/* Garis & Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500 px-8 md:px-20">
        © 2025 SedapX. All Rights Reserved.
        <p className="mt-2">Desain dan Pengembangan oleh Tim SedapX Creative Studio</p>
      </div>
    </footer>
  );
};

export default FooterG;
