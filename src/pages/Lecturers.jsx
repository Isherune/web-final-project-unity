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

      <div className="min-h-screen bg-slate-900 text-white py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-10">
            Direktori Dosen
          </h1>

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
