import React, { useState } from "react";

const listKhodam = [
  "Nyi Roro Kidul",
  "Kuntilanak",
  "Pocong",
  "Lelembut",
  "Jin Khodam",
  "Kyai Plered",
  "Kyai Semangka",
  "Kyai Nogo Sosro",
  "Kyai Cundrik",
  "Ratu Pantai Selatan",
  "Gajah Mada",
  "Raden Wijaya",
  "Satria Piningit",
  "Sundel Bolong",
  "Sosok Kiai",
  "Jenglot",
  "Mak Lampir",
  "Cemeti Sari",
  "Gondoruwo",
  "Klewer",
  "Tuyul",
  "Buto Ijo",
  "Misteri Putih",
  "Cilongok",
  "Panglima Jendral",
  "Roh Leluhur",
  "Sari Peningit",
  "Dewa Penunggu",
  "Tanduk",
  "Dewi Rara Jonggrang",
  "Mbah Djoego",
  "Jaran Goyang",
  "Dewa Mataram",
  "Naga",
  "Simbah Gendong",
  "Arwah Kyai",
  "Saur Sepuh",
  "Kyai Raga",
  "Tirta",
  "Ratu Adil",
  "Hantu Jeruk Purut",
  "Kyai Sapu Jagat",
  "Cindelaras",
  "Raja Babi",
  "Naga Pusaka",
  "Ratu Angker",
  "Hantu Terbang",
  "Raja Jenglot",
  "Mbah Surip",
  "Kyai Tumenggung",
  "Sunan Kalijaga",
  "Dewi Sri",
  "Sunan Ampel",
  "Ratu Pesisir",
  "Kyai Harsono",
  "Ratu Sima",
  "Kyai Tembong",
  "Dewa Naga",
  "Dewa Bumi",
  "Pangeran Diponegoro",
  "Nyi Blorong",
  "Ratu Segoro",
  "Kyai Padepokan",
  "Hantu Rumah Kosong",
  "Kyai Jaran",
  "Dewi Kwan Im",
  "Kyai Kuning",
  "Sunan Giri",
  "Dewi Laksmi",
  "Pangeran Sisingamangaraja",
  "Ratu Simo",
  "Kyai Bagus",
  "Nyi Roro Kidul",
  "Mbah Waris",
  "Kyai Sumeru",
  "Satria Sapu Jagat",
  "Hantu Babi Ngepet",
  "Kyai Pusaka",
  "Dewa Wisnu",
  "Raja Dewa",
  "Kyai Macan",
  "Nyi Jenglot",
  "Mbah Kali",
  "Kyai Pemanahan",
  "Sultan Agung",
  "Kyai Wali",
  "Dewi Saraswati",
  "Mbah Jaran",
  "Ratu Madu",
  "Kyai Karang",
  "Pangeran Soegih",
  "Kyai Putih",
  "Ratu Wulansari",
  "Dewa Ganesa",
  "Kyai Merapi",
  "Sunan Bonang",
  "Kyai Tegal",
  "Nyi Blorong",
  "Kyai Jagad",
  "Ratu Pertiwi",
];

// Fungsi untuk mendapatkan nama Khodam acak
function getRandomKodam() {
  const randomIndex = Math.floor(Math.random() * listKhodam.length);
  return listKhodam[randomIndex];
}
function CekKhodam() {
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomKodam = getRandomKodam();
    setResult(`Nama Khodam yang terpilih adalah: ${randomKodam}`);
  };
  return (
    <div className="w-full h-full  flex items-center justify-center min-h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
            Cek Khodam
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Nama
              </label>
              <div className="mt-2">
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  required
                  placeholder="Masukkan Nama Anda"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cek
              </button>
            </div>
          </form>

          {result && (
            <div className="mt-4 text-center text-lg font-medium text-gray-900">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CekKhodam;
