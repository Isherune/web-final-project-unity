import Navbar from "../components/Navbar";

function Curriculum() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">

          <h1 className="text-5xl font-bold text-center mb-6">
            Kurikulum
          </h1>

          <p className="text-center text-slate-400 max-w-3xl mx-auto mb-10">
            Kurikulum Teknik Informatika UNSRAT dirancang untuk
            membekali mahasiswa dengan kompetensi di bidang
            pengembangan perangkat lunak, kecerdasan buatan,
            jaringan komputer, basis data, dan teknologi digital.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-3">
                Pemrograman
              </h2>

              <p className="text-slate-300">
                Algoritma, Struktur Data, OOP,
                Web Development, Mobile Development.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-3">
                Infrastruktur
              </h2>

              <p className="text-slate-300">
                Jaringan Komputer, Sistem Operasi,
                Cloud Computing, Keamanan Siber.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-3">
                AI & Data
              </h2>

              <p className="text-slate-300">
                Machine Learning, Data Mining,
                Artificial Intelligence, Big Data.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Curriculum;