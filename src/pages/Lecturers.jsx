import Navbar from "../components/Navbar";
import { useState } from "react";
import lecturersData from "../data/lecturers.json";
import LecturerCard from "../components/LecturerCard";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

function Lecturers() {
  const [search, setSearch] = useState("");

  const filteredLecturers = lecturersData.filter((lecturer) =>
    lecturer.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-300 text-white">
        {/* Header Section */}
        <div
          className="relative py-32"
          style={{
            backgroundImage: "url('inforengi.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay gelap */}
          <div className="absolute inset-0 bg-gray-300/80"></div>

          <div className="relative z-10 container mx-auto px-6">
            <h1 className="text-cyan-700 text-5xl font-bold text-center">
              Direktori Dosen
            </h1>

            <p className="text-slate-700 text-center mt-4 max-w-2xl mx-auto">
              Informasi dosen Program Studi Teknik Informatika Universitas Sam
              Ratulangi berdasarkan bidang keahlian dan kelompok bidang kajian.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-10">
          {/* Search */}
          <div className="max-w-md mx-auto mb-10">
            <SearchBar
              search={search}
              setSearch={setSearch}
              placeholder="Cari nama dosen..."
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredLecturers.map((lecturer) => (
              <LecturerCard key={lecturer.id} lecturer={lecturer} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Lecturers;
