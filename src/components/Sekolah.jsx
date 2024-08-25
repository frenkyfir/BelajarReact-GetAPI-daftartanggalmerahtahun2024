// src/components/SearchComponent.js

import React, { useState } from "react";
import { searchWithSekolah } from "../api/sekolahApi";
import { data } from "autoprefixer";

const Sekolah = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchWithSekolah(query);
      setResults(data);

      console.log(data);
      // Sesuaikan dengan struktur data dari API Gemini
    } catch (err) {
      setError("Failed to fetch results");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("id-ID", options); // Format tanggal untuk bahasa Indonesia
  };

  return (
    <>
      <body className="bg-gray-100 font-sans">
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Daftar Tanggal Merah 2024</h1>
            {/* <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#home" className="hover:text-gray-400">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#dates" className="hover:text-gray-400">
                    Tanggal Merah
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-400">
                    Kontak
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </header>

        <main className="container mx-auto p-6">
          <section id="dates" className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Daftar Tanggal Merah</h2>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
                onClick={handleSearch}
              >
                Click Here
              </button>
            </div>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 border-b">
                  <th className="px-4 py-2 text-center">Tanggal</th>
                  <th className="px-4 py-2 text-center">Keterangan</th>
                  <th className="px-4 py-2 text-center">Cuti ?</th>
                </tr>
              </thead>
              <tbody>
                {results.map((data, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">
                      {formatDate(data.tanggal)}
                    </td>
                    <td className="border px-4 py-2">{data.keterangan}</td>
                    <td className="border px-4 py-2">
                      {data.is_cuti ? "Ya" : "Tidak"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy;Belajar Get API by frenkyfir</p>
        </footer>
      </body>
    </>
  );
};

export default Sekolah;
