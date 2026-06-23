import Navbar from "../components/Navbar";

function Facilities() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white py-32">
        <div className="container mx-auto px-6">

          <h1 className="text-5xl font-bold text-center mb-6">
            Fasilitas
          </h1>

          <p className="text-center text-slate-400 mb-10">
            Sarana dan prasarana pendukung pembelajaran
            mahasiswa Teknik Informatika UNSRAT.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-3">
                Laboratorium Komputer
              </h2>

              <p className="text-slate-300">
                Digunakan untuk praktikum dan penelitian mahasiswa.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-3">
                Ruang Kelas Modern
              </h2>

              <p className="text-slate-300">
                Dilengkapi proyektor dan fasilitas pembelajaran digital.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-3">
                Akses Internet
              </h2>

              <p className="text-slate-300">
                Mendukung proses belajar dan penelitian.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Facilities;