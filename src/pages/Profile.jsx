import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="bg-slate-900 text-white min-h-screen py-32">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Profil Teknik Informatika
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Mengenal lebih dekat Program Studi Teknik Informatika Universitas
              Sam Ratulangi.
            </p>
          </div>

          {/* Sejarah */}
          <section className="mb-16">
            <div className="bg-slate-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-red-500 mb-4">Sejarah</h2>

              <p className="text-slate-300 leading-relaxed">
                Program Studi Teknik Informatika Universitas Sam Ratulangi
                didirikan untuk menjawab kebutuhan tenaga profesional di bidang
                teknologi informasi dan komputer. Seiring perkembangan teknologi
                digital, program studi ini terus mengembangkan kurikulum yang
                relevan dengan kebutuhan industri serta mendorong inovasi
                melalui pendidikan, penelitian, dan pengabdian kepada
                masyarakat.
              </p>
            </div>
          </section>

          {/* Visi dan Misi */}
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-red-500 mb-4">Visi</h2>

              <p className="text-slate-300">
                Menjadi program studi unggul dalam bidang teknologi informasi
                yang menghasilkan lulusan kompeten, inovatif, dan berdaya saing
                global.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-red-500 mb-4">Misi</h2>

              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Menyelenggarakan pendidikan berkualitas.</li>
                <li>Mendorong penelitian dan inovasi teknologi.</li>
                <li>Mengembangkan kerja sama dengan industri.</li>
                <li>
                  Menghasilkan lulusan yang profesional dan berintegritas.
                </li>
              </ul>
            </div>
          </section>

          {/* Pimpinan */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10">
              Pimpinan Program Studi
            </h2>

            <div className="flex justify-center">
              <div className="bg-slate-800 rounded-2xl p-8 w-full max-w-sm text-center">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_nwXXC-O4jjxxJgEXOsyBJBTT5SCVPnE4GVtVMQ3-Uj_lw=s900-c-k-c0x00ffffff-no-rj"
                  alt="Kaprodi"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />

                <h3 className="text-2xl font-semibold">
                  Virginia Tulenan, SKom, MTI
                </h3>

                <p className="text-red-500 mt-2">Ketua Program Studi</p>

                <p className="text-slate-400 mt-4">
                  Teknik Informatika Universitas Sam Ratulangi
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
