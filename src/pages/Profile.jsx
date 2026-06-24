import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <main className="pt-20 bg-gray-300">
        <section
          className="relative h-[350px] flex items-center justify-center"
          style={{
            backgroundImage: "url('fatekview2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-slate-400/50"></div>

          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
              Profil Teknik Informatika
            </h1>

            <p className="text-xl md:text-2xl text-slate-700">
              Mengenal lebih dekat Program Studi Teknik Informatika Universitas
              Sam Ratulangi.
            </p>
          </div>
        </section>

        <div className="relative bg-gray-300 text-white min-h-screen py-24 overflow-hidden">
          {/* foto segitiga kanan bawah */}
          <div
            className="
              absolute
              bottom-0
              right-0
              w-[120vw]
              h-[120vw]
              opacity-70
              pointer-events-none
            "
          >
            <img
              src="designprofil.jpg"
              alt="Fakultas Teknik"
              className="
                w-full
                h-full
                object-cover
                scale-100
                origin-bottom-right
                opacity-30
                [clip-path:polygon(100%_0,0_100%,100%_100%)]
                [mask-image:linear-gradient(to_top_left,black,transparent)]
                [-webkit-mask-image:linear-gradient(to_top_left,black,transparent)]
              "
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Sejarah */}
            <section className="mb-10">
              <div className="bg-gray-200 rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <h2 className="bg-cyan-600 text-center py-4 rounded-2xl text-3xl font-bold mb-6">
                  Sejarah
                </h2>

                <p className="text-slate-700 leading-relaxed">
                  Program Studi Teknik Informatika Universitas Sam Ratulangi
                  merupakan salah satu program studi di bawah Fakultas Teknik
                  yang dibentuk untuk menjawab kebutuhan sumber daya manusia di
                  bidang teknologi informasi yang terus berkembang pesat.
                  <br />
                  <br />
                  Seiring dengan transformasi digital yang terjadi di berbagai
                  sektor, Program Studi Teknik Informatika UNSRAT berkomitmen
                  menghasilkan lulusan yang memiliki kompetensi akademik,
                  keterampilan profesional, serta kemampuan beradaptasi terhadap
                  perkembangan teknologi terkini.
                  <br />
                  <br />
                  Dalam proses pengembangannya, program studi ini terus
                  melakukan penyempurnaan kurikulum yang mengacu pada kebutuhan
                  industri, perkembangan ilmu pengetahuan, serta standar
                  pendidikan tinggi nasional. Berbagai bidang keilmuan seperti
                  rekayasa perangkat lunak, kecerdasan buatan, data science,
                  jaringan komputer, keamanan siber, sistem informasi, dan
                  teknologi multimedia menjadi bagian dari fokus pembelajaran.
                  <br />
                  <br />
                  Selain kegiatan pendidikan, Program Studi Teknik Informatika
                  UNSRAT aktif mendorong penelitian, inovasi teknologi, dan
                  pengabdian kepada masyarakat. Melalui berbagai kerja sama
                  dengan institusi pemerintah, industri, dan perguruan tinggi
                  lainnya, program studi ini terus berupaya memperkuat kualitas
                  lulusan agar mampu bersaing pada tingkat nasional maupun
                  internasional, khususnya di kawasan Pasifik dan era Revolusi
                  Industri 4.0.
                </p>
              </div>
            </section>

            {/* Visi */}
            <section className="mb-10">
              <div className="bg-gray-200 rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <h2 className="bg-cyan-600 text-center py-4 rounded-2xl text-3xl font-bold mb-6">
                  Visi
                </h2>

                <p className="text-slate-700 text-lg leading-relaxed">
                  Menjadi program studi yang mampu mempersiapkan sumber daya
                  manusia yang unggul di bidang teknologi informasi di kawasan
                  Pasifik dan berbudaya serta mampu bersaing dalam era Revolusi
                  Industri 4.0.
                </p>
              </div>
            </section>

            {/* Misi */}
            <section className="mb-10">
              <div className="bg-gray-200 rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <h2 className="bg-cyan-600 text-center py-4 rounded-2xl text-3xl font-bold mb-6">
                  Misi
                </h2>

                <ul className="space-y-4 text-slate-700 leading-relaxed">
                  <li>
                    • Menyelenggarakan kegiatan pendidikan yang berorientasi
                    pada perkembangan ilmu dan teknologi terkini.
                  </li>

                  <li>
                    • Memfasilitasi aktivitas dan kegiatan kemahasiswaan dalam
                    rangka meningkatkan soft skill mahasiswa.
                  </li>

                  <li>
                    • Menyelenggarakan kegiatan penelitian dan pengabdian kepada
                    masyarakat yang mendukung pengembangan dan penerapan
                    teknologi informasi di berbagai bidang.
                  </li>

                  <li>
                    • Melakukan kerja sama dengan institusi lain dalam rangka
                    meningkatkan kompetensi tenaga pendidik dan lulusan.
                  </li>
                </ul>
              </div>
            </section>

            {/* Tujuan */}
            <section className="mb-16">
              <div className="bg-gray-200 rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <h2 className="bg-cyan-600 text-center py-4 rounded-2xl text-3xl font-bold mb-6">
                  Tujuan
                </h2>

                <ul className="space-y-4 text-slate-700 leading-relaxed">
                  <li>
                    • Menghasilkan lulusan yang memiliki pengetahuan dan
                    keahlian di bidang Teknik Informatika serta mampu mengikuti
                    perkembangan ilmu pengetahuan dan teknologi pada era
                    Revolusi Industri 4.0.
                  </li>

                  <li>
                    • Menghasilkan lulusan yang memiliki wawasan kepasifikan,
                    kemampuan inovasi, etika profesi, sikap profesional, dan
                    jiwa kewirausahaan.
                  </li>

                  <li>
                    • Menghasilkan inovasi ilmu pengetahuan dan teknologi
                    melalui penelitian yang bermanfaat serta kegiatan pengabdian
                    kepada masyarakat berbasis teknologi informasi.
                  </li>

                  <li>
                    • Mewujudkan jejaring kerja sama dan kemitraan dengan
                    berbagai perguruan tinggi, institusi pemerintah, industri,
                    swasta, dan masyarakat.
                  </li>
                </ul>
              </div>
            </section>

            {/* Ketua Program Studi */}
            <section>
              <div className="max-w-6xl mx-auto">
                <div className="bg-gray-200 rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <h2 className="bg-red-900 text-gray-200 text-center py-4 rounded-2xl text-3xl font-bold mb-6">
                    Pimpinan Program Studi
                  </h2>

                  <div className="grid md:grid-cols-[280px_1fr] gap-8 items-center">
                    <img
                      src="https://yt3.googleusercontent.com/ytc/AIdro_nwXXC-O4jjxxJgEXOsyBJBTT5SCVPnE4GVtVMQ3-Uj_lw=s900-c-k-c0x00ffffff-no-rj"
                      alt="Kaprodi"
                      className="w-full max-w-[250px] h-[300px] rounded-2xl mx-auto object-cover"
                    />

                    <div>
                      <h3 className="text-slate-700 text-3xl font-bold">
                        Virginia Tulenan, S.Kom., M.T.I.
                      </h3>

                      <p className="text-slate-600 italic mt-2">
                        Koordinator Program Studi Teknik Informatika
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
