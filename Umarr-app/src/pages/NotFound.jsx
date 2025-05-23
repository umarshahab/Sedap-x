import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-50">
      <DotLottieReact
        src="https://assets10.lottiefiles.com/packages/lf20_ZQ5n5d.json"  // Link animasi Lottie
        className="w-80 mb-6"
        loop
        autoplay
      />
      <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! Halaman yang kamu cari tidak ditemukan.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
}
